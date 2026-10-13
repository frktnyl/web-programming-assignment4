import { Task, TaskManager } from './taskManager.js';
import { fetchTasks } from './api.js';

const taskManager = new TaskManager();

const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskListContainer = document.getElementById('taskList');

function renderTasks() {
    taskListContainer.innerHTML = '';

    taskManager.tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        if (task.completed) {
            taskDiv.classList.add('completed');
        }

        const titleSpan = document.createElement('span');
        titleSpan.textContent = task.title;

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? 'Mark Incomplete' : 'Mark Complete';
        toggleBtn.classList.add('toggle-btn');
        toggleBtn.addEventListener('click', () => {
            taskManager.toggleTask(task.id);
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskManager.removeTask(task.id);
            renderTasks();
        });

        taskDiv.appendChild(titleSpan);
        taskDiv.appendChild(toggleBtn);
        taskDiv.appendChild(deleteBtn);

        taskListContainer.appendChild(taskDiv);
    });
}

loadTasksBtn.addEventListener('click', async () => {
    statusMessage.textContent = 'Loading tasks...';
    taskListContainer.innerHTML = '';

    try {
        const rawData = await fetchTasks();

        const jsonString = JSON.stringify(rawData);
        const parsedData = JSON.parse(jsonString);

        const taskInstances = parsedData.map(
            item => new Task(item.id, item.title, item.completed)
        );

        taskManager.setTasks(taskInstances);

        statusMessage.textContent = '';
        renderTasks();

    } catch (error) {
        statusMessage.textContent = error.message;
    }
});