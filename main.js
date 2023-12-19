window.addEventListener('load', () => {
	const form = document.querySelector("form");
	const input = document.querySelector("input");
	const taskLists = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		if(task===''){
			alert("Please Add your task");
		}
        else{
		const tasks = document.createElement('div');
		tasks.classList.add('task');

	

		const taskContent = document.createElement('div');
		taskContent.classList.add('content');
		tasks.appendChild(taskContent);

		const tasksInput = document.createElement('input');
		tasksInput.classList.add('text');
		tasksInput.type = 'text';
		tasksInput.value = task;
		tasksInput.setAttribute('readonly', 'readonly');

		taskContent.appendChild(tasksInput);

		const tasksAction = document.createElement('div');
		tasksAction.classList.add('actions');
		
		const editAction = document.createElement('button');
		editAction.classList.add('edit');
		editAction.innerText = 'Edit';

		const deleteAction = document.createElement('button');
		deleteAction.classList.add('delete');
		deleteAction.innerText = 'Delete';
		tasksAction.appendChild(editAction);
		tasksAction.appendChild(deleteAction);

		tasks.appendChild(tasksAction);

	 taskLists.appendChild(tasks);

		input.value = '';

		editAction.addEventListener('click', (e) => {
			if (editAction.innerText.toLowerCase() == "edit") {
				editAction.innerText = "Save";
				tasksInput.removeAttribute("readonly");
				tasksInput.focus();
			} else {
				editAction.innerText = "Edit";
				tasksInput.setAttribute("readonly", "readonly");
			}
		});

		deleteAction.addEventListener('click', (e) => {
		 taskLists.removeChild(tasks);
		});
	}
	});
});