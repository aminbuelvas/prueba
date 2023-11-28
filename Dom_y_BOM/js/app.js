
// variable donde se guardarán los json creados
var estudiantes =[];
/*
Contructor que permite formar objetos JSON
*/
function Estudiante(codigo, nombre, nota){
	this.codigo=codigo;
	this.nombre = nombre;
	this.nota = nota;
}
/*
	Evento listener que permite la creación del json y la inserción a la tabla
*/
 document.getElementById("registro").addEventListener("click", function(){
 	// se atrapan los datos desde la interfaz
	var cod = document.getElementById("codigo").value;
	var nombre = document.getElementById("nombre").value;
	var nota = parseInt(document.getElementById("nota").value);

	// se valida que la nota sea una numero
	if (isNaN(nota)){
		alert("La nota debe ser un número");
		return;
	}
	else{
		//se crea el json
		var nuevoEstudiante = new Estudiante(cod, nombre, nota);
		//se agrega a la variable el json creado
		if (guardarJSON(nuevoEstudiante)==false){
			return;
		}
		var  tabla = document.getElementById("myTable"); // se obtiene la tabla mediante el id
		var i;
		var filaFinal;
		var fila;

		filaFinal = tabla.rows.length; // se obtiene el total de filas de la tabla
		fila = tabla.insertRow(filaFinal); // se crea la fila nueva en la tabla
			
		// ahora se crearán las celdas
		var celda0 = fila.insertCell(0);
		var celda1 = fila.insertCell(1);
		var celda2 = fila.insertCell(2);

		// se asignan los datos a las celdas
		celda0.innerHTML = nuevoEstudiante.codigo;
		celda1.innerHTML = nuevoEstudiante.nombre;
		celda2.innerHTML = nuevoEstudiante.nota;
		// limpiar los campos
		document.getElementById("codigo").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("nota").value = "";
	}			
	});

/*
	Funcion que permite guardar un json al arreglo 
*/
 function guardarJSON(json){
 	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
		if (estudiantes[i].codigo == json.codigo){
			alert("No pueden haber dos estudiantes con el mismo código");
			return false;
		}
	}
 	estudiantes[estudiantes.length] = json;
 	return true;

 }


 /*
Evento Listener que mediante un ciclo recorre el JSON, 
suma todas las notas y las divide por la cantidad de estudiantes y así obtener el promedio
*/
document.getElementById("promedio").addEventListener("click", function(){

	var sumaNotas = 0;
	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
		sumaNotas += estudiantes[i].nota;  // se van sumando todas las notas en el ciclo
	}
	var promedio = sumaNotas / estudiantes.length; // se realiza el calculo del promedio
	alert("El promedio es: " + promedio);


});

/*
Evento listener que permite calcular cual nota es la mayor de todas recorriendo el JSON,
si aun no hay una nota asignada a la variable se comprobará con la condicion isNaN para asignarle 
la primera nota, luego de eso comprobará las otras notas restantes
*/
document.getElementById("notaMayor").addEventListener("click", function(){

	var notaMayor;
	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON

		if(isNaN(notaMayor)){ // se pregunta si el dato en notaMayor es un numero o si tiene asignado uno
			notaMayor = estudiantes[i].nota; // si no lo tiene se le asigna la primera nota de todas
		}

		else if (notaMayor< estudiantes[i].nota){ // se pregunta si la nota asignada en la variable es menor que la nueva nota

			notaMayor = estudiantes[i].nota; // si eso ocurre se le asigna a la variable notaMayor la nueva nota encontrada

		}
	}
	alert("La nota mayor es: "+ notaMayor); // se asigna la nota mayor al valor de la caja de texto
});


/*
Su funcionamiento es el mismo que la de encontrar notaMayor, excepto que esta permite
encontrar la nota menor de todas
*/
document.getElementById("notaMenor").addEventListener("click", function(){
	var notaMenor;
	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON

		if(isNaN(notaMenor)){ // validar si hay un valor numerico en notaMenor
			notaMenor = estudiantes[i].nota;
		}

		else if (notaMenor > estudiantes[i].nota){ // se pregunta el nuevo valor es menor

			notaMenor = estudiantes[i].nota; // se asigna la nueva nota menor a la variable

		}
	}
	alert("La nota menor es: "+ notaMenor); // se envía el resultado al valor de la caja de texto
});
