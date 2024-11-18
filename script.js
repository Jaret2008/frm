// Selección de elementos
const forms = document.querySelector('.forms');
const next = document.querySelector('#next'); // Cambiado a ID
const next2 = document.querySelector('#next2'); // Cambiado a ID
const next3 = document.querySelector('#next3'); // Cambiado a ID
const next4 = document.querySelector('#next4'); // Cambiado a ID
const submit = document.querySelector('#submit'); // Cambiado a ID
const btnPopup = document.querySelector('.btnforms-popup');
const salir = document.querySelector('.salir');
const numberone = document.querySelector('.numberone'); // Cambiado a querySelector
const numbertwo = document.querySelector('.numbertwo'); // Cambiado a querySelector
const numberthree = document.querySelector('.numberthree'); // Cambiado a querySelector
const numberfour = document.querySelector('.numberfour'); // Cambiado a querySelector
const numberfive = document.querySelector('.numberfive'); // Cambiado a querySelector

// Evento para enviar el formulario
submit.addEventListener('click', (event) => {
        alert("GRACIAS POR TERMINAR EL FORMULARIO... PUEDES SALIR DE ESTE SITIO WEB");
});

// Evento para el botón "Siguiente"
next.addEventListener('click', () => {
    numberone.classList.remove('active'); // Desactiva el formulario 1
    numbertwo.classList.add('active'); // Activa el formulario 2
    numberone.style.transform = 'translateX(-400px)'; // Desliza el formulario 1 fuera de vista
    numbertwo.style.transform = 'translateX(0)'; // Muestra el formulario 2
    forms.classList.add('shrink'); // Reducir la altura del formulario
});

// Evento para el botón "Siguiente"
next2.addEventListener('click', () => {
    numbertwo.classList.remove('active'); // Desactiva el formulario 2
    numberthree.classList.add('active'); // Activa el formulario 3
    numbertwo.style.transform = 'translateX(400px)'; // Desliza el formulario 2 fuera de vista
    numberthree.style.transform = 'translateX(0)'; // Muestra el formulario 3
    forms.classList.add('shrink'); // Restaurar altura original
});

// Evento para el botón "Siguiente"
next3.addEventListener('click', () => {
    numberthree.classList.remove('active'); // Desactiva el formulario 3
    numberfour.classList.add('active'); // Activa el formulario 4
    numberthree.style.transform = 'translateX(400px)'; // Desliza el formulario 3 fuera de vista
    numberfour.style.transform = 'translateX(0)'; // Muestra el formulario 4
    forms.classList.remove('shrink2'); // Restaurar altura original
});

// Evento para el botón "Siguiente"
next4.addEventListener('click', () => {
    numberfour.classList.remove('active'); // Desactiva el formulario 4
    numberfive.classList.add('active'); // Activa el formulario 5
    numberfour.style.transform = 'translateX(400px)'; // Desliza el formulario 4 fuera de vista
    numberfive.style.transform = 'translateX(0)'; // Muestra el formulario 5
    forms.classList.add('shrink3'); // Restaurar altura original 
});

// Evento para mostrar el formulario
btnPopup.addEventListener('click', () => {
    forms.classList.add('active-popup'); // Muestra el formulario principal
});

// Evento para cerrar el formulario
salir.addEventListener('click', () => {
    forms.classList.remove('active-popup'); // Oculta el formulario principal
});