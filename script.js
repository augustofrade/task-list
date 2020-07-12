var tasks = document.querySelectorAll("#task-content > .task");

document.querySelector("#add-task-btn").onclick = _ => {
	createTask(document.querySelector("#new-task").value)
}
taskTemplate = name => {
	return `<div class="task">
			<input type="checkbox" name="completed" class="task-comp-btn">
			<span class="task-desc-holder">
			${name}
			</span>
			<span class="del-task">×</span>
		</div>
		`;
}

// Add just some examples
for(let i = 1; i <= 3; i++) {
	createTask('Task ' + i);
}


function update() {
	tasks = document.querySelectorAll("#task-content > .task");
	tasks.forEach(function(task, i) {
		task.querySelector(".del-task").onclick = _ => deleteTask(i);
	});
};
update();

function deleteTask(index) {
	tasks[index].remove();
	update();
}

function createTask(taskName) {
	document.querySelector("#task-content").innerHTML += taskTemplate(taskName);
	update();
}