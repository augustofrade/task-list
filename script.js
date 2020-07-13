var tasks = document.querySelectorAll("#task-content > .task");
const taskInput = document.querySelector("#new-task");
document.querySelector("#add-task-btn").onclick = _ => { createTask(taskInput.value) };

const taskTemplate = (name, checked) => {
	return `<input type="checkbox" name="${name}" class="task-comp-btn" ${checked}>
			<span class="task-desc-holder">
			${name}
			</span>
			<span class="del-task">×</span>
		`;
}

// ---------- Read file and populate task list ----------
fetch("tasks.json").then(function(resposta) {
	resposta.text().then(function(tasks) {
		tasks = JSON.parse(tasks).reverse();
		for(let t = 0; t < tasks.length; t++) {
			let comp = tasks[t].completed === true ? "checked" : undefined
			createTask(tasks[t].task, comp);
		}
	})
})


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

function createTask(taskName, checked) {
	if(taskName.trim() != '') {
		let allTasks = document.querySelector("#task-content");
		// Create a div this way so it'll have a "start" animation
		let newTask = document.createElement("div");
		newTask.classList = "task";
		newTask.style.opacity = "0";
		newTask.innerHTML = taskTemplate(taskName.trim(), checked);
		allTasks.insertBefore(newTask, allTasks.childNodes[0]);
		taskInput.style.borderColor = "#7f8c8d";
		setTimeout(_ => newTask.style.opacity = 1, 100);
		update();
	} else {
		taskInput.style.borderColor = "#e74c3c";
		setTimeout(_ => taskInput.style.borderColor = "#7f8c8d", 2500);
	}
	taskInput.value = '';
}