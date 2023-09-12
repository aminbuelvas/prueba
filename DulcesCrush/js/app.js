setInterval('amarillo()',1000);
setInterval('grey()',2000);

setInterval('verificarVertical()',500);
setInterval('verificarHorizontal()',1000);

function amarillo(){
  $(".main-titulo").css("color","yellow")
}

function grey(){
  $(".main-titulo").css("color","grey")
}

var score=0;

//funcion para rellenar todos los espacios
function reinsertar() {
  var child1=$(".col-1").children();
  var child2=$(".col-2").children();
  var child3=$(".col-3").children();
  var child4=$(".col-4").children();
  var child5=$(".col-5").children();
  var child6=$(".col-6").children();
  var child7=$(".col-7").children();
  if (child1.length<=6) {
    var x1 = Math.floor((Math.random() * 4) + 1);
    $(".col-1").prepend("<img src='image/"+x1+".png' class='fruta ui-draggable ui-droppable ui-draggable-handle' style='position: relative;'/>");
  };
  if (child2.length<=6) {
    var x2 = Math.floor((Math.random() * 4) + 1);
    $(".col-2").prepend("<img src='image/"+x2+".png' class='fruta ui-draggable ui-droppable ui-draggable-handle' style='position: relative;'/>");
  };
  if (child3.length<=6) {
    var x3 = Math.floor((Math.random() * 4) + 1);
    $(".col-3").prepend("<img src='image/"+x3+".png' class='fruta ui-draggable ui-droppable ui-draggable-handle' style='position: relative;'/>");
  };
  if (child4.length<=6) {
    var x4 = Math.floor((Math.random() * 4) + 1);
    $(".col-4").prepend("<img src='image/"+x4+".png' class='fruta ui-draggable ui-droppable ui-draggable-handle' style='position: relative;'/>");
  };
  if (child5.length<=6) {
    var x5 = Math.floor((Math.random() * 4) + 1);
    $(".col-5").prepend("<img src='image/"+x5+".png' class='fruta ui-draggable ui-droppable ui-draggable-handle' style='position: relative;'/>");
  };
  if (child6.length<=6) {
    var x6 = Math.floor((Math.random() * 4) + 1);
    $(".col-6").prepend("<img src='image/"+x6+".png' class='fruta ui-draggable ui-droppable ui-draggable-handle' style='position: relative;'/>");
  };
  if (child7.length<=6) {
    var x7 = Math.floor((Math.random() * 4) + 1);
    $(".col-7").prepend("<img src='image/"+x7+".png' class='fruta ui-draggable ui-droppable ui-draggable-handle' style='position: relative;'/>");
  };
}

var minuto=2;
var segundo=0;
var temporizador=0;

//boton de reiniciar
$(function() {
  $(".btn-reinicio").click(function () {
    $('.fruta').css("justify-content");
    clearInterval(temporizador);
    $(".panel-score").css("width","25%");
  	$(".panel-tablero").show();
    score=0;
    var a=1;
    while (a<=7) {
      $(".col-"+a+"").empty();
      a++;
    };
    temporizador=setInterval('tiempo()',1000);
    $(".time").show();
    setInterval('reinsertar()',500);
    $(this).text("Reiniciar");
    minuto=2;
    segundo=0;
    $("#score-text").html(" "+score+" ");
  });
})

//Temporizador
function tiempo(){
	if(segundo!=0){
		segundo=segundo-1;}
	if(segundo==0){
		if(minuto==0){
			$(".panel-tablero").hide("drop","slow",marcadores);
			$(".time").hide();}
		segundo=59;
		minuto=minuto-1;}
	$("#timer").html("0"+minuto+":"+segundo);
};


//funcion para poner el marcador en pantalla completa
function marcadores(){
	$( ".panel-score" ).animate({width:'100%'},3000);
	$(".termino").css({"display":"block","text-align":"center"});
};

