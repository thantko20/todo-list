import './style/style.css';
import TaskManager from './taskProcessor';
import ProjectManager from './projectProcessor';
import DisplayController from './displayController';
import { format } from 'date-fns';

const DOMHandler = (function() {
  let myProjects = ProjectManager.getProjects();

  let currentProjectId = 0;
  let projectIdBeingEdited = null;
  let taskIdBeingEdited = null;

  ProjectManager.addProject(ProjectManager.createProject('text'));
  
  let taskProperties = {
    title: 'fjdlkas',
    description: 'dfsadfahg',
    dueDate: '12/12/2021',
    priority: 'High',
    finishedStatus: true,
  }

  let task = TaskManager.createTask(taskProperties);
  ProjectManager.addTask(0, task);
  ProjectManager.addTask(0, task);
  ProjectManager.addTask(0, task);
  ProjectManager.addTask(0, task);

  const triggerAddProjectBtn = function () {
    DisplayController.popUpProjectModal();
  }

  const triggerDelProjectBtn = function (e) {
    const projectId = e.target.parentNode.getAttribute('data-project-index');
    if(projectId == currentProjectId) currentProjectId = 0;
    ProjectManager.removeProject(projectId);
    DisplayController.render(myProjects, currentProjectId);
  }

  const triggerExitBtn = function () {
    DisplayController.exitModal();
  }

  const triggerSaveProjectBtn = function (form) {
    const projectName = form.pname.value;

    DisplayController.exitModal();
    ProjectManager.addProject(ProjectManager.createProject(projectName));
    DisplayController.render(myProjects, currentProjectId);
  }

  const triggerEditProjectBtn = function (e) {
    const targetParent = e.target.parentNode;

    projectIdBeingEdited = getProjectId(targetParent);
    DisplayController.popUpEditProjectModal(myProjects[projectIdBeingEdited].name);
  }

  const triggerChangeNameBtn = function (form) {
    const projectName = form.pname.value;

    ProjectManager.editProjectName(projectIdBeingEdited, projectName);
    DisplayController.exitModal();
    DisplayController.render(myProjects, currentProjectId);
  }

  const triggerSelectedProject = function (e) {
    const projectTab = e.target.parentNode;
    currentProjectId = getProjectId(projectTab);

    DisplayController.renderTasks(myProjects[currentProjectId]);
    DisplayController.toggleProjectTab(currentProjectId);
  }

  const triggerAddTaskBtn = function () {
    DisplayController.popUpTaskModal();
  }

  const getProjectId = function (target) {
    return target.getAttribute('data-project-index');
  }

  const listenEvents = function () {
    const addProjectBtn = document.querySelector('.add-project-btn');
    const addTaskBtn = document.querySelector('.add-task-btn');

    document.addEventListener('click', (e) => {
      const targetClasslist = e.target.classList;
      if(targetClasslist.contains('delete-project-btn')) triggerDelProjectBtn(e);

      else if(targetClasslist.contains('edit-project')) triggerEditProjectBtn(e);

      else if(targetClasslist.contains('exit-btn')) triggerExitBtn();

      else if(targetClasslist.contains('project-name')) triggerSelectedProject(e);
    })

    document.addEventListener('submit', (e) => {
      e.preventDefault();
      const targetClasslist = e.target.classList;

      if(targetClasslist.contains('add-project-modal')) triggerSaveProjectBtn(e.target);

      else if(targetClasslist.contains('edit-project-modal')) triggerChangeNameBtn(e.target);
    });

    addProjectBtn.addEventListener('click', triggerAddProjectBtn);
    addTaskBtn.addEventListener('click', triggerAddTaskBtn);
  }

  const init = function initApp() {
    DisplayController.render(myProjects, currentProjectId);
    listenEvents();
  }

  return { init }
})();

export default DOMHandler;