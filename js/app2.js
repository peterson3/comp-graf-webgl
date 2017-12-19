$(document).ready(function(){

	//Inicialização do Canvas
	canvas = document.getElementById("glcanvas");
	context = canvas.getContext("2d");
	context.translate(canvas.width/2, canvas.height/2); //movendo o centro do eixo para o centro do elemento
	context.fillStyle="#FF0000";

	//
	CANVAS_X_MIN = 0;
	CANVAS_X_MAX = canvas.width;
	CANVAS_Y_MIN = 0;
	CANVAS_Y_MAX = canvas.height;
	//Escalando os pontos no canvas
	ZOOM = 1;

	//"STATICS" variables
	VERTICE_COUNTER = 0;
	ARESTA_COUNTER = 0;
	FACE_COUNTER = 0;

	//var info = document.getElementById("info");

	//Definindo uma matriz de Translação
	MATRIZ_TRANSLACAO = [
						[1, 0, 0, 10],
						[0, 1, 0, 0],
						[0, 0, 1, 0],
						[0, 0, 0, 1]
						];

	let sx = 2;
	let sy = 2;
	let sz = 2;
	MATRIZ_ESCALA = [
		[sx, 0, 0, 0],
		[0, sy, 0, 0],
		[0, 0, sz, 0],
		[0, 0, 0, 1]
	];

	MATRIZ_PROJ_Z0 = [
			[1, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 1]
		];
		
		Zcp = 1; //Z centro de projecao
	MATRIZ_PROJ_PERSP_Z0 = [
			[1, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, -1/Zcp],
			[0, 0, 0, 1]
		];
		

	let ang = 45; //45 graus
	let rad_ang = Utils.GrausParaRadianos(ang);

	MATRIZ_ROT_X = [
			[1, 0, 0, 0],
			[0, Math.cos(rad_ang), -1*Math.sin(rad_ang), 0],
			[0, Math.sin(rad_ang), Math.cos(rad_ang), 0],
			[0, 0, 0, 1]
		];

	MATRIZ_ROT_Y = [
			[Math.cos(rad_ang), 0, Math.sin(rad_ang), 0],
			[0,1, 0, 0],
			[-1*(Math.sin(rad_ang)),0, Math.cos(rad_ang), 0],
			[0, 0, 0, 1]
		];


	MATRIZ_ROT_Z = [
			[Math.cos(rad_ang), -1*(Math.sin(rad_ang)), 0, 0],
			[Math.sin(rad_ang),Math.cos(rad_ang), 0, 0],
			[0,0, 1, 0],
			[0, 0, 0, 1]
		];

	//var tabelaVertices = document.getElementById("verticeTable");
	//var tabelaArestas = document.getElementById("arestaTable");
	//var tabelaFaces = document.getElementById("faceTable");
	var meuSolido = new Solido();
	//meuSolido.gerarMeuSolido_Estranho();
	//meuSolido.gerarMeuSolido_Cubo();
	meuSolido.gerarMeuSolido_batmerang();
	meuSolido.definirCurvas();
	meuSolido.ligarArestas();
	meuSolido.sweep();
	meuSolido.sweep();
	meuSolido.projetar("Perspectiva");
	meuSolido.desenharVertices();
	meuSolido.desenharArestas();
	meuSolido.desenharFaces();

	//meuSolido.animar();
	

	// let normais = meuSolido.getListaDeNormais();
	// console.table(normais);

	// //Definindo um Vetor de Luz
	// let luz = new Vetor(30,15,-20);


	// //Testando as funções
	// //console.log(luz);
	// //console.log(luz.getModulo());
	// //luz = luz.getNormalizado();
	// //console.log(luz);
	// //console.log(luz.getModulo());

	// //Para cada Face, verificar se ele o produto escalar é maior que zero
	// let facesToBeDrawed = [];
	// let cosTethaIluminacao = [];
	// let Idfaces = []; //Iluminação difusa de cada face
	// let colors = [];

	// let Ii = 1; //???
	// let kd = 1; //kd é a componente de reflectância difusa do material, dependente do comprimento de onda

	// for (let i=0; i<normais.length; i++){
	// 	let prodEscalar = Vetor.ProdutoInterno(normais[i], luz);
	// 	if (prodEscalar>0){
	// 		console.log("Normal " + i + " dentro do campo de visão - na lista para desenhar...");
	// 		cosTethaIluminacao.push(prodEscalar);
	// 		let IdFace = kd*Ii*prodEscalar;
	// 		console.log ("Iluminação difusa nesta face: " + IdFace);
	// 		Idfaces.push(IdFace); //Iluminação das Faces
	// 		//colors.push('rgb('+rgb[0]+', '+rgb[1]+', '+rgb[2]+')');
	// 		colors.push('hsl(90, 20%, '+IdFace*100+'%)')
	// 		facesToBeDrawed.push(meuSolido.faces[i]);
	// 	}
	// }

	//Face.animar(facesToBeDrawed, colors, 500);

	




	//$("#info").html(meuSolido.imprimirTabelaGeral());

	//let centroide = meuSolido.getVerticeCentro();
	//console.log("CENTROIDE: (" + centroide.x + "," + centroide.y + "," + centroide.z + ")");

	function limparCanvas(){
		var canvas = document.getElementById("glcanvas");
		
		context.translate(-canvas.width/2, -canvas.height/2);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.translate(canvas.width/2, canvas.height/2);
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
		limparCanvas();
		meuSolido.desenhar3d();
	}

	function animarSolido(){
		limparCanvas();
		meuSolido.animar();
	}

	function func1(){
		meuSolido.transformar(MATRIZ_TRANSLACAO);
		animarSolido();
	}

	function func2(){
		meuSolido.transformar(MATRIZ_ESCALA);
		animarSolido();
	}

	function func3(){
		meuSolido.transformar(MATRIZ_ROT_X);
		animarSolido();
	}

	function func4(){
		meuSolido.transformar(MATRIZ_ROT_Y);
	   animarSolido();
	}

	function func5(){
		meuSolido.transformar(MATRIZ_ROT_Z);
		animarSolido();
	}

	function func6(){
		limparCanvas();
		meuSolido = new Solido();
		meuSolido.gerarMeuSolido_Cubo();
	}
	
	function func7(){
		//meuSolido.transformar(MATRIZ_PROJ_PERSP_Z0);
		//Transladar para o centro
		let centroide = meuSolido.getVerticeCentro();
		//Montando matriz de translação de acordo com o centroide
	MATRIZ_TRANSLACAO_CENTRO = [
			[1, 0, 0, -1*(centroide.x)],
			[0, 1, 0, -1*(centroide.y)],
			[0, 0, 1, -1*(centroide.z)],
			[0, 0, 0, 1]
		];
		meuSolido.transformar(MATRIZ_TRANSLACAO_CENTRO);
		animarSolido();
	}
	
	
	function func8(){	
	limparCanvas();
		let d = 2; // d pt de fuga
		
			let MATRIZ_PROJ_PERSP_TST = [
			[1, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 1/d, 0]
		];
		
		//Homogeneizar os vértices
		meuSolido.transformar(MATRIZ_PROJ_PERSP_TST)
		let qtd = meuSolido.vertices.length;
		for (let i=0; i<qtd; i++){
			meuSolido.vertices[i].homogen();
		 }
		
		meuSolido.animar();
	}

	$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

	//Atribuindo Funcionalidades ao botões
	$("#lc_btn").on("click",limparCanvas);
	$("#pv_btn").on("click",imprimirVerticeMatricial);
	$("#2d_btn").on("click",desenhar2d);
	$("#3d_btn").on("click",desenhar3d);
	$("#animar_btn").on("click", animarSolido);

	$("#1_btn").on("click", func1);
	$("#2_btn").on("click", func2);
	$("#3_btn").on("click", func3);
	$("#4_btn").on("click", func4);
	$("#5_btn").on("click", func5);
	$("#6_btn").on("click", func6);
	$("#7_btn").on("click", func7);
	$("#8_btn").on("click", func8);

});
