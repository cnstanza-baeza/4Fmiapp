const formulario = document.querySelector(".form-create");
let contador = 1;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const publicacion = document.querySelector("#publicacion").value;
    const contenedor = document.querySelector(".contenedor-publicaciones");

    // Agregar contenido
    contenedor.innerHTML += `
        <div class="publicacion">
        <p>Id:${contador++}</p>
        <p>${publicacion}</p>
        <button class="btn-editar">Editar</button>
        <button class="btn-eliminar">Eliminar</button>
        </div>
    `;

    // Agregar al contenedor principal
    contenedor.appendChild(nuevaPublicacion);
});
