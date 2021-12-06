import Task from "./task";

class TaskManager {
  constructor(){}

  createTask(taskInfo) {
    let {title, description, dueDate, priority, finishedStatus} = taskInfo;
    return new Task(title, description, dueDate, priority, finishedStatus);
  }

  editTitle(task, title) {
    task.title = title;
  }

  editDescripttion(task, description) {
    task.description = description;
  }

  editTask(task, newInfo) {
    let {title, description, dueDate, priority, finishedStatus} = newInfo;

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.finishedStatus = finishedStatus;
  }
}

export default TaskManager;