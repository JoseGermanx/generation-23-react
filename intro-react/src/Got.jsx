import { useEffect, useState } from "react"


const Got = () => {

    const [personaje, setPersonaje] = useState(null)

    useEffect(()=>{
        const getPersonaje = async ()=> {
            try {
                const response = await fetch("https://thronesapi.com/api/v2/Characters/0")
                
                const data = await response.json()
                console.log(data)
                setPersonaje(data)

            } catch (error) {
                console.log(error)
            }
        }

        getPersonaje()
    }, [])

    return (
        <div className="container">
        <h1>Got</h1>
        { personaje ? <>
        <h2>{personaje.title}</h2>
        <h3>{personaje.firstName}</h3>
        </> : <p>No hay datos</p>
        }
        </div>
    )

}

export default Got