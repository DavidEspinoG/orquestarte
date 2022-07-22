function getRecital(){
    const contenedor = document.getElementById('programa')
    recital.forEach(participacion => {
        //Nombre del alumno
        const pAlumno = document.createElement('p')
        const nombreAlumno = document.createTextNode(participacion["Alumn@"])
        pAlumno.classList.add('alumno')
        pAlumno.appendChild(nombreAlumno)
        contenedor.appendChild(pAlumno)
        // Repertorio
        const contenedorRepertorio = document.createElement('div')
        contenedorRepertorio.classList.add('repertorio')
        contenedor.appendChild(contenedorRepertorio)
        //pieza 
        const pPieza = document.createElement('p')
        const textoPieza = document.createTextNode(participacion['Pieza'])
        pPieza.appendChild(textoPieza)
        pPieza.classList.add('pieza')
        contenedorRepertorio.appendChild(pPieza)
        //compositor
        const pCompositor = document.createElement('p')
        pCompositor.classList.add('compositor')
        const textCompositor = document.createTextNode(participacion['Compositor'])
        pCompositor.appendChild(textCompositor)
        contenedorRepertorio.appendChild(pCompositor)
        //maestro
        const pMaestro = document.createElement('p')
        
        textMaestro = document.createTextNode('Maestro(a): '+ participacion['Maestr@'])
        pMaestro.appendChild(textMaestro)
        pMaestro.classList.add('maestro')
        contenedor.appendChild(pMaestro)
    })
}

getRecital()