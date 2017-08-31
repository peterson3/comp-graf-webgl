function start() {

var canvas = document.getElementById("glcanvas");
context = canvas.getContext("2d");

var ponto = [0, 0];
var ponto2 = [100, 100];
var ponto3 = [0, 100];
var ponto4 = [100, 0];

var ponto5 = [50, 80];
var ponto6 = [50, 20];


var ponto7 = [10, 40];
var ponto8 = [10, 70];
var ponto9 = [25, 90];
var ponto10 = [75, 90];
var ponto11 = [90, 70];
var ponto12 = [90, 40];

var ponto13 = [40, 60];
var ponto14 = [60, 60];

var ponto15 = [40, 35];
var ponto16 = [60, 35];
var ponto17 = [50, 50];


desenhaPonto(ponto);
desenhaPonto(ponto2);
desenhaPonto(ponto3);
desenhaPonto(ponto4);
desenhaPonto(ponto5);
desenhaPonto(ponto6);
desenhaPonto(ponto7);
desenhaPonto(ponto8);
desenhaPonto(ponto9);
desenhaPonto(ponto10);
desenhaPonto(ponto11);
desenhaPonto(ponto12);
desenhaPonto(ponto13);
desenhaPonto(ponto14);
desenhaPonto(ponto15);
desenhaPonto(ponto16);
desenhaPonto(ponto17);


context.beginPath();
  // all points are given as x (from left to right), y (from top to bottom)
  //context.moveTo(10, 20); // x = 10 (10 px from the left edge of the canvas), y = 20 (20 px from the top edge of the canvas)
  //context.lineTo(100, 97); // x = 100, y = 97
  //context.lineTo(50, 105); // x = 50, y = 100
  conectaPonto(ponto, ponto3);
  conectaPonto(ponto, ponto4);
  conectaPonto(ponto2,ponto4);
  conectaPonto(ponto2, ponto3);

context.stroke();
}

function desenhaPonto(P){
  context.fillRect(P[0], P[1], 3, 3);

}

function conectaPonto(P1, P2){
  context.moveTo(P1[0], P1[1]);
  context.lineTo(P2[0], P2[1]);
}
