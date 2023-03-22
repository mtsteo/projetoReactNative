import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8800"
});

export const API = () => ({
    validarToken: async (token) => {
       
        const response = await api.post('/validar', { token });
        console.log(response.data)
        return response.data;
    },
    logar: async (username, password) => {
        
        const response = await api.post('/login', { username, password });
        console.log(response.data)
        return response.data;
    },
    sair: async () => {
        const response = await api.post('/logout');
        return response.data;
    },
    AllDocentes: async ()=>{
        const response =  await api.get('/docentes')
        return response.data;
    }
});
