import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="app">
            <h1>Lista de Tarefas</h1>
            <TaskForm setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
            {tasks.length === 0 && <p>Ainda não tem tarefas.</p>}
        </div>
    );
};

export default App;
