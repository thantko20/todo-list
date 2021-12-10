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
}

export default elementsModels;