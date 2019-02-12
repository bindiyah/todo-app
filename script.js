function addTask() {
    var message = prompt("Please enter the tasks to be done");
    if (message != null) {
        document.getElementById("completed").innerHTML = message;
      }
}