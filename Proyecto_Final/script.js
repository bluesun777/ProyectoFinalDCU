
var datosGuardados = [];

function guardarEnLocalStorage() {
  localStorage.setItem('datos', JSON.stringify(datosGuardados));
}

function obtenerDatosGuardados() {
  var datos = localStorage.getItem('datos');
  if (datos) {
    return JSON.parse(datos);
  } else {
    return [];
  }
}

function guardarDatos() {
  var id = document.getElementById("id").value;
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  
  var nuevoDato = { id: id, nombre: nombre, correo: correo, telefono: telefono };
  
  datosGuardados.push(nuevoDato);
  guardarEnLocalStorage();
  
  alert("Datos registrados.");
  limpiarFormulario();
}

function limpiarFormulario() {
  document.getElementById("id").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
}

// Mostrar la sección de resultados al cargar la página
window.onload = function() {
  var resultadosLista = document.getElementById("resultadoLista");
  resultadosLista.style.display = "none";
};