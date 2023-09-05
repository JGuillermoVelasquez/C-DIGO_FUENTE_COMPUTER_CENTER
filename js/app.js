let contadorProcesadores=0, 
    contadorRam=0,
    contadorHdd=0,
    contadorPlaca=0,
    contadorSdd=0,
    operacionProcesadores=0,
    operacionRam=0,
    operacionHdd=0,
    operacionSdd=0,
    operacionPlaca=0,
    cantidadElementos = 4;
let lado, btnClicked, item;
let elementos = document.querySelectorAll('.procesadores .card');
let elementosSlider = elementos.length;

const botones = document.querySelectorAll('.derecha, .izquierda');
botones.forEach((btn) => {
    btn.addEventListener('click', botonClicked);
});

const rutaActual = window.location.pathname;
const nombreArchivo = rutaActual.substring(rutaActual.lastIndexOf('/') +1);
switch(nombreArchivo) {
    case 'equiposComputo.html':
        setInterval(() => autoSlider("procesadores"), 4000); 
        setInterval(() => autoSlider("ram"), 4000); 
        setInterval(() => autoSlider("hdd"), 4000); 
        setInterval(() => autoSlider("sdd"), 4000); 
        setInterval(() => autoSlider("placa"), 4000); 
        break;
    case "perifericos.html":
        setInterval(() => autoSlider("procesadores"), 4000); 
        setInterval(() => autoSlider("ram"), 4000); 
        setInterval(() => autoSlider("hdd"), 4000); 
        break;
    case "impresorasSuministros.html":
        setInterval(() => autoSlider("procesadores"), 4000); 
        setInterval(() => autoSlider("ram"), 4000); 
        break;
}

function autoSlider(nombreClase) {
    let elemento = document.querySelector(`.${nombreClase}`);
    let elementoPadre = elemento.parentElement;
    btnClicked = elementoPadre.nextElementSibling;
    lado = "derecha"  
    slider();
} 

function botonClicked (e){
    btnClicked = e.target;
    lado = btnClicked.classList[1];
    slider();
}

function slider(){
    let resultados;
    if(lado == 'izquierda'){
        const next = btnClicked.nextElementSibling;
        item = next.querySelector('.cards');
        nombreItem = item.classList[1];
        switch (nombreItem){
            case 'procesadores':
                resultados = moverIzquierda(item, contadorProcesadores, operacionProcesadores, elementosSlider, cantidadElementos);
                contadorProcesadores = resultados[0];
                operacionProcesadores = resultados[1];
                break;
            case 'ram':
                resultados = moverIzquierda(item, contadorRam, operacionRam, elementosSlider, cantidadElementos);
                contadorRam = resultados[0];
                operacionRam= resultados[1];
                break;
            case 'hdd':
                resultados = moverIzquierda(item, contadorHdd, operacionHdd, elementosSlider, cantidadElementos);
                contadorHdd = resultados[0];
                operacionHdd = resultados[1];
                break;
            case 'sdd':
                resultados = moverIzquierda(item, contadorSdd, operacionSdd, elementosSlider, cantidadElementos);
                contadorSdd = resultados[0];
                operacionSdd = resultados[1];
                break;   
            case 'placa':
                resultados = moverIzquierda(item, contadorPlaca, operacionPlaca, elementosSlider, cantidadElementos);
                contadorPlaca = resultados[0];
                operacionPlaca = resultados[1];
                break;
        }
        return;
    }
    const previous = btnClicked.previousElementSibling;
    item = previous.querySelector('.cards');
    nombreItem = item.classList[1];
    switch (nombreItem){
        case 'procesadores':
            resultados = moverDerecha(item, contadorProcesadores, operacionProcesadores, elementosSlider, cantidadElementos);
            contadorProcesadores = resultados[0];
            operacionProcesadores = resultados[1];
            break;
        case 'ram':
            resultados = moverDerecha(item, contadorRam, operacionRam, elementosSlider, cantidadElementos);
            contadorRam = resultados[0];
            operacionRam= resultados[1];
            break;
        case 'hdd':
            resultados = moverDerecha(item, contadorHdd, operacionHdd, elementosSlider, cantidadElementos);
            contadorHdd = resultados[0];
            operacionHdd = resultados[1];
            break;
        case 'sdd':
            resultados = moverDerecha(item, contadorSdd, operacionSdd, elementosSlider, cantidadElementos);
            contadorSdd = resultados[0];
            operacionSdd = resultados[1];
            break;   
        case 'placa':
            resultados = moverDerecha(item, contadorPlaca, operacionPlaca, elementosSlider, cantidadElementos);
            contadorPlaca = resultados[0];
            operacionPlaca = resultados[1];
            break;
    }
}


function moverDerecha(item, contador, operacion, elementosSlider, cantidadElementos) {
    if (contador >= elementosSlider - cantidadElementos){
        operacion = 0;
        contador = 0;
        item.style.transform = `translate(-${operacion}%)`;
        item.style.transition = "all 0.5s ease";
        return [contador, operacion];    
    }
    contador++
    operacion = operacion + (100/elementosSlider)
    item.style.transform = `translate(-${operacion}%)`;
    item.style.transition = "all 0.5s ease";
    return [contador, operacion];
}   

function moverIzquierda(item, contador, operacion, elementosSlider, cantidadElementos) {
    contador--;
    if (contador < 0){
        contador = elementosSlider - cantidadElementos;
        operacion = (elementosSlider - cantidadElementos) * (100/elementosSlider);
        item.style.transform = `translate(-${operacion}%)`;
        item.style.transition = "all 0.5s ease";
        return [contador, operacion];
    }
    operacion = operacion - (100/elementosSlider);
    item.style.transform = `translate(-${operacion}%)`;
    item.style.transition = "all 0.5s ease";
    return [contador, operacion];
} 

