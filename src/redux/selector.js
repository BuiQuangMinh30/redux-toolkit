import { createSelector } from "reselect";

// export const todoListSelector = (state) =>{

//     const searchText = searchTextSelector(state)

//     const todoRemaining = state.todoList.filter((todo)=>{
//         return todo.name.includes(state.filters.search);
//     })

//     return todoRemaining;
// }

// dunfd reselect để tìm kiếm với tham số đầu tiên truyền vào là list, tham số thứ 2 là tên cần tìm, thứ 3 là callback để xử lý
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return (
          priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText)
        );
      }
      return (
        todo.name.includes(searchText) && (status === "Completed"
      ? todo.completed
      : !todo.completed) && (priority.length ? priority.includes(todo.priority) : true)
      )
    });
  }
);

//reselect
