document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event){
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if(taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'taskItem';

            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function(){
                taskList.removeChild(listItem);
            })
            listItem.appendChild(taskTextSpan);
            listItem.appendChild(removeButton);

            taskList.appendChild(listItem);

            taskInput.value = '';
        }
    });
});
