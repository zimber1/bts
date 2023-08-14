'use client'
import { useState } from "react";
import "./login.css"

export default function Login() {

    const [state, setState] = useState({
        email: "",
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
            <label> Email </label>
            <input 
                onChange={handleChange} 
                name="email" 
                value={state.email} 
                type="text" 
                placeholder="email" 
            />

            <label> Contraseña </label>
            <input 
                name="password" 
                onChange={handleChange} 
                type="password" 
                placeholder="123456" 
            />

            <button>Iniciar sesión</button>

        </div>
    )

}