import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const Api = {
    getTasks: async () => {
        const response = await axios.get(API_URL);
        return response.data.slice(0, 10); // Limitar a 10 tarefas
    },
    addTask: async (task) => {
        const response = await axios.post(API_URL, task);
        return response.data;
    },
    updateTask: async (id, task) => {
        const response = await axios.put(`${API_URL}/${id}`, task);
        return response.data;
    },
    deleteTask: async (id) => {
        await axios.delete(`${API_URL}/${id}`);
    }
};

export default Api;
