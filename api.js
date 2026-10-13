export function fetchTasks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve([
                    { id: 1, title: "Study JavaScript", completed: false },
                    { id: 2, title: "Practice DOM", completed: true },
                    { id: 3, title: "Read Async Patterns", completed: false }
                ]);
            } else {
                reject(new Error("Failed to fetch tasks from server."));
            }
        }, 1500);
    });
}