//funcion para verificar si hay juegos de tres elementos en vertical
function verificarVertical() {
    var uno=[], dos=[], tres=[], cuatro=[], cinco=[], seis=[], siete=[];
    for (var i = 0; i <= 6; i++) {
      uno[i]=$(".col-1").find( "img" ).eq( i ).attr('src');
      dos[i]=$(".col-2").find( "img" ).eq( i ).attr('src');
      tres[i]=$(".col-3").find( "img" ).eq( i ).attr('src');
      cuatro[i]=$(".col-4").find( "img" ).eq( i ).attr('src');
      cinco[i]=$(".col-5").find( "img" ).eq( i ).attr('src');
      seis[i]=$(".col-6").find( "img" ).eq( i ).attr('src');
      siete[i]=$(".col-7").find( "img" ).eq( i ).attr('src');
    };
    for(var j=1;j<8;j++){
  		matriz=matriz+$(".col-"+j).children().length;};
    for (var c = 0, d=1, e=2; e <=6; e++) {

      if (uno[c]==uno[d]&&uno[d]==uno[e]&&matriz==49) {
        $(".col-1").find( "img" ).eq( c ).attr("class","borrar");
        $(".col-1").find( "img" ).eq( d ).attr("class","borrar");
        $(".col-1").find( "img" ).eq( e ).attr("class","borrar");
      };
      if (dos[c]==dos[d]&&dos[d]==dos[e]&&matriz==49) {
        $(".col-2").find( "img" ).eq( c ).attr("class","borrar");
        $(".col-2").find( "img" ).eq( d ).attr("class","borrar");
        $(".col-2").find( "img" ).eq( e ).attr("class","borrar");
        score=score+5;
      };
      if (tres[c]==tres[d]&&tres[d]==tres[e]&&matriz==49) {
        $(".col-3").find( "img" ).eq( c ).attr("class","borrar");
        $(".col-3").find( "img" ).eq( d ).attr("class","borrar");
        $(".col-3").find( "img" ).eq( e ).attr("class","borrar");
        score=score+5;
      };
      if (cuatro[c]==cuatro[d]&&cuatro[d]==cuatro[e]&&matriz==49) {
        $(".col-4").find( "img" ).eq( c ).attr("class","borrar");
        $(".col-4").find( "img" ).eq( d ).attr("class","borrar");
        $(".col-4").find( "img" ).eq( e ).attr("class","borrar");
        score=score+5;
      };
      if (cinco[c]==cinco[d]&&cinco[d]==cinco[e]&&matriz==49) {
        $(".col-5").find( "img" ).eq( c ).attr("class","borrar");
        $(".col-5").find( "img" ).eq( d ).attr("class","borrar");
        $(".col-5").find( "img" ).eq( e ).attr("class","borrar");
        score=score+5;
      };
      if (seis[c]==seis[d]&&seis[d]==seis[e]&&matriz==49) {
        $(".col-6").find( "img" ).eq( c ).attr("class","borrar");
        $(".col-6").find( "img" ).eq( d ).attr("class","borrar");
        $(".col-6").find( "img" ).eq( e ).attr("class","borrar");
        score=score+5;
      };
      if (siete[c]==siete[d]&&siete[d]==siete[e]&&matriz==49) {
        $(".col-7").find( "img" ).eq( c ).attr("class","borrar");
        $(".col-7").find( "img" ).eq( d ).attr("class","borrar");
        $(".col-7").find( "img" ).eq( e ).attr("class","borrar");
        score=score+5;
      };
      $(".borrar").hide("pulsate",1400,function(){
        $(".borrar").remove();
      });
      c++;
      d++;
      $("#score-text").html(" "+score+" ");
    }
    matriz=0;
}

//verificar si hay combinaciones en horizontal
function verificarHorizontal() {
    var unoH=[], dosH=[], tresH=[], cuatroH=[], cincoH=[], seisH=[], sieteH=[];
    for (var iH = 0; iH <= 6; iH++) {
      unoH[iH]=$(".col-1").find( "img" ).eq( iH ).attr('src');
      dosH[iH]=$(".col-2").find( "img" ).eq( iH ).attr('src');
      tresH[iH]=$(".col-3").find( "img" ).eq( iH ).attr('src');
      cuatroH[iH]=$(".col-4").find( "img" ).eq( iH ).attr('src');
      cincoH[iH]=$(".col-5").find( "img" ).eq( iH ).attr('src');
      seisH[iH]=$(".col-6").find( "img" ).eq( iH ).attr('src');
      sieteH[iH]=$(".col-7").find( "img" ).eq( iH ).attr('src');
    };
    for(var j=1;j<8;j++){
      matriz=matriz+$(".col-"+j).children().length;};
    for (var cH = 0; cH <=6; cH++) {

      if (unoH[cH]==dosH[cH]&&unoH[cH]==tresH[cH]&&matriz==49) {
        $(".col-1").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-2").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-3").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+5;
      };
      if (dosH[cH]==tresH[cH]&&dosH[cH]==cuatroH[cH]&&matriz==49) {
        $(".col-2").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-3").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-4").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+5;
      };
      if (tresH[cH]==cuatroH[cH]&&tresH[cH]==cincoH[cH]&&matriz==49) {
        $(".col-3").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-4").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-5").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+5;
      };
      if (cuatroH[cH]==cincoH[cH]&&cuatroH[cH]==seisH[cH]&&matriz==49) {
        $(".col-4").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-5").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-6").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+5;
      };
      if (cincoH[cH]==seisH[cH]&&cincoH[cH]==sieteH[cH]&&matriz==49) {
        $(".col-5").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-6").find( "img" ).eq( cH ).attr("class","borrar2");
        $(".col-7").find( "img" ).eq( cH ).attr("class","borrar2");
        score=score+5;
      };
    }
    $(".borrar2").hide("pulsate",1400,function(){
      $(".borrar2").remove();
      $("#score-text").html(" "+score+" ");
    });
    matriz=0;
};



setInterval('eliminar()', 500);
var mov=0;
var matriz=0;
function eliminar(){

		$(".fruta").draggable({
			disabled:false,
			containment:".panel-tablero",
			revert:true,
			revertDuration:0,
			snap:".fruta",
			snapMode:"inner",
			snapTolerance:40,
			start:function(event,ui){
				mov=mov+1;
				$("#movimientos-text").html(mov);}
		});

	$(".fruta").droppable({
		drop:function (event,ui){
			var dropped=ui.draggable;
			var droppedOn=this;
			espera=0;
			espera=dropped.swap($(droppedOn));
      },
	});
};

//---------Función para intercambiar dulces-------------------------------------
jQuery.fn.swap=function(b){
	b=jQuery(b)[0];
	var a=this[0];
	var t=a.parentNode.insertBefore(document.createTextNode(''),a);
	b.parentNode.insertBefore(a,b);
	t.parentNode.insertBefore(b,t);
	t.parentNode.removeChild(t);
	return this;
};
