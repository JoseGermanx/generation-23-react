

function Button({texto = "Botón", colorDeFondo}) {
    return (
        <button style={{backgroundColor: colorDeFondo}}>{texto}</button>
    )

}

export default Button