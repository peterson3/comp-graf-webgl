$(document).ready(function(){
	
	//Inicialização do Canvas
	var canvas = document.getElementById("glcanvas");
	context = canvas.getContext("2d");
	context.fillStyle="#FF0000";
	
	//"STATICS" variables
	VERTICE_COUNTER = 0;
	ARESTA_COUNTER = 0;
	FACE_COUNTER = 0;
	
	//var info = document.getElementById("info");
		
	
	//var tabelaVertices = document.getElementById("verticeTable");
	//var tabelaArestas = document.getElementById("arestaTable");
	//var tabelaFaces = document.getElementById("faceTable");
	var meuSolido = new Solido();
	meuSolido.gerarMeuSolido();
	meuSolido.imprimirTabelaGeral();
});

function limparCanvas(){
	var canvas = document.getElementById("glcanvas");
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function imprimirVerticeMatricial(){
	 var num_vert = Number(document.getElementById("input_num_vert").value);
	 var responseArea = document.getElementById("interact");	
	let m = vertices[num_vert].getVerticeAsMatrix();
	console.log(m);
	responseArea.innerHTML = Utils.exibeMatrizAsTable(m);
}