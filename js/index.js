
// Iniciamos el código de JavaScript que va a tener anexado el documento html principal.
// Esta hoja tiene como objetivo añadir los observer para realizar efectos de scroll, y añadir la interacción a la sección del portfolio.


// En este primer bloque abordamos los efectos del portfolio.
// Primero se seleccionan las clases que se van a necesitar. 
const projectsLi = document.querySelectorAll(`.Projects-li`)
const trabajosContenedor = document.querySelectorAll(`.Trabajos-contenedor`)

const todoBtn = document.querySelector(`.Todo-btn`)
const designBtn = document.querySelector(`.Design-btn`)
const uxBtn = document.querySelector(`.Ux-btn`)
const otrosBtn = document.querySelector(`.Otros-btn`)

const design = document.querySelectorAll(`.design`)
const ux = document.querySelectorAll(`.ux`)
const otros = document.querySelectorAll(`.otros`)


// En este bloque se define la función reinicio para introducir el código que se va a ir repitiendo a lo largo de los efectos del portfolio.
// Básicamente es una función para eliminar todas las clases, y ya posteriormente, introducir solamente aquellas que son necesarias para los efectos.
let reinicio = () => {

    projectsLi.forEach((eachLi , i) => {

        // Se eliminan los efectos a los botones de categorías.
        projectsLi[i].classList.remove(`Active`)
        projectsLi[i].classList.remove(`Inactive`)

    })
    trabajosContenedor.forEach((eachContenedor , i) => {

        // Se eliminan los efectos de los contenedores de proyectos.
        trabajosContenedor[i].classList.remove(`isActive`)
        trabajosContenedor[i].classList.remove(`isInactive`)

    })

}

// Añadimos función de click a cada uno de los botones de categorías del portfolio.
// Y posteriormente, se empiezan a añadir y eliminar efectos en función del botón seleccionado.
designBtn.addEventListener (`click` , () => {

    // Se ejecuta la función de reinicio anteriormente explicada.
    reinicio()    

    design.forEach((eachDesign , i) => {

        design[i].classList.add(`isActive`)

    })
    otros.forEach((eachOtros , i) => {

        otros[i].classList.add(`isInactive`)

    })
    ux.forEach((eachUx , i) => {

        ux[i].classList.add(`isInactive`)
        
    })
    designBtn.classList.add(`Active`)
    uxBtn.classList.add(`Inactive`)
    otrosBtn.classList.add(`Inactive`)
    todoBtn.classList.add(`Inactive`)    

})

uxBtn.addEventListener (`click` , () => {

    // Se ejecuta la función de reinicio anteriormente explicada.
    reinicio()

    design.forEach((eachDesign , i) => {

        design[i].classList.add(`isInactive`)

    })
    otros.forEach((eachOtros , i) => {

        otros[i].classList.add(`isInactive`)

    })
    ux.forEach((eachUx , i) => {

        ux.classList.add(`isActive`)
        
    })
    uxBtn.classList.add(`Active`)
    designBtn.classList.add(`Inactive`)
    otrosBtn.classList.add(`Inactive`)
    todoBtn.classList.add(`Inactive`)
    
})

otrosBtn.addEventListener (`click` , () => {

    reinicio()

    otros.forEach((eachOtros , i) => {

        otros[i].classList.add(`.isActive`)

    })
    design.forEach((eachDesign , i) => {

        design[i].classList.add(`isInactive`)

    })
    ux.forEach((eachUx , i) => {

        ux.classList.add(`isInactive`)
        
    })
    otrosBtn.classList.add(`Active`)
    uxBtn.classList.add(`Inactive`)
    designBtn.classList.add(`Inactive`)
    todoBtn.classList.add(`Inactive`)

})

todoBtn.addEventListener(`click` , () => {

    // Se ejecuta la función de reinicio anteriormente explicada.
    reinicio()

    todoBtn.classList.add(`Active`)
    uxBtn.classList.add(`Inactive`)
    designBtn.classList.add(`Inactive`)
    otrosBtn.classList.add(`Inactive`)

})



// En este segundo bloque se abordan los efectos de scroll mediante intersection observers.
// Este primero sirve para el efecto del header, de la imagen de portada, y de las etiquetas giratorias.
// Primero se seleccinan las clases necesarias.
const fondo = document.querySelector(`.Portada-giratoria`)
const fondoPortada = document.querySelector(`.Portada-fondo`)
const header = document.querySelector(`.Header`)
const portada = document.querySelector(`.Portada`)
const portadaGiratoria = document.querySelector(`.Portada-giratoria`)


// Cada observer va a estar guardado en una función, porque tanto las opciones como el callback quiero que sean únicas para cada observer, y por tanto si estuvieran fuera de una función, solo podría establecer unas para todos los observer.
let observerPortada = () => {

    // En este caso el threshold es tan amplio para conseguir la máxima fluidez posible en la animación.
    let options = {
        root: null,
        rootMargin: "0px 0px",
        threshold: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6, 0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7, 0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9, 0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1]
    }

    let callback = (entries) => {

        entries.forEach( (entry) => {

            if(entry.isIntersecting){

                // Si se está viendo el observer indicado haz:
                let currentScroll = window.scrollY
                fondo.style.transform = `rotate(${ currentScroll / 4 }deg)`
                header.classList.add(`Aparece-header`)
                fondoPortada.classList.add(`Aparece-portada`)

            }
            // Como no quiero que el header y la imagen de portada vuelvan a esconderse, no habrá else.

        })

    }

    let observer = new IntersectionObserver(callback , options)
    observer.observe(header)
    observer.observe(portada)
    observer.observe(portadaGiratoria)

}

// Se ejecuta la función correspondiente a ese observer.
observerPortada()

    

// Este segundo sirve para el efecto de aparecer la sección de sobre mí.
// Primero se seleccinan las clases necesarias.
const me = document.querySelector(`.Me`)
const meContent = document.querySelector(`.Me-content`)
const meTablet = document.querySelector(`.Me-tablet`)
const meMobile = document.querySelector(`.Me-mobile`)



let observerMe = () => {

    let options = {
        root: null,
        rootMargin: "0px 0px",
        threshold: [0, 1]
    }
    
    let callback = (entries) => {
    
        entries.forEach( (entry) => {
    
            if(entry.isIntersecting){
                
                // Si se está viendo el observer indicado haz:
                me.classList.add(`Aparece-seccion`)
    
            } 
            // Como no quiero que la sección vuelva a esconderse, no habrá else.
    
        })
    
    }
    
    // Se observan tres secciones porque la sección sobre mi tiene tres versiones en función del dispositivo que se esté utilizando.
    let observer = new IntersectionObserver(callback , options)
    observer.observe(meContent)
    observer.observe(meTablet)
    observer.observe(meMobile)

}

// Se ejecuta la función correspondiente a ese observer.
observerMe()



// Este tercero sirve para el efecto de aparecer la sección de servicios.
// Primero se seleccinan las clases necesarias.
const services = document.querySelector(`.Services`)
const servicesContenedor = document.querySelector(`.Services-contenedor`)


let observerServices = () => {

    let options = {
        root: null,
        rootMargin: "0px 0px",
        threshold: [0, 1]
    }
    
    let callback = (entries) => {
    
        entries.forEach( (entry) => {
    
            if(entry.isIntersecting){
                
                // Si se está viendo el observer indicado haz:
                services.classList.add(`Aparece-seccion`)
    
            }
            // Como no quiero que la sección vuelva a esconderse, no habrá else.

        })
    
    }
    
    let observer = new IntersectionObserver(callback , options)
    observer.observe(servicesContenedor)

}

// Se ejecuta la función correspondiente a ese observer.
observerServices()



// Este cuarto sirve para el efecto de aparecer la sección del portfolio.
// Primero se seleccinan las clases necesarias.
const projects = document.querySelector(`.Projects`)
const trabajos = document.querySelector(`.Trabajos`)


let observerProjects = () => {

    let options = {
        root: null,
        rootMargin: "0px 0px",
        threshold: [0, 1]
    }
    
    let callback = (entries) => {
    
        entries.forEach( (entry) => {
    
            if(entry.isIntersecting){
                
                // Si se está viendo el observer indicado haz:
                projects.classList.add(`Aparece-seccion`)
    
            }
            // Como no quiero que la sección vuelva a esconderse, no habrá else.
    
        })
    
    }
    
    // En este caso, se observa un elemento tan adentrado en la sección porque el anterior bloque, el de servicios, es un tanto corto, y podía ocurrir que al desplegar servicios, se desplegara también el portfolio.
    let observer = new IntersectionObserver(callback , options)
    observer.observe(trabajos)

}

// Se ejecuta la función correspondiente a ese observer.
observerProjects()



// En este último bloque, se aborda la interactividad del header en los modos tableta y móvil, a través del botón del menú desplegable.
// Primero se seleccinan las clases necesarias.
const headerHamburguesa = document.querySelector(`.Header-hamburguesa`)
const tablet = document.querySelector(`.Tablet`)
const tabletUl = document.querySelector(`.Tablet-ul`)
const movil = document.querySelector(`.Movil`)
const movilContenedor = document.querySelector(`.Movil-contenedor`)


// Se le añade una función de click al botón.
headerHamburguesa.addEventListener(`click` , () => {

    // Para que gire el botón al seleccionarlo:
    headerHamburguesa.classList.toggle(`Header-hamburguesa-giratorio`)
    // Para desplegar y replegar el menú en tablet:
    tablet.classList.toggle(`Tablet-activado`)
    tabletUl.classList.toggle(`Tablet-ul-activado`)
    // Para desplegar y replegar el menú en móvil:
    movil.classList.toggle(`Movil-activado`)
    movilContenedor.classList.toggle(`Movil-contenedor-activado`)

})




