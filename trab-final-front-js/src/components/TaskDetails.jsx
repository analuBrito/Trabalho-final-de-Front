import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskDetails = ({ tasks, setTasks }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({ title: '', completed: false });

    useEffect(() => {
        const foundTask = tasks.find((t) => t.id === parseInt(id));
        if (foundTask) {
            setTask(foundTask);
        }
    }, [id, tasks]);

    const handleUpdate = (e) => {
        e.preventDefault();
        setTasks((prevTasks) =>
            prevTasks.map((t) => (t.id === parseInt(id) ? { ...t, ...task } : t))
        );
        navigate('/');
    };

    return (
        <form onSubmit={handleUpdate}>
            <label>
                Título:
                <input
                    type="text"
                    value={task.title}
                    onChange={(e) => setTask({ ...task, title: e.target.value })}
                    required
                />
            </label>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default TaskDetails;
