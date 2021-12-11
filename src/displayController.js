import elementsModels from "./elementModels";

class DisplayController {
  constructor() {}

  clearChildrenNodes(parentNode) {
    while(parentNode.firstChild) parentNode.removeChild(parentNode.firstChild);
  }

  popUpProjectModal() {
    if(this.checkExistingModal()) return;
    const body = document.body;
    body.appendChild(elementsModels.addProjectModal());
  }

  popUpEditProjectModal(inputText) {
    if(this.checkExistingModal()) return;

    const body = document.body;
    body.appendChild(elementsModels.editProjectModal(inputText));
  }

  exitModal() {
    const child = document.querySelector('.modal');
    child.remove();
  }

  checkExistingModal() {
    const modal = document.querySelector('.modal');
    if(modal) return true;
  }

  renderProjectTabs(projects) {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    this.clearChildrenNodes(projectsWrapper);
    projects.forEach(project => {
      projectsWrapper.appendChild(elementsModels.projectTabModel(project.name, projects.indexOf(project)));
    });
  }
}

export default DisplayController;