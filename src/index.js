document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form");

  // won't redirect when 'submit' is clicked
  taskForm.addEventListener('click', function(event) {
    event.preventDefault();
    let taskDescription = document.getElementById("new-task-description").value;

    // make a new task
    insertTask(taskDescription)
  })
});


function insertTask(task) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(task);
  node.appendChild(textNode);
  document.getElementById("main-content").appendChild(node)
}