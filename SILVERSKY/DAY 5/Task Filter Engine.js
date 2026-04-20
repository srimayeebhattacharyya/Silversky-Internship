function filterTasks(tasks, filters){
    return tasks.filter(task => {
        for (const f in filters) {
            if (filters[f] != task[f]) {
                return false
            }
        }
        return true
    });
}

const tasks = [
    { title: "Task 1", status: "pending", priority: "high", assignedTo: "Alice", dueDate: "2024-06-30", overdue: false },
    { title: "Task 2", status: "completed", priority: "medium", assignedTo: "Bob", dueDate: "2024-06-25", overdue: true },
    { title: "Task 3", status: "pending", priority: "low", assignedTo: "Charlie", dueDate: "2024-07-05", overdue: false }
]

const filters = { status: "pending", priority: "high" }

const filteredTasks = filterTasks(tasks, filters)
console.log(filteredTasks);