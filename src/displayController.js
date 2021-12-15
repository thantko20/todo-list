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

  const popUpTaskModal = function () {
    if(checkExistingModal()) return;
    const body = document.body;
    body.appendChild(elementsModels.addTaskModal());
  }

  const popUpEditTaskModal = function (task) {
    if(checkExistingModal()) return;

    const body = document.body;
    body.appendChild(elementsModels.editTaskModal(task));
  }

  const exitModal = function () {
    const child = document.querySelector('.modal');
    child.remove();
  }

  const renderProjectTabs = function (projects) {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    clearChildNodes(projectsWrapper);

    if(projects.length === 0) return;

    projects.forEach(project => {
      projectsWrapper.appendChild(elementsModels.projectTabModel(project.name, projects.indexOf(project)));
    });
  }

  const renderTasks = function renderTasksOfCurrentProject (project) {
    const tasksContainer = document.querySelector('.tasks-container');
    clearChildNodes(tasksContainer);

    if(!project) return;

    const tasks = project.tasks;

    tasks.forEach(task => {
      tasksContainer.appendChild(elementsModels.taskModel(task, tasks.indexOf(task)));
    })
  }

  const toggleProjectTab = function toggleCurrentProjectTabStyle (projectId) {
    const projects = document.querySelectorAll('.project-name');

    projects.forEach(project => {
      const projectIndex = project.parentNode.getAttribute('data-project-index');

      projectId == projectIndex ? project.classList.add('active-project') : project.classList.remove('active-project');
    })
  }

  const render = function renderAll (projects, currentProjectId) {
    renderProjectTabs(projects);
    renderTasks(projects[currentProjectId]);
    toggleProjectTab(currentProjectId);
  }

  return {
    clearChildNodes,
    checkExistingModal,
    popUpEditProjectModal,
    popUpProjectModal,
    popUpTaskModal,
    popUpEditTaskModal,
    exitModal,
    renderProjectTabs,
    renderTasks,
    toggleProjectTab,
    render
  }
})();

export default DisplayController;