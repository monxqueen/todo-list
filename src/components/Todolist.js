import React from 'react'
import Todo from "./Todo"

const Todolist = ({todos, setTodos, filteredTodos}) => {
    console.log(filteredTodos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        todos={todos} 
                        setTodos={setTodos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                    />
                ))}
            </ul> 
        </div>
    );
};

export default Todolist
