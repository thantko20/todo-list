import Project from "./project";

const ProjectManager = (function() {
  let myProjects = [];

  const getProjects = function getMyProjects() {
    return myProjects;
  }

  const createProject = function (name) {
    return new Project(name);
  }

  const addProject = function addProjectToMyProjects(project) {
    myProjects.push(project);
  }

  const editProjectName = function (projectId, name) {
    myProjects[projectId].name = name;
  }

  const addTask = function (projectId, task) {
    myProjects[projectId].tasks.push(task);
  }

  const removeTask = function (projectId, taskId) {
    project.tasks.splice(taskId, 1);
  }

  const removeProject = function (projectId) {
    myProjects.splice(projectId, 1);
  }

  return {
    getProjects,
    createProject,
    addProject,
    editProjectName,
    addTask,
    removeTask,
    removeProject
  }
})();

export default ProjectManager;