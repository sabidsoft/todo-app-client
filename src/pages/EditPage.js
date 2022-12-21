import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/EditPage.css'

const EditPage = () => {
    const [todoTask, setTodoTask] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const id = location.state.id

    const handleOnSubmit = event => {
        event.preventDefault()
        const task = event.target.todo.value

        const todoTask = {
            task: task
        }

        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todoTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/todo-list')
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/todo/${id}`)
            .then(res => res.json())
            .then(data => {
                setTodoTask(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <section className='edit_section'>
            <h1 className='heading'>Edit Task</h1>
            <div className='add_task_form'>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        name='todo'
                        defaultValue={todoTask?.task}
                        className='input_todo'
                    />
                    <input type="submit" value='Edit Task' className='input_submit' />
                </form>
            </div>
        </section>
    );
};

export default EditPage;