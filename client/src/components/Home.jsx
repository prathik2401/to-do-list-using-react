import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../apiHandler/api';


function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    },[setTodos]);

    const fetchTodos = async () => {
        try {
            const data = await getAllTodos();
            setTodos(data);
        } catch (error) {
            
        }
    }
  return (
    <div>
        {
            todos?.map((todo) => (
                <div key={todo._id}>
                    <h3>{todo.title}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default Home