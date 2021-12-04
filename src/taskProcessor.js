import Task from "./task";

class TaskManager {
  constructor(){}

  createTask(taskInfo) {
    let {title, description, dueDate, priority, checkStatus} = taskInfo;
    return new Task(title, description, dueDate, priority, checkStatus);
  }

  editTitle(task, title) {
    task.title = title;
  }

  editDescripttion(task, description) {
    task.description = description;
  }
}

export default TaskManager;