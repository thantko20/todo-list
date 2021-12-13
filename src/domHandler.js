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
    ProjectManager.removeProject(projectId);
    DisplayController.renderProjectTabs(myProjects);
  }

  const triggerExitBtn = function () {
    DisplayController.exitModal();
  }

  const triggerSaveProjectBtn = function (e) {
    e.preventDefault();
    const input = document.querySelector('.project-name-input');
    const projectName = input.value;
    if(projectName.length === 0){
      alert("Can't be empty field!");
      return;
    }
    DisplayController.exitModal();
    ProjectManager.addProject(ProjectManager.createProject(projectName));
    DisplayController.renderProjectTabs(myProjects);
  }

  const triggerEditProjectBtn = function (e) {
    const targetParent = e.target.parentNode;

    projectIdBeingEdited = getProjectId(targetParent);
    DisplayController.popUpEditProjectModal(myProjects[projectIdBeingEdited].name);
  }

  const triggerChangeNameBtn = function (e) {
    const input = document.querySelector('.project-name-input');
    const text = input.value;
    ProjectManager.editProjectName(projectIdBeingEdited, text);
    DisplayController.exitModal();
    DisplayController.renderProjectTabs(myProjects);
  }

  const triggerSelectedProject = function (e) {
    const projectTab = e.target.parentNode;
    currentProjectId = getProjectId(projectTab);

    DisplayController.renderTasks(myProjects[currentProjectId]);
    DisplayController.toggleProjectTab(currentProjectId);
  }

  const getProjectId = function (target) {
    return target.getAttribute('data-project-index');
  }

  const listenEvents = function () {
    const addProjectBtn = document.querySelector('.add-project-btn');

    document.addEventListener('click', (e) => {
      const targetClasslist = e.target.classList;
      if(targetClasslist.contains('delete-project-btn')) triggerDelProjectBtn(e);

      else if(targetClasslist.contains('edit-project')) triggerEditProjectBtn(e);

      else if(targetClasslist.contains('exit-btn')) triggerExitBtn();

      else if(targetClasslist.contains('save-project')) triggerSaveProjectBtn(e);

      else if(targetClasslist.contains('edit-name')) triggerChangeNameBtn(e);

      else if(targetClasslist.contains('project-name')) triggerSelectedProject(e);
    })

    addProjectBtn.addEventListener('click', triggerAddProjectBtn);
  }

  const init = function initApp() {
    DisplayController.renderProjectTabs(myProjects);
    DisplayController.renderTasks(myProjects[currentProjectId]);
    listenEvents();
  }

  return { init }
})();

export default DOMHandler;