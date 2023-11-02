
// Iniciamos el código de JavaScript que va a tener anexado cada proyecto del portfolio.
// Esta hoja tiene como objetivo principalmente añadir interacción al botón de volver atrás.

// Aquí se selecciónan las clases que me van a hacer falta.
const back = document.querySelector(`.Back`)
const message = document.querySelector(`.Back-message`)

// Añadimos un mouseover para que cuando el usuario pase el ratón por encima, se despliegue el mensaje.
back.addEventListener(`mouseover` , () => {

    message.classList.add(`over`)

})

// Y un mouseout para que cuando el usuario deje de pasar el cursor, el mensaje se vuelva a esconder.
back.addEventListener(`mouseout` , () => {

    message.classList.remove(`over`)

})