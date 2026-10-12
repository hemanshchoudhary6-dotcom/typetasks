"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nextId = 1;
function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title,
        status: "todo",
    };
    return [...tasks, newTask];
}
function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
function countByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status).length;
}
//# sourceMappingURL=model.js.map