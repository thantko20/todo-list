import Task from "./task";

const TaskManager = (function() {
  const createTask = function (taskInfo) {
    let {title, description, dueDate, priority, finishedStatus} = taskInfo;
    return new Task(title, description, dueDate, priority, finishedStatus);
  }

  const editTask = function editTaskFromGivenInfo(task, newInfo) {
    let {title, description, dueDate, priority, finishedStatus} = newInfo;

    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.finishedStatus = finishedStatus;
  }

  return {
    createTask,
    editTask
  }
})();

export default TaskManager;