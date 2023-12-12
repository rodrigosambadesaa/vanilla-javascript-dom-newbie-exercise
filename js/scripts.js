const innerHTML = document.querySelector('#innerHTML')
innerHTML.addEventListener('click', function() {
    const nombre = prompt('Introduzca su nombre')
    innerHTML.innerHTML = nombre
})

const textContent = document.querySelector('#textContent')
textContent.addEventListener('click', function() {
    const nombre = prompt('Introduzca su nombre')
    textContent.textContent = nombre
})

const append = document.querySelector('#append')
append.append('mundo')

const prepend = document.querySelector('#prepend')
prepend.prepend('Hola ')

const value = document.querySelector('#value')
value.addEventListener('click', function () {
    const nombre = prompt('Introduzca su nombre')
    value.value = nombre
})

const botonClickDobleClick = document.querySelector('#click-dblclick')
botonClickDobleClick.addEventListener('click', function () {
    botonClickDobleClick.value = 'Hice click'
})

botonClickDobleClick.addEventListener('dblclick', function () {
    botonClickDobleClick.value = 'Hice doble click'
})

const textArea = document.querySelector('#origen')
const botonPegar = document.querySelector('#copiar')
const destino = document.querySelector('#destino')

botonPegar.addEventListener('click', function() {
    const texto = textArea.value
    destino.append(texto)
})

const botonCDN = document.querySelector('#cdn')
const oculto = document.querySelector('.oculto')
const botonCerrar = document.querySelector('.fa-times-circle')

botonCDN.addEventListener('click', function (e) {
    e.preventDefault()
    oculto.style.display = 'block'
    botonCerrar.addEventListener('click', function () {
        oculto.style.display = 'none'
    })
})

const botonAnhadirClases = document.querySelector('#addClass')
const botonEliminarClases = document.querySelector('#removeClass')
const ol = document.querySelector('#add-remove-class')

botonAnhadirClases.addEventListener('click', function () {
    ol.firstElementChild.classList.add("fa-4x")
})

botonEliminarClases.addEventListener('click', function () {
    ol.firstElementChild.classList.remove("fa")
    ol.firstElementChild.classList.remove("fa-blind")
    ol.firstElementChild.classList.remove("fa-3x")
})



const h1 = document.querySelector('h1')
h1.addEventListener('click', function () {
    alert('Hola mundo')
})

const botonOcultar = document.querySelector('#miBoton')
botonOcultar.addEventListener('click', function () {
    botonOcultar.style.display = 'none'
})

const enlaceAOcultar = document.querySelector('#meMuero')
enlaceAOcultar.addEventListener('mouseover', function () {
    enlaceAOcultar.style.display = 'none'
})

enlaceAOcultar.addEventListener('click', function (event) {
    event.preventDefault()
})

const inputIsNaN = document.querySelector('#isNaN')
const botonActualizar = document.querySelector('#bColor')
const parrafoColor = document.querySelector('#pColor')

botonActualizar.addEventListener('click', function () {
    if (!isNaN(inputIsNaN.value)) {
        parrafoColor.classList.add('rojo')
    }
})