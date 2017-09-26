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
		meuSolido.desenhar();
	}
	
	
	function desenhar3d(){
		meuSolido.desenhar3d();
	}
	
	$("#lc_btn").on("click",limparCanvas);
	$("#pv_btn").on("click",imprimirVerticeMatricial);
	$("#2d_btn").on("click",desenhar2d);
	$("#3d_btn").on("click",desenhar3d);
});
