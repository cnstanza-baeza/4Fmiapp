const formulario = document.querySelector(".form-create");
let contador = 1;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const publicacion = document.querySelector("#publicacion").value;
    const contenedor = document.querySelector(".contenedor-publicaciones");

    // Crear nuevo contenedor para la publicación
    const nuevaPublicacion = document.createElement("div");
    nuevaPublicacion.classList.add("publicacion"); // Clase diferente para evitar conflictos

    // Agregar contenido
    nuevaPublicacion.innerHTML = `
        <div class="publicacion">
        <p>Id:${contador++}</p>
        <p>${publicacion}</p>
        <button class="btn-editar">Editar</button>
        <button class="btn-eliminar">Eliminar</button>
    `;

    // Agregar al contenedor principal
    contenedor.appendChild(nuevaPublicacion);
});
