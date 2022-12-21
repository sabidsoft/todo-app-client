import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TodoList.css'

const TodoList = () => {
    const [todoTasks, setTodoTasks] = useState([])

    const handleOnSubmit = event => {
        event.preventDefault()
        const task = event.target.todo.value

        const todoTask = {
            task: task
        }

        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todoTask)
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:5000/todo')
                    .then(res => res.json())
                    .then(data => {
                        setTodoTasks(data)
                        event.target.reset()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/todo?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:5000/todo')
                    .then(res => res.json())
                    .then(data => {
                        setTodoTasks(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => {
                setTodoTasks(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <section className='todo_section'>
            <h1 className='heading'>Todo List</h1>
            <div className='add_task_form'>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name='todo'
                        placeholder='Enter your todo task'
                        required
                        className='input_todo'
                    />
                    <input type="submit" value='Add Task' className='input_submit' />
                </form>
            </div>
            <div className='todo_list_container'>
                <h1 className='todo_list_heading'>Tasks</h1>
                {
                    todoTasks.map(todoTask => {
                        const { _id, task } = todoTask
                        return (
                            <div key={_id} className='list'>
                                <p>{task}</p>
                                <div>
                                    <Link to={`/edit-task/${_id}`} state={{id: _id }} className='link_btn'>Edit</Link>
                                    <button onClick={() => handleDelete(_id)} className='btn'>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default TodoList;