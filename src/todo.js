"use strict";

const addTaskTrigger = document.getElementsByClassName("js-addTask-trigger")[0];
const addTaskTarget = document.getElementsByClassName("js-addTask-target")[0];
const addTaskValue = document.getElementsByClassName("js-addTask-value")[0];

const removeTask = (removeButton) => {
  const targetTask = removeButton.closest("li");
  addTaskTarget.removeChild(targetTask);
};

const addTask = (task) => {
  const listItem = document.createElement("li");
  const removeButton = document.createElement("button");
  const completeButton = document.createElement("button");

  removeButton.innerText = "削除";
  removeButton.addEventListener("click", () => removeTask(removeButton));
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => completeTask(completeButton));

  listItem.innerText = task;

  listItem.append(completeButton);
  listItem.append(removeButton);
  addTaskTarget.appendChild(listItem);
};

addTaskTrigger.addEventListener("click", () => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = "";
});

const completeTask = (completeButton) => {
  const targetTask = completeButton.closest("li");
  targetTask.classList.add("isComplete");
  targetTask.removeChild(completeButton);
};
