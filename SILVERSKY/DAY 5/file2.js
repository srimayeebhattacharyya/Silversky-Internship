function filterTasks(tasks, filters){
   return tasks.filter(task => {
       for (const f in filters) {
           const filtervalue=filters[f];
           const taskValue=task[f];
           if (Array.isArray(filtervalue)){
            if(!filtervalue.includes(taskValue)){
                return false;
            }
           }
           else{
            if (taskValue!==filtervalue){
                return false;
            }
           }
       }
       return true
   });
}
const tasks_new= [
   { title: "Task 1", status: "pending", priority: "high", assignedTo: "Alice", dueDate: "2024-06-30", overdue: false },
   { title: "Task 2", status: "completed", priority: "medium", assignedTo: "Bob", dueDate: "2024-06-25", overdue: true },
   { title: "Task 3", status: "pending", priority: "low", assignedTo: "Charlie", dueDate: "2024-07-05", overdue: false }
]
const filters_new= { status: "pending", priority: ["high","medium"] }
console.log(filterTasks(tasks_new, filters_new))