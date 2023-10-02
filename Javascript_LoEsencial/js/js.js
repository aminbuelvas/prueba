//JSON estudiantes

var estudiantes = [
  {
    "codigo":"001",
    "nombre":"Ignacio Garcia",
    "nota": 70
   },{
    "codigo":"002",
    "nombre":"Abiel Gonzalez",
    "nota": 85
  },{
    "codigo":"003",
    "nombre":"Andres Zambra",
    "nota": 90
  },{
    "codigo":"004",
    "nombre":"Caleb Ulloa",
    "nota": 68
  },{
    "codigo":"005",
    "nombre":"Alfredo Rojas",
    "nota": 50
  }
];

//Funcion de JSON

function leerJSON (json) {
  var out="-----------------ESTUDIANTES------------------<br>";
  var i;
  for (var i = 0; i < json.length; i++) {
    out +="Codigo: " +json[i].codigo + ", " + "Nombre: " +json[i].nombre + ", " + "Nota: " +json[i].nota +"<br>";
  }
  document.getElementById("estudiantes").innerHTML = out;
}





//funcion mostrar

function mostrarEstudiantes() {
  leerJSON(estudiantes);
}

