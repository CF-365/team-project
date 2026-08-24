console.log("Team Task Tracker loaded.");
const taskCount = document.querySelectorAll("#task-list li").length;
console.log("Total tasks: " + taskCount);
// testing the git workflow
// working on practice-branch
// Add new task feature
const addTaskBtn = document.getElementById("addTaskBtn");
const newTaskInput = document.getElementById("new-task-input");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    newTaskInput.value = "";
  }
});