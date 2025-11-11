const menuLateral = document.getElementById("menu-lateral");
const fondoOscuro = document.getElementById("fondo-oscuro");
const botonAbrir = document.getElementById("abrir-menu");
const botonCerrar = document.getElementById("cerrar-menu");

botonAbrir.addEventListener("click", () => {
  sonidoMenu.currentTime = 0; 
  sonidoMenu.play();  
  menuLateral.classList.add("activo");
  fondoOscuro.classList.add("activo");
});

botonCerrar.addEventListener("click", () => {
  sonidoMenu.currentTime = 0; 
  sonidoMenu.play();  
  menuLateral.classList.remove("activo");
  fondoOscuro.classList.remove("activo");
});

fondoOscuro.addEventListener("click", () => {
  menuLateral.classList.remove("activo");
  fondoOscuro.classList.remove("activo");
});

/* Submenú */
const itemCategorias = document.querySelector(".item-categorias");
const botonSubmenu = itemCategorias.querySelector(".boton-submenu");

botonSubmenu.addEventListener("click", () => {
  itemCategorias.classList.toggle("abierto");
});

const enlacesMenu = document.querySelectorAll(".lista-menu a");

enlacesMenu.forEach(enlace => {
  enlace.addEventListener("click", () => {
    menuLateral.classList.remove("activo");
    fondoOscuro.classList.remove("activo");
  });
});
