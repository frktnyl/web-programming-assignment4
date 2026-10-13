# Assignment 4: Dynamic Task Dashboard

## Project Structure
- **index.html**: Main HTML document containing the structural elements (`loadTasksBtn`, `statusMessage`, `taskList`) and module script linkage.
- **styles.css**: Basic presentation styles for the dashboard container, task items, completed text decoration, and buttons.
- **taskManager.js**: Implements the ES6 `Task` class (with immutable, read-only `id` configuration) and the `TaskManager` class for managing state immutably.
- **api.js**: Simulates an asynchronous server request using `Promises` and `setTimeout` with a 1500ms delay.
- **main.js**: Coordinates user interactions, DOM event listeners, asynchronous task fetching, JSON serialization/parsing, and dynamic UI updates.

## Challenges Faced
- Ensuring strict immutability across all `TaskManager` operations by avoiding array mutation methods (`push`, `splice`) and instead utilizing functional alternatives (`map`, `filter`, and spread operators).
- Configuring the task `id` property to be strictly read-only and immutable using `Object.defineProperty`.
- Managing asynchronous flow control using `async/await` along with required JSON serialization steps prior to class instantiation.
