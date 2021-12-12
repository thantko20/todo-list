import './style/style.css';
import TaskManager from './taskProcessor';
import ProjectManager from './projectProcessor';
import DisplayController from './displayController';
import { format } from 'date-fns';

const mainProgram = (function() {
  let myProjects = [];
  const taskManager = new TaskManager();
  const projectManager = new ProjectManager();
  const displayController = new DisplayController();

  let currentProjectId = 0;
  let projectIdBeingEdited = null;

  displayController.renderProjectTabs(myProjects);

  listenEvents();

  function triggerAddProjectBtn() {
    displayController.popUpProjectModal();
  }

  function triggerDelProjectBtn(e) {
    const projectId = e.target.parentNode.getAttribute('data-project-index');
    projectManager.removeProject(projectId, myProjects);
    displayController.renderProjectTabs(myProjects);
  }

  function triggerExitBtn() {
    displayController.exitModal();
  }

  function triggerSaveProjectBtn(e) {
    e.preventDefault();
    const input = document.querySelector('.project-name-input');
    const projectName = input.value;
    if(projectName.length === 0){
      alert("Can't be empty field!");
      return;
    }
    displayController.exitModal();
    myProjects.push(projectManager.createProject(projectName));
    displayController.renderProjectTabs(myProjects);
  }

  function triggerEditProjectBtn(e) {
    const targetParent = e.target.parentNode;

    projectIdBeingEdited = getProjectId(targetParent);
    displayController.popUpEditProjectModal(myProjects[projectIdBeingEdited].name);
  }

  function triggerChangeNameBtn(e) {
    const input = document.querySelector('.project-name-input');
    const text = input.value;
    projectManager.editProjectName(myProjects[projectIdBeingEdited], text);
    displayController.exitModal();
    displayController.renderProjectTabs(myProjects);
  }

  function getProjectId(target) {
    return target.getAttribute('data-project-index');
  }

  function listenEvents() {
    const addProjectBtn = document.querySelector('.add-project-btn');

    document.addEventListener('click', (e) => {
      const targetClasslist = e.target.classList;
      if(targetClasslist.contains('delete-project-btn')) triggerDelProjectBtn(e);

      else if(targetClasslist.contains('edit-project')) triggerEditProjectBtn(e);

      else if(targetClasslist.contains('exit-btn')) triggerExitBtn();

      else if(targetClasslist.contains('save-project')) triggerSaveProjectBtn(e);

      else if(targetClasslist.contains('edit-name')) triggerChangeNameBtn(e);
    })

    addProjectBtn.addEventListener('click', triggerAddProjectBtn);
  }
})();