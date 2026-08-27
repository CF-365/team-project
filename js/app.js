console.log("Team Task Tracker loaded.");
const taskCount = document.querySelectorAll("#task-list li").length;
console.log("Total tasks: " + taskCount);
// testing the git workflow
// working on practice-branch
// Add new task feature
const addTaskBtn = document.getElementById("add-task-btn");
const newTaskInput = document.getElementById("new-task-input");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    newTaskInput.value = "";
    // Mark task complete feature
const existingTasks = document.querySelectorAll("#task-list li");
existingTasks.forEach(function (task) {
  task.addEventListener("click", function () {
    task.classList.toggle("completed");
  });
});
  }
});