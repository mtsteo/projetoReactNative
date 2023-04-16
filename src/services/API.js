import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.6:8800",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});


export const API = () => ({
    validarToken: async (token) => {
        try {
            const response = await api.post('/validar', { token });
            return response.data;
        } catch (error) {
            console.log(error)
        }

    },
    logar: async (username, password) => {
        try {
            const response = await api.post('/login', { username, password });
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },
    sair: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
    AllDocentes: async () => {
        const response = await api.get('/docentes')
        return response.data;
    },
});



