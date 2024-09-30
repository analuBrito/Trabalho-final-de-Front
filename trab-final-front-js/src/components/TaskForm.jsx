import React, { useState } from 'react';

const TaskForm = ({ setTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Título
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Descrição (opcional)
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button type="submit">Adicionar Tarefa</button>
        </form>
    );
};

export default TaskForm;
