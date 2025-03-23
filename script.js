//Animacao da barra superior
const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop < 100) {
        topBar.style.top = '0'; 
    } else {
        topBar.style.top = '-100px'; 
    }
});

//Animacao do titulo
const titulo = document.querySelector("h1");
titulo.textContent = "";

const title = "Welcome to gCommerce!";
const titleElement = document.getElementById("typing-title");
let index = 0;

function typeWriter() {
    if (index < title.length) {
        titleElement.innerHTML += title.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Velocidade da digitação
    } else {
        titleElement.style.borderRight = "none"; 
    }
}

typeWriter(); // Inicia a animacao