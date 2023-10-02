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
  },{
    "codigo":"006",
    "nombre":"Rogelio Isla",
    "nota": 71
  },{
    "codigo":"007",
    "nombre":"Luis Cortes",
    "nota": 92
  },{
    "codigo":"008",
    "nombre":"Pilar Mansilla",
    "nota": 99
  },{
    "codigo":"009",
    "nombre":"Felipe Fuenzalida",
    "nota": 65
  },{
    "codigo":"010",
    "nombre":"Matias Baeza",
    "nota": 100
  }
];

//Funciones de JSON

function leerJSON (json) {
  var out="-----------------ESTUDIANTES------------------<br>";
  var i;
  for (var i = 0; i < json.length; i++) {
    out +="Codigo: " +json[i].codigo + ", " + "Nombre: " +json[i].nombre + ", " + "Nota: " +json[i].nota +"<br>";
  }
  document.getElementById("estudiantes").innerHTML = out;
}


function promedio(json) {
  var out="-----------------PROMEDIO-----------------<br>";
  var sumaNotas= 0.0;
  var aux = out+="";

  for (var i = 0; i < json.length; i++) {
    sumaNotas +=json[i].nota ;
  }
  document.getElementById("promedio").innerHTML = aux +"El promedio del curso es: " + sumaNotas/10.;
}


function notaAlta(json){
  var out ="-------------NOTA MAS ALTA----------------<br>";
  var notaAlta = json[0].nota;
  var pos = 0;
  var aux = out+="";

  for (i = 0; i < json.length; i++) {

  if (json[i].nota > notaAlta) {
    notaAlta = json[i].nota;
    pos = i;
  }
}

document.getElementById("notaAlta").innerHTML = aux +
"Las nota mas alta de los estudiantes es de: " +json[pos].nombre 
+ " " + "Con una nota de:  " +json[pos].nota +"<br>";
}


function notaBaja(json){
  var out ="-------------NOTA MAS BAJA----------------<br>";
  var notaBaja = json[0].nota;
  var pos = 0;
  var aux = out+="";

  for (i = 0; i < json.length; i++) {

  if (json[i].nota < notaBaja) {
    notaBaja = json[i].nota;
    pos = i;
  }
}
document.getElementById("notaBaja").innerHTML = aux +
"Las nota mas baja de los estudiantes es: " +json[pos].nombre 
+ " " + "Con una nota de:  " +json[pos].nota +"<br>";
}


//funciones mostrar

function mostrarEstudiantes() {
  leerJSON(estudiantes);
}

function mostrarPromedio(){
  promedio(estudiantes);
}
function mostrarNotaAlta(){
  notaAlta(estudiantes);
}
function mostrarNotaBaja(){
  notaBaja(estudiantes);
}
