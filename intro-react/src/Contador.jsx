
import { useState } from 'react'


const Contador = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(prev => prev + 1)  
    }
    return (
        <>
        <h2>Contador</h2>
        <p>Cuenta: {contador}</p>
        <button onClick={incrementar} >Incremetar en 1</button>
        </>
    )
}

export default Contador