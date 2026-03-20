
import './App.css'
// import Button from './Button';
import Producto from './Producto';
import Button from 'react-bootstrap/Button';



function App() {

  const productName = "Producto 1";
  const activo = false;

  const classObj = { color: "red" }

  return (
    <>
      <h1 style={classObj}>{productName}</h1>
      <h2 className=''>{2 + 2}</h2>
      {activo ? <p>Esta activo</p> : <p>No activo</p>}
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum culpa dolorem nisi sint tempora enim explicabo repudiandae molestias aut minima pariatur aliquid ipsa ea adipisci, perferendis inventore soluta asperiores iste.</p>
      <br />
      {/* <Button colorDeFondo={"green"} />
      <br />
      <Button texto={"Cancelar"} colorDeFondo={"red"}/>
      <br /> */}
      <Producto titulo={"Zapatillas 1"} precio={50} stock={0}/>
      <br />
      <Button variant='warning'>Enviar</Button>

    </>
  )
}

export default App
