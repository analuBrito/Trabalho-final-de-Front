import React, { useState } from 'react';

const TaskList = ({ tasks, setTasks }) => {
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleToggleCompleted = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleEditClick = (task) => {
        setEditTaskId(task.id);
        setEditTitle(task.title);
        setEditDescription(task.description);
    };

    const handleSaveEdit = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, title: editTitle, description: editDescription } : task
            )
        );
        setEditTaskId(null); // Sair do modo de edição
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggleCompleted(task.id)}
                            className="custom-checkbox"
                        />

                        {editTaskId === task.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    placeholder="Edite o título"
                                />
                                <input
                                    type="text"
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    placeholder="Edite a descrição"
                                />
                                <button onClick={() => handleSaveEdit(task.id)}>Salvar</button>
                                <button onClick={() => setEditTaskId(null)}>Cancelar</button>
                            </>
                        ) : (
                            <div style={{ display: 'flex', flexGrow: 1 }}>
                                <span
                                    style={{
                                        textDecoration: task.completed ? 'line-through' : 'none',
                                        flexGrow: 1,
                                    }}
                                >
                                    {task.title} - {task.description}
                                </span>
                                <div style={{ marginLeft: '10px' }}>
                                    <button onClick={() => handleEditClick(task)}>Editar</button>
                                    <button onClick={() => handleDelete(task.id)}>Excluir</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;