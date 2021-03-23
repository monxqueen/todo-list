import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus, status}) => {
    // eslint-disable-next-line no-unused-vars
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    // eslint-disable-next-line no-unused-vars
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, //if I have some todos already in the list, i'm just gonna spread them here and add new ones
            {text: inputText, completed: false, id: Math.random()*1000}
        ])
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form