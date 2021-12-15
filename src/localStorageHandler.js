const LocalStorageHandler = (function () {
  const saveProjects = function (projects) {
    localStorage.setItem('myProjects', JSON.stringify(projects));
  }

  const loadProjects = function () {
    return JSON.parse(localStorage.getItem('myProjects'));
  }

  return {
    saveProjects,
    loadProjects
  }
})();

export default LocalStorageHandler;