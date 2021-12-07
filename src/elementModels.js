const elementsModels = {
  projectTabModel(name) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');

    const projectName = document.createElement('span');
    projectName.classList.add('project-name');
    projectName.textContent = name;

    const editProjectBtn = document.createElement('button');
    editProjectBtn.classList.add('edit-project');
    editProjectBtn.textContent = 'Edit Name';

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.classList.add('delete-btn', 'delete-project');
    deleteProjectBtn.textContent = '&times;';

    projectTab.append(projectName, editProjectBtn, deleteProjectBtn);

    return projectTab;
  },
}

export default elementsModels;