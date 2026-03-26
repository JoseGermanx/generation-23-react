import { useEffect, useState } from "react"


const ListaUsuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=> {

        const getUsuarios = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()
                setUsuarios(data)
                console.log(data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getUsuarios()

    }, [])



    const resultados = !search
                       ? usuarios
                       : usuarios.filter((usuario)=> usuario.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="container mt-3">
        <div className="container" style={{width: "30%"}}>
         <input type="text"
         placeholder="Buscar por nombre"
         value={search}
         onChange={(e)=> setSearch(e.target.value)}
         className="form-control"
         />
         </div>

         <table className="table table-striped mt-2">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Ciudad</th>
                </tr>
            </thead>
            <tbody>
                {resultados.length > 0 ? (
                    resultados.map((usuario)=> (
                <tr key={usuario.id}>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.address.city}</td>
                </tr>
                    ))
                ): ( <tr><td colSpan={3}>No se encontraron resultados. </td></tr>
                 )
            }
            </tbody>
         </table>
        </div>
    )
}

export default ListaUsuarios