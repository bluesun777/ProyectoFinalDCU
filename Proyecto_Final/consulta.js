// consulta.js

var datosGuardados = [];

function obtenerDatosGuardados() {
  var datos = localStorage.getItem('datos');
  if (datos) {
    return JSON.parse(datos);
  } else {
    return [];
  }
}

function mostrarDatos() {
  var resultadosLista = document.getElementById("resultadoLista");
  resultadosLista.innerHTML = ""; // Limpiar los resultados anteriores
  
  var datosGuardados = obtenerDatosGuardados();
  
  for (var i = 0; i < datosGuardados.length; i++) {
    resultadosLista.innerHTML += "<p>ID: " + datosGuardados[i].id + ", Nombre: " + datosGuardados[i].nombre + ", Correo: " + datosGuardados[i].correo + ", Teléfono: " + datosGuardados[i].telefono + "</p>";
  }

  resultadosLista.style.display = "block"; // Mostrar la lista de resultados
}

// Mostrar la sección de resultados al cargar la página
window.onload = function() {
  var resultadosLista = document.getElementById("resultadoLista");
  resultadosLista.style.display = "none";
};