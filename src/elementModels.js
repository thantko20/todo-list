import DeleteIcon from '../assets/recycle-bin.png';
import ExpandIcon from '../assets/expand-icon.svg'

const elementsModels = {
  projectTabModel(name, projectId) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');
    projectTab.setAttribute('data-project-index', projectId);

    const projectName = document.createElement('span');
    projectName.classList.add('project-name');
    projectName.textContent = name;

    const editProjectBtn = document.createElement('button');
    editProjectBtn.classList.add('edit-project');
    editProjectBtn.textContent = 'Edit Name';

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-btn', 'delete-project-btn');

    const binIcon = new Image();
    binIcon.classList.add('svg-icons');
    binIcon.src = DeleteIcon;

    deleteProjectBtn.appendChild(binIcon);

    projectTab.append(projectName, editProjectBtn, deleteProjectBtn);

    return projectTab;
  },

  taskModel(task, taskId) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.setAttribute('data-task-index', taskId);
    
    const finishedStatus = document.createElement('input');
    finishedStatus.type = 'checkbox';
    finishedStatus.checked = task.finishedStatus;
    finishedStatus.classList.add('finished-status');

    const title = document.createElement('div');
    title.textContent = task.title;
    title.classList.add('title');
    task.finishedStatus ? title.classList.add('strikethrough') : title.classList.remove('strikethrough');

    const priority = document.createElement('div');
    priority.classList.add('priority', task.priority);
    priority.textContent = task.priority;

    const dueDate = document.createElement('div');
    dueDate.classList.add('due-date');
    dueDate.textContent = task.dueDate;

    const expandIcon = new Image();
    expandIcon.src = ExpandIcon;
    expandIcon.classList.add('svg-icons', 'expand-icon');

    const expandButton = document.createElement('button');
    expandButton.classList.add('expand-btn');
    expandButton.appendChild(expandIcon);

    taskElement.append(finishedStatus, title, priority, dueDate, expandButton);

    return taskElement;
  },
  
  addProjectModal() {
    const projectModal = document.createElement('form');
    projectModal.setAttribute('action', '#');
    projectModal.classList.add('modal');

    const projectModalHeader = document.createElement('div');
    projectModalHeader.classList.add('project-modal-header');

    const headerText = document.createElement('div');
    headerText.textContent = 'Enter Project Name';

    const exitBtn = document.createElement('button');
    exitBtn.classList.add('exit-btn');
    exitBtn.innerHTML = '&times;';

    projectModalHeader.append(headerText, exitBtn);

    const inputPart = document.createElement('div');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'project name...';
    input.classList.add('project-name-input');

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.classList.add('save', 'save-project');
    saveBtn.textContent = 'Save';

    inputPart.append(input, saveBtn);

    projectModal.append(projectModalHeader, inputPart);

    return projectModal;
  },

  editProjectModal(inputText) {
    const projectModal = document.createElement('form');
    projectModal.setAttribute('action', '#');
    projectModal.classList.add('modal');

    const projectModalHeader = document.createElement('div');
    projectModalHeader.classList.add('project-modal-header');

    const headerText = document.createElement('div');
    headerText.textContent = 'Edit Project Name';

    const exitBtn = document.createElement('button');
    exitBtn.classList.add('exit-btn');
    exitBtn.innerHTML = '&times;';

    projectModalHeader.append(headerText, exitBtn);

    const inputPart = document.createElement('div');

    const input = document.createElement('input');
    input.type = 'text';
    input.value = inputText;
    input.classList.add('project-name-input');

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.classList.add('save', 'edit-name');
    saveBtn.textContent = 'Save Changes';

    inputPart.append(input, saveBtn);

    projectModal.append(projectModalHeader, inputPart);

    return projectModal;
  }
}

export default elementsModels;