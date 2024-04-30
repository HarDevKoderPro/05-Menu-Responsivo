// Función que agrega y quita (toggle) la clase mostrar para el menu movil
const mostrar=()=>{
    var menu = document.getElementById("menu");
    menu.classList.toggle("mostrar");
}


// Funcion que indica si el móvil está en portait o landscape
// Se puede utilizar para evitar el uso en cualquiera de los dos modos
const orientacion= ()=>{
    if (window.matchMedia("(orientation: portrait)").matches) {
        alert("you're in PORTRAIT mode");
    }
    
    if (window.matchMedia("(orientation: landscape)").matches) {
        alert("you're in LANDSCAPE mode") 
    }
}