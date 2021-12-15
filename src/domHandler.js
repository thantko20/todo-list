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

  const triggerAddProjectBtn = function () {
    DisplayController.popUpProjectModal();
  }

  const triggerDelProjectBtn = function (target) {
    const projectId = getIdOf(target, 'data-project-index');
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

  const triggerEditProjectBtn = function (target) {
    projectIdBeingEdited = getIdOf(target, 'data-project-index');
    DisplayController.popUpEditProjectModal(myProjects[projectIdBeingEdited].name);
  }

  const triggerChangeNameBtn = function (form) {
    const projectName = form.pname.value;

    ProjectManager.editProjectName(projectIdBeingEdited, projectName);
    DisplayController.exitModal();
    DisplayController.render(myProjects, currentProjectId);
  }

  const triggerSelectedProject = function (target) {
    currentProjectId = getIdOf(target, 'data-project-index');

    DisplayController.renderTasks(myProjects[currentProjectId]);
    DisplayController.toggleProjectTab(currentProjectId);
  }

  const triggerAddTaskBtn = function () {
    if(!myProjects[currentProjectId]) return;

    DisplayController.popUpTaskModal();
  }

  const triggerSaveTaskBtn = function (form) {
    const taskInfo = {
      title: form.title.value,
      description: form.description.value,
      dueDate: form.date.value,
      priority: form.priority.value,
      finishedStatus: form.status.value == 'YES' ? true : false
    }

    let newTask = TaskManager.createTask(taskInfo);

    ProjectManager.addTask(currentProjectId, newTask);
    DisplayController.exitModal();
    DisplayController.render(myProjects, currentProjectId);
  }

  const triggerFinishedStatusBtn = function (target) {
    const taskId = getIdOf(target, 'data-task-index');
    const currentProject = myProjects[currentProjectId];

    const checkStatus = target.checked;
    TaskManager.toggleStatus(currentProject.tasks[taskId], checkStatus);

    DisplayController.render(myProjects, currentProjectId);
  }

  const getIdOf = function (curr, attrName) {
    while(!curr.hasAttribute(attrName)) curr = curr.parentNode;

    return curr.getAttribute(attrName);
  }

  const listenEvents = function () {
    const addProjectBtn = document.querySelector('.add-project-btn');
    const addTaskBtn = document.querySelector('.add-task-btn');

    document.addEventListener('click', (e) => {
      const targetClasslist = e.target.classList;
      if(targetClasslist.contains('delete-project-btn')) triggerDelProjectBtn(e.target);

      else if(targetClasslist.contains('edit-project')) triggerEditProjectBtn(e.target);

      else if(targetClasslist.contains('exit-btn')) triggerExitBtn();

      else if(targetClasslist.contains('project-name')) triggerSelectedProject(e.target);

      else if(targetClasslist.contains('finished-status')) triggerFinishedStatusBtn(e.target);
    })

    document.addEventListener('submit', (e) => {
      e.preventDefault();
      const targetClasslist = e.target.classList;

      if(targetClasslist.contains('add-project-modal')) triggerSaveProjectBtn(e.target);

      else if(targetClasslist.contains('edit-project-modal')) triggerChangeNameBtn(e.target);

      else if(targetClasslist.contains('add-task-modal')) triggerSaveTaskBtn(e.target);
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