$(document).ready(function(){
	var canvas = document.getElementById("glcanvas");
	//$("#verticeTable").hide();
	//$("#arestaTable").hide();
	//$("#faceTable").hide();
});

function start() {

var canvas = document.getElementById("glcanvas");
context = canvas.getContext("2d");
context.fillStyle="#FF0000";

//"STATICS" variables
VERTICE_COUNTER = 0;
ARESTA_COUNTER = 0;
FACE_COUNTER = 0;


var info = document.getElementById("info");


//Definindo Vértices (x,y,z)
var vertices = [];
vertices.push(new Vertice(0, 0, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(100, 100, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(0, 100, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(100, 0, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(50, 80, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(50, 20, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(10, 30, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(10, 70, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(25, 90, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(75, 90, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(90, 70, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(90, 30, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(40, 60, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(60, 60, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(40, 35, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(60, 35, Utils.getRandomInt(0, 31)));
vertices.push(new Vertice(50, 50, Utils.getRandomInt(0, 31)));

//Imprimindo Tabela de Vértices
var verticeTable= "<table id='verticeTable' border=1 width=30% style='float: left;'>";
	
for (i=0; i<vertices.length; i++){
	// vertices[i].desenhar();
	//vertices[i].desenhar_com_numero(i);
	verticeTable += "<tr>";
	verticeTable += "<td>";
	verticeTable += "v" + i + "= (" + vertices[i].x + "," + vertices[i].y + "," + vertices[i].z + ")";
	verticeTable += "</td>";
	verticeTable += "</tr>";
}
verticeTable += "</table>";
info.innerHTML += verticeTable;

//Definindo Arestas
var arestas =[];
arestas.push(new Aresta(vertices[0], vertices[2]));
arestas.push(new Aresta(vertices[0], vertices[3]));
arestas.push(new Aresta(vertices[1], vertices[3]));
arestas.push(new Aresta(vertices[1], vertices[2]));
arestas.push(new Aresta(vertices[0], vertices[6]));
arestas.push(new Aresta(vertices[6], vertices[7]));
arestas.push(new Aresta(vertices[7], vertices[8]));
arestas.push(new Aresta(vertices[8], vertices[9]));
arestas.push(new Aresta(vertices[9], vertices[10]));
arestas.push(new Aresta(vertices[10], vertices[11]));
arestas.push(new Aresta(vertices[11], vertices[3]));
arestas.push(new Aresta(vertices[2], vertices[7]));
arestas.push(new Aresta(vertices[2], vertices[8]));
arestas.push(new Aresta(vertices[8], vertices[4]));
arestas.push(new Aresta(vertices[9], vertices[4]));
arestas.push(new Aresta(vertices[4], vertices[13]));
arestas.push(new Aresta(vertices[13], vertices[10]));
arestas.push(new Aresta(vertices[4], vertices[12]));
arestas.push(new Aresta(vertices[7], vertices[12]));
arestas.push(new Aresta(vertices[12], vertices[13]));
arestas.push(new Aresta(vertices[12], vertices[16]));
arestas.push(new Aresta(vertices[13], vertices[16]));
arestas.push(new Aresta(vertices[6], vertices[12]));
arestas.push(new Aresta(vertices[13], vertices[11]));
arestas.push(new Aresta(vertices[16], vertices[14]));
arestas.push(new Aresta(vertices[16], vertices[15]));
arestas.push(new Aresta(vertices[14], vertices[15]));
arestas.push(new Aresta(vertices[5], vertices[14]));
arestas.push(new Aresta(vertices[5], vertices[15]));
arestas.push(new Aresta(vertices[0], vertices[5]));
arestas.push(new Aresta(vertices[3], vertices[5]));
arestas.push(new Aresta(vertices[14], vertices[6]));
arestas.push(new Aresta(vertices[11], vertices[15]));
arestas.push(new Aresta(vertices[1], vertices[9]));
arestas.push(new Aresta(vertices[10], vertices[1]));


//Imprimindo Tabela de Arestas
var arestaTable= "<table id='arestaTable' border=1 width=30% style='float: left;'>";
for (i=0; i<arestas.length; i++){
  arestas[i].desenhar();
//  arestas[i].desenhar_com_numero(i);
	arestaTable += "<tr>";
	arestaTable += "<td>";
	arestaTable += "e" + i + "= " + "v"+arestas[i].vertice1.i + ", " + "v" + arestas[i].vertice2.i;
	arestaTable += "</td>";
	arestaTable += "</tr>";
}
arestaTable += "</table>";
info.innerHTML += arestaTable;


//Definindo Faces
var faces =[];
//var face1 = [arestas[0], arestas[1], arestas[2]];
//faces.push(new Face(arestas[0], arestas[1], arestas[2]));
faces.push (new Face(new Array(arestas[20], arestas[21], arestas[19])));
faces.push (new Face(new Array(arestas[4], arestas[29], arestas[27], arestas[31])));
faces.push (new Face(new Array(arestas[0], arestas[11], arestas[5], arestas[4])));
faces.push (new Face(new Array(arestas[11], arestas[12], arestas[6])));
faces.push (new Face(new Array(arestas[12], arestas[3], arestas[33], arestas[7])));
faces.push (new Face(new Array(arestas[8], arestas[33], arestas[34])));
faces.push (new Face(new Array(arestas[13], arestas[7], arestas[14])));
faces.push (new Face(new Array(arestas[27], arestas[26], arestas[28])));
faces.push (new Face(new Array(arestas[1], arestas[30], arestas[29])));
faces.push (new Face(new Array(arestas[28], arestas[30], arestas[10], arestas[32])));
faces.push (new Face(new Array(arestas[10], arestas[2], arestas[34], arestas[9])));
faces.push (new Face(new Array(arestas[5], arestas[18], arestas[22])));
faces.push (new Face(new Array(arestas[6], arestas[13], arestas[17], arestas[18])));
faces.push (new Face(new Array(arestas[22], arestas[20], arestas[24], arestas[31])));
faces.push (new Face(new Array(arestas[24], arestas[25], arestas[26])));
faces.push (new Face(new Array(arestas[17], arestas[15], arestas[19])));
faces.push (new Face(new Array(arestas[25], arestas[32], arestas[23], arestas[21])));
faces.push (new Face(new Array(arestas[23], arestas[9], arestas[16])));
faces.push (new Face(new Array(arestas[15], arestas[14], arestas[8], arestas[16])));

//Imprimindo Tabela de Faces
var faceTable= "<table id='faceTable' border=1 width=30% style='float: left;'>";
for (j=0; j<faces.length; j++){
	//arestas[i].desenhar();
	//faces[j].desenhar();
	faceTable += "<tr>";
	faceTable += "<td>";
	faceTable += "f" + j + "= ";
	for (i=0; i< faces[j].arestas.length; i++){
		faceTable += "e"+ faces[j].arestas[i].i + ", ";
	}
	faceTable += "e"+ faces[j].arestas[0].i;
	faceTable += "</td>";
	faceTable += "</tr>";
}

faceTable += "</table>";
info.innerHTML += faceTable;

//euler: 2 = F-E+V
//alert("FACES= " + faces.length + "\n" + "ARESTAS= " + arestas.length + "\n" + "VERTICES= " + vertices.length+
//		"\nEULER: 2 = F - E + V");
//if ( 2 == (faces.length - arestas.length + vertices.length) )
//{
	//alert("SATISFAZ");
//}
//else{
	//alert("NÃO SATISFAZ");
//}

// for (j=0; j<20; j++){

	// //Desenhando 3D
	// for (i=0; i<vertices.length; i++){
	  // vertices[i].x += 5;
	  // vertices[i].y += 5;
	  // vertices[i].desenhar();
	// //  arestas[i].desenhar_com_numero(i);
	// }
// }


//for (j=0; j<20; j++){
	
//Desenhando 3D

//Definindo vértices projetados em profundidade no Z
var vertices2 = [];
var vertLen = vertices.length;
for (i=0; i<vertLen; i++){
  vertices2.push(new Vertice(vertices[i].x+50, vertices[i].y+50, vertices[i].z+50));
}

for (i=0; i<arestas.length; i++){
		arestas[i].desenhar();
	}
	
for (i=0; i<vertices2.length; i++){
	vertices2[i].desenhar();
}

var arestasEmZ = []; //Arestas da integração
for (i=0; i<vertices.length; i++){
	arestasEmZ.push(new Aresta(vertices[i], vertices2[i]));
}

for (i=0; i<arestasEmZ.length; i++){
		arestasEmZ[i].desenhar();
	}
	
var arestasNovas = []; //Arestas no final
for (i=0; i<arestas.length; i++){
		arestasNovas.push(new Aresta
		(new Vertice(arestas[i].vertice1.x+50, arestas[i].vertice1.y+50, arestas[i].vertice1.z+50 ),
			new Vertice(arestas[i].vertice2.x+50, arestas[i].vertice2.y+50, arestas[i].vertice2.z+50)));
		arestasNovas[i].desenhar();
	}


var tabelaVertices = document.getElementById("verticeTable");
var tabelaArestas = document.getElementById("arestaTable");
var tabelaFaces = document.getElementById("faceTable");
}


function desenhar2D (){
	
}

function limparCanvas(){
	var canvas = document.getElementById("glcanvas");
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function imprimirVerticeMatricial(){
	var num_vert = document.getElementById("input_num_vert").Text;
}