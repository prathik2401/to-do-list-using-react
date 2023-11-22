import axios from 'axios';

const BASE_URL="http://localhost:5000/todos";

export const getAllTodos = async (req,res) => {
    try {
        const allTodos = await axios.get(BASE_URL);
        
        console.log(allTodos);
        return allTodos;
    }catch(error){

    }
}