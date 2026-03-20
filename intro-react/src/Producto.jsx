import './Producto.css'

function Producto({titulo, precio, stock}) {

    

    return (
        <>
        {stock <= 0
        ? <p>Sin Stock</p>
        : <p>{titulo} - {precio} - {stock}</p> }
        </>
    )
    
}

export default Producto