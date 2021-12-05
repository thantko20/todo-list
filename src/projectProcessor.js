import Project from "./project";

class ProjectManager {
  constructor() {}

  createProject(name) {
    return new Project(name);
  }

  addTask(project, task) {
    project.tasks.push(task);
  }

  removeTask(project, taskId) {
    project.tasks.splice(taskId, 1);
  }

  removeProject(projectId) {
    myProjects.splice(projectId, 1);
  }
}

export default ProjectManager;