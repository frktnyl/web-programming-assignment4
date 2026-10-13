# Assignment 4 - Dynamic Task Dashboard

## File Organization
- `index.html`: Contains the core structural elements (`loadTasksBtn`, `statusMessage`, `taskList`).
- `styles.css`: Provides clean, minimal styling for layout, completed task line-through states, and buttons.
- `taskManager.js`: Defines the `Task` class (with immutable, read-only `id` via `Object.defineProperty` and a `toggle()` method) and the `TaskManager` class (handling array updates immutably using ES6 spread operators and methods like `map` and `filter`).
- `api.js`: Simulates an asynchronous server endpoint returning raw task data using `Promises` and `setTimeout`.
- `main.js`: Orchestrates DOM events, asynchronous data fetching (`async/await`), the required `JSON.stringify`/`JSON.parse` workflow, and dynamic rendering.

## Challenges Faced
1. **Immutability Enforcement:** Ensuring that operations like adding, deleting, and toggling tasks did not mutate the original array, which was successfully solved using array methods like `.map()`, `.filter()`, and the spread operator (`...`).
2. **Read-only Properties:** Securing the task `id` property to make it strictly immutable using `Object.defineProperty`.
3. **Event Delegation & DOM Creation:** Dynamically creating elements using `createElement` and binding clean event listeners without inline handlers.
