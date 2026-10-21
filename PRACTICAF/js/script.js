const cuadros = document.querySelectorAll(".cuadro");
const pantallas = document.querySelectorAll(".pantalla");

function mostrarPantalla(id) {
    pantallas.forEach(function (p) {
        p.classList.remove("activa");      
    });
    document.getElementById(id).classList.add("activa"); 
    window.scrollTo(0, 0);                 
}

cuadros.forEach(function (cuadro) {
    cuadro.addEventListener("click", function () {
       
        cuadros.forEach(function (c) {
            c.classList.remove("seleccionado");
        });
        cuadro.classList.add("seleccionado");

        mostrarPantalla(cuadro.dataset.destino);
    });
});


const formulario = document.getElementById("miFormulario");
const lista = document.getElementById("lista");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();   

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;

    console.log(nombre + " " + categoria + " " + descripcion);

    document.getElementById("resultado").textContent =
        "¡Listo, " + nombre + "! Tu reporte de " + categoria + " fue enviado.";

    
    const item = document.createElement("li");

    const etiqueta = document.createElement("span");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = categoria;

    const texto = document.createElement("span");
    texto.textContent = descripcion + " (Estado: en proceso)";

    item.appendChild(etiqueta);
    item.appendChild(texto);
    lista.appendChild(item);

    formulario.reset();       
});