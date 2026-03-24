import { useState } from 'react'


const Revervas = () => {

    // estado para almacenar la reserva --> {}
    const [formulario, setFormulario] = useState({
        nombre: "",
        oficina: ""
    })
    // estado para mensajes (true, false)
    const [mensaje, setMensaje] = useState("")

    // estado para almacenar oficinas disponibles --> lista [{}]
    // simulación
    const [oficinas] = useState([
        { id: 1, nombre: "Oficina 1", disponible: true },
        { id: 2, nombre: "Oficina 2", disponible: false },
        { id: 3, nombre: "Oficina 3", disponible: true },
        { id: 4, nombre: "Oficina 4", disponible: false },
    ])

    // función manejadora de cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const oficinaSeleccionada = oficinas.find(oficina => oficina.id === Number(formulario.oficina))

        if(!oficinaSeleccionada) {
            setMensaje("Debes seleccionar una oficina")
            return
        }

        if (oficinaSeleccionada.disponible) {
            setMensaje(`Reserva confirmada para la oficina ${oficinaSeleccionada.nombre}`)
        } else {
            setMensaje(`La ${oficinaSeleccionada.nombre} no está disponible.`)
        }
    }

    return (
        <div>
            <h1>Reservas de oficinas</h1>

            {/* formulario para capturar datos de la reserva */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Tu nombre:</label>
                <input type="text" name='nombre' onChange={handleChange} value={formulario.nombre} />
                <br />
                <label htmlFor="oficinas">Oficinas</label>
                <select name="oficina" id="" onChange={handleChange} value={formulario.oficina}>
                    <option value="">--Selecciona una opción</option>
                    {oficinas.map((oficina) => (
                        <option value={oficina.id}>{oficina.nombre}</option>
                    ))}


                </select>
                <br />
                <button type='submit'>Reservar</button>
            </form>
            {mensaje ? <p>{mensaje}</p> : null}
        </div>
    )


}

export default Revervas