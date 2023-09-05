let contadorBanner = 0, 
    operacionBanner = 0,
    cantidadElementos = 1,
    lado;
let elementos = document.querySelectorAll('.slider-imagenes img');
let elementosSlider = elementos.length;
const btnDerecha = document.querySelector('.derecha');
btnDerecha.addEventListener('click', btnDerClicked);
const btnIzquierda = document.querySelector('.izquierda');
btnIzquierda.addEventListener('click', btnIzqClicked);


setInterval(() => autoSlider(), 4000); 

function autoSlider() {
    const itemDer = document.querySelector('.slider-imagenes');
    lado = "derecha";
    moverDerecha(itemDer, contadorBanner, operacionBanner, elementosSlider, cantidadElementos);
    
} 

function btnDerClicked (e){
    const botonDer = e.target;
    const itemDer = botonDer.previousElementSibling;
    lado = "derecha";
    moverDerecha(itemDer, contadorBanner, operacionBanner, elementosSlider, cantidadElementos);
}

function btnIzqClicked (e){
    const botonIzq = e.target;
    const itemIzq = botonIzq.nextElementSibling;
    lado = "izquierda";
    moverIzquierda(itemIzq, contadorBanner, operacionBanner, elementosSlider, cantidadElementos);
}

function moverDerecha(itemDer, contador, operacion, elementosSlider, cantidadElementos) {
    if (contador >= elementosSlider - cantidadElementos){
        operacion = 0;
        contador = 0;
        itemDer.style.transform = `translate(-${operacion}%)`;
        itemDer.style.transition = "all 0.5s ease";
        contadorBanner = contador;
        operacionBanner = operacion;  
        return; 
    }
    contador++
    operacion = operacion + (100/elementosSlider);
    itemDer.style.transform = `translate(-${operacion}%)`;
    itemDer.style.transition = "all 0.5s ease";
    contadorBanner = contador;
    operacionBanner = operacion;   
} 

function moverIzquierda(itemIzq, contador, operacion, elementosSlider, cantidadElementos) {
    contador--;
    if (contador < 0){
        contador = elementosSlider - cantidadElementos;
        operacion = (elementosSlider - cantidadElementos) * (100/elementosSlider);
        itemIzq.style.transform = `translate(-${operacion}%)`;
        itemIzq.style.transition = "all 0.5s ease";
        contadorBanner = contador;
        operacionBanner = operacion;  
        return; 
    }
    operacion = operacion - (100/elementosSlider);
    itemIzq.style.transform = `translate(-${operacion}%)`;
    itemIzq.style.transition = "all 0.5s ease";
    contadorBanner = contador;
    operacionBanner = operacion;   
} 
