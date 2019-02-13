function addTask() {
    var message = prompt("Please enter the tasks to be done");
    if (message != null) {
        var res = document.getElementById("tasks");
        resChild = document.createElement('div');
        resChild.innerHTML = `<div class="task">
        <p>${message}</p>
        <label class="checkbox-main">
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
    </div>`;
        res.appendChild(resChild);
      }
}