$(document).ready(function(){

	//Inicialização do Canvas
	canvas = document.getElementById("glcanvas");
	context = canvas.getContext("2d");
	context.fillStyle="#FF0000";

	//"STATICS" variables
	VERTICE_COUNTER = 0;
	ARESTA_COUNTER = 0;
	FACE_COUNTER = 0;

	//var info = document.getElementById("info");

	//Definindo uma matriz de Translação
	MATRIZ_TRANSLACAO = [
											[1,0,0,10],
											[0,1,0,0],
			  							[0,0,1,0]
										  ];


	//var tabelaVertices = document.getElementById("verticeTable");
	//var tabelaArestas = document.getElementById("arestaTable");
	//var tabelaFaces = document.getElementById("faceTable");
	var meuSolido = new Solido();
	meuSolido.gerarMeuSolido_Estranho();

	//meuSolido.desenhar();
	//meuSolido.desenhar3d();
	//$("#info").html(meuSolido.imprimirTabelaGeral());


	function limparCanvas(){
		var canvas = document.getElementById("glcanvas");
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	function imprimirVerticeMatricial(){
		var responseArea = document.getElementById("interact");
	//	 	var meuSolido = new Solido();
	//	meuSolido.gerarMeuSolido();
		if (document.getElementById("input_num_vert").value == ""){
			responseArea.innerHTML = meuSolido.imprimirTabelaGeral();
		}
		else{
			var num_vert = Number(document.getElementById("input_num_vert").value);
			let m = meuSolido.vertices[num_vert].getVerticeAsMatrix();
			meuSolido.vertices[num_vert].desenhar();
			responseArea.innerHTML = Utils.exibeMatrizAsTable(m);
		}

	}


	function desenhar2d(){
		//limparCanvas();
		var newContext = context;
		meuSolido.desenhar();
		context.restore();	
	}


	function desenhar3d(){
		context.save();
		limparCanvas();
		meuSolido.desenhar3d();
	}
	
	function animarSolido(){
		context.save();
		limparCanvas();
		meuSolido.animar();
	}
	

	$("#lc_btn").on("click",limparCanvas);
	$("#pv_btn").on("click",imprimirVerticeMatricial);
	$("#2d_btn").on("click",desenhar2d);
	$("#3d_btn").on("click",desenhar3d);
	$("#animar_btn").on("click", animarSolido);
});
