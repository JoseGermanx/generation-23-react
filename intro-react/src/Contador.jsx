
import { useState, useEffect } from 'react'


const Contador = () => {

    const [contador, setContador] = useState(0);
    const [valorContenido, setValorContenido] = useState(0);

    const incrementar = () => {
        setContador(prev => prev + 1)  
    }

    useEffect(()=>{
        document.title = `Contador en ${contador}`
        setValorContenido(contador)
        console.log("Ejecutando efecto")
    }, [contador])

    useEffect(()=>{
        console.log("Valor contenido",valorContenido)
    }, [])

    return (
        <>
        <h2>Contador</h2>
        <p>Cuenta: {contador}</p>
        <button onClick={incrementar} >Incremetar en 1</button>
        <br />
        </>
    )
}

export default Contador