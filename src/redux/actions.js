
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (id) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: id
    }
}
export const searchFilterChange = (text) =>{
    return {
        type:'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) =>{
    return {
        type:'filters/statusFilterChange',
        payload: status
    }
}

export const prioriryFilterChange = (priorities) =>{
    return {
        type:'filters/prioriryFilterChange',
        payload: priorities
    }
}
//action creators => function