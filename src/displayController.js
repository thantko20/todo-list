import elementsModels from "./elementModels";

const DisplayController = (function() {

  const clearChildNodes = function clearChildNodesFromParentNode(parentNode) {
    while(parentNode.firstChild) parentNode.removeChild(parentNode.firstChild);
  }

  const checkExistingModal = function checkExistingModalInWindow() {
    const modal = document.querySelector('.modal');
    if(modal) return true;
  }

  const popUpProjectModal = function () {
    if(checkExistingModal()) return;
    const body = document.body;
    body.appendChild(elementsModels.addProjectModal());
  }

  const popUpEditProjectModal = function (inputText) {
    if(checkExistingModal()) return;

    const body = document.body;
    body.appendChild(elementsModels.editProjectModal(inputText));
  }

  const exitModal = function () {
    const child = document.querySelector('.modal');
    child.remove();
  }

  const renderProjectTabs = function (projects) {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    clearChildNodes(projectsWrapper);
    projects.forEach(project => {
      projectsWrapper.appendChild(elementsModels.projectTabModel(project.name, projects.indexOf(project)));
    });
  }

  const renderTasks = function renderTasksOfCurrentProject (project) {
    const tasksContainer = document.querySelector('.tasks-container');
    const tasks = project.tasks;

    clearChildNodes(tasksContainer);
    tasks.forEach(task => {
      tasksContainer.appendChild(elementsModels.taskModel(task, tasks.indexOf(task)))
    })
  }

  return {
    clearChildNodes,
    checkExistingModal,
    popUpEditProjectModal,
    popUpProjectModal,
    exitModal,
    renderProjectTabs,
    renderTasks
  }
})();

export default DisplayController;