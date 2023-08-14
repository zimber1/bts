'use client'
import { useState } from "react";
import "./registro.css"

export default function registro() {

    const [state, setState] = useState({
        email: "",
        username: "",
        password: ""
        
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <div className="container">

            <input 
                onChange={handleChange} 
                name="email" 
                value={state.email} 
                type="text" 
                placeholder="email" 
            />

              <input 
                name="username" 
                onChange={handleChange} 
                type="text" 
                placeholder="fulanita123" 
            />

            <input 
                name="password" 
                onChange={handleChange} 
                type="password" 
                placeholder="123456" 
            />

            <button>Registrar</button>

        </div>
    )

}