import elementsModels from "./elementModels";

class DisplayController {
  constructor() {}

  clearChildrenNodes(parentNode) {
    while(parentNode.firstChild) parentNode.removeChild(parentNode.firstChild);
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