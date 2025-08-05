document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("task-input");
  const addBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    input.value = ""; 
  });
});
