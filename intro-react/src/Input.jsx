import {useState} from 'react';

const Input = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    return (
        <form action="">
            <label htmlFor="nombre">Nombre</label>
            <input
            name="nombre"
            onChange={(e)=> setNombre(e.target.value)}
            value={nombre} 
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
            name="email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email} 
        />
        
        </form>
)

}

export default Input