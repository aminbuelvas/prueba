var calculadora = {
	
	pantalla: document.getElementById("display"),
	valorpantalla: "0",
	operacion: "",
	primerValor: 0,
	segundoValor: 0,
	ultimoValor: 0,
	resultado: 0,
	auxTeclaIgual: false, 
	auxTeclaOperador: false,
	
	init: (function(){
		this.EventoPresionaBoton(".tecla");
		this.asignarFuncionBoton();
	}),
	
		
	EventoPresionaBoton: function(selector){
		var x = document.querySelectorAll(selector);
		for (var i = 0; i<x.length;i++) {
			x[i].onclick = this.eventoAchicaBoton;
			x[i].onmouseleave = this.eventoVuelveBoton;
		};
	},

	eventoAchicaBoton: function(event){
		calculadora.presionaTecla(event.target);
	},

	eventoVuelveBoton: function(event){
		calculadora.sueltaTecla(event.target);
	},
	
	
	
	presionaTecla: function(tecla){
		var x = tecla.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			tecla.style.width = "28%";
			tecla.style.height = "62px";
		} else if(x=="mas") {
			tecla.style.width = "88%";
			tecla.style.height = "98%";
		} else {
			tecla.style.width = "21%";
			tecla.style.height = "62px";
		}
	},
	
	sueltaTecla: function(tecla){
		var x = tecla.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			tecla.style.width = "29%";
			tecla.style.height = "62.91px";
		} else if(x=="mas") {
			tecla.style.width = "90%";
			tecla.style.height = "100%";
		} else {
			tecla.style.width = "22%";
			tecla.style.height = "62.91px";
		}
	},
	
	
	asignarFuncionBoton: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.Numero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.Numero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.Numero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.Numero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.Numero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.Numero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.Numero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.Numero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.Numero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.Numero("9");});
		document.getElementById("on").addEventListener("click", function() {calculadora.borrar();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
		document.getElementById("punto").addEventListener("click", function() {calculadora.ingresoDecimal();});
		document.getElementById("igual").addEventListener("click", function() {calculadora.Resultado();});
		document.getElementById("raiz").addEventListener("click", function() {calculadora.Operacion("raiz");});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.Operacion("/");});
		document.getElementById("por").addEventListener("click", function() {calculadora.Operacion("*");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.Operacion("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.Operacion("+");});
	},
	
	
	
	borrar: function(){ 

	    this.valorpantalla = "0";
		this.operacion = "";
		this.primerValor = 0;
		this.segundoValor = 0;
		this.resultado = 0;
		this.Operación = "";
		this.auxTeclaIgual = false;
		auxTeclaOperador: false
		this.ultimoValor = 0;
		this.updatepantalla();
	},
	
	cambiarSigno: function(){
		if (this.valorpantalla !="0") {
			var aux;
			if (this.valorpantalla.charAt(0)=="-") {
				aux = this.valorpantalla.slice(1);
			}	else {
				aux = "-" + this.valorpantalla;
			}
		this.valorpantalla = "";
		this.valorpantalla = aux;
		this.updatepantalla();
		}
	},
	
	ingresoDecimal: function(){
		if (this.valorpantalla.indexOf(".")== -1) {
			if (this.valorpantalla == ""){
				this.valorpantalla = this.valorpantalla + "0.";
			} else {
				this.valorpantalla = this.valorpantalla + ".";
			}
			this.updatepantalla();
		}
	},
	
	Numero: function(valor){
		if (this.auxTeclaOperador){
			this.valorpantalla = "0";
			this.auxTeclaOperador = true;
		}
		if (this.valorpantalla.length < 8) {		
			if (this.valorpantalla=="0"){
				this.valorpantalla = "";
				this.valorpantalla = this.valorpantalla + valor;
			} else {
				this.valorpantalla = this.valorpantalla + valor;
			}
		this.updatepantalla();
		}
	},
	
	Operacion: function(oper){
		if(this.operacion == ""){
			this.primerValor = parseFloat(this.valorpantalla);
			this.valorpantalla = "0";
		} else {
			this.segundoValor = parseFloat(this.valorpantalla);
			this.auxTeclaOperador = true;
			this.Resultado();			
		}
		this.operacion = oper;
		this.auxTeclaIgual = false;
		this.updatepantalla();
	},
	
	Resultado: function(){ 

		if(!this.auxTeclaIgual){ 
			this.segundoValor = parseFloat(this.valorpantalla);
			this.ultimoValor = this.segundoValor;		
			this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);		
		} else {
			this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}
	
		this.primerValor = this.resultado;
		this.valorpantalla = "";
	
		if (this.resultado.toString().length < 9){
			this.valorpantalla = this.resultado.toString();
		} else {
			this.valorpantalla = this.resultado.toString().slice(0,8) + "...";
		}
	
		this.auxTeclaIgual = true;		
		this.updatepantalla();
	},
	
	realizarOperacion: function(primerValor, segundoValor, operacion){
		switch(operacion){
			case "+": 
				this.resultado = eval(primerValor + segundoValor);
			break;
			case "-": 
				this.resultado = eval(primerValor - segundoValor);
			break;
			case "*": 
				this.resultado = eval(primerValor * segundoValor);
			break;
			case "/": 
				this.resultado = eval(primerValor / segundoValor);
			break;
			case "raiz":
				this.resultado = eval(Math.sqrt(primerValor));
		}
	},
	
	updatepantalla: function(){
		this.pantalla.innerHTML = this.valorpantalla;
	}
	
};

calculadora.init(); 