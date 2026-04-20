function getTasks(tasks, query) {
  let res = [...tasks];

  // 🔍 SEARCH
  if (query.search) {
    const search = query.search.toLowerCase();
    res = res.filter(task =>
      task.title.toLowerCase().includes(search) ||
      task.assignedTo.toLowerCase().includes(search)
    );
  }

  // 🔹 FILTER
  Object.keys(query).forEach(key => {
    if (["search", "sortBy", "order", "page", "limit"].includes(key)) return;

    const value = query[key];

    res = res.filter(task => {
      const taskValue = task[key];

      if (Array.isArray(value)) {
        return value.includes(taskValue);
      } else {
        return taskValue === value;
      }
    });
  });

  // 🔃 SORT
  if (query.sortBy) {
    const { sortBy, order = "asc" } = query;

    res.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return order === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  // 📄 PAGINATION
  const page = query.page || 1;
  const limit = query.limit || res.length;

  const start = (page - 1) * limit;
  const end = start + limit;

  res = res.slice(start, end);

  return res;
}
const tasks = [
  { title: "Task 1", status: "pending", priority: "high", assignedTo: "Alice", dueDate: "2024-06-30" },
  { title: "Task 2", status: "completed", priority: "medium", assignedTo: "Bob", dueDate: "2024-06-25" },
  { title: "Task 3", status: "pending", priority: "low", assignedTo: "Charlie", dueDate: "2024-07-05" }
];
const query = {
  status: "pending",
  priority: ["high", "medium"],
  search: "report",
  sortBy: "dueDate",
  order: "asc",
  page: 1,
  limit: 5
}
/*
Requirements:
Filter by fields
Search in title + assignedTo
Sort dynamically
Paginate results
 */