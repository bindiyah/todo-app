var todo = [];
var done = [];
function addTask() {
    var message = prompt("Please enter the tasks to be done");
    if (message != null) {
        todo.push(message);
        addTodo();
    }
}
function addTodo(){
var arr =todo.map((value, index)=> {
    return `<div class="task">
    <p>${value}</p>
    <label class="checkbox-main">
        <input type="checkbox" onclick="addDone(${index})">
        <span class="checkmark"></span>
    </label>
</div>`;
});
var tasks = document.getElementById("tasks");
tasks.innerHTML = arr.join(" ");
}
function addDone(input){
        done.push(todo[input]);
        todo = todo.filter((a, index) => index !== input);
addTodo();
showDone();
    }
function showDone() {
    var arr=done.map((value, index)=> {
        return `<div class="task">
        <p>${value}</p>
        <label class="checkbox-main">
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
    </div>`;
    });
    var tasks = document.getElementById("done");
    tasks.innerHTML = arr.join(" ");
    }
addTodo();
showDone();







        /*resChild.innerHTML = `<div class="task">
        <p>${message}</p>
        <label class="checkbox-main">
            <input type="checkbox">
            <span class="checkmark"></span>
        </label>
    </div>`;
        res.appendChild(resChild);
      }
}*/