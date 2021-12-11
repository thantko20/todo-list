import DeleteIcon from './assets/recycle-bin.png';

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
    binIcon.src = DeleteIcon;

    deleteProjectBtn.appendChild(binIcon);

    projectTab.append(projectName, editProjectBtn, deleteProjectBtn);

    return projectTab;
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
    headerText.textContent = 'Enter Project Name';

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
    saveBtn.textContent = 'Save';

    inputPart.append(input, saveBtn);

    projectModal.append(projectModalHeader, inputPart);

    return projectModal;
  }
}

export default elementsModels;