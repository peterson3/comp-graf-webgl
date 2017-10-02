class Face {
	//A ordem importa (a ser definido na hora do construcao)
	constructor (vec){
		this.arestas = vec;
		this.i = FACE_COUNTER;
		FACE_COUNTER++;
	}
	
	//O desenho vai de 0 a n-1
	desenhar(){
		//iniciar "caminho"
		
//	    context.beginPath();
//		context.rect(20, 20, 150, 100);

//		context.moveTo(0, 0);
//		context.lineTo(110,70);
//		context.lineTo(0, 0);
//		context.fillStyle="blue";
//		context.fill();

// the triangle
//context.beginPath();
//context.moveTo(100, 100);
//context.lineTo(100, 300);
//context.lineTo(300, 300);
//context.closePath();
 
// the outline
//context.lineWidth = 5;
//context.strokeStyle = '#666666';
//context.stroke();
 
// the fill color
//context.fillStyle = "#FFCC00";
//context.fill();


		//Começar caminho
		context.beginPath();
		
		//recuperar quantidade de arestas na face 
		let qtdArestas = this.arestas.length;
		
		if (this.arestas == null){
			console.log ("vetor arestas nulo");
		}
		if (qtdArestas > 3){
			console.log("não pode desenhar uma face com menos de 3 arestas");
		}
		
		//iterar sobre o vetor
		for (let i=0; i<qtdArestas; i++){
			if (i==(qtdArestas-1)){
				//Ultima Iteracao
				this.ligarAresta(this.arestas[i], this.arestas[0]);
			}
			else{
				this.ligarAresta(this.arestas[i], this.arestas[i+1]);
			}
		}
		
		//
		context.closePath();
		
		// the outline
		context.lineWidth = 1;
		//context.strokeStyle = "red";
		context.stroke();
		
		//randomColor
		// the fill color
		//context.fillStyle = "red";
		context.fillStyle = Utils.getRandomColor();
		context.fill();

	}
	
	ligarAresta(aresta1, aresta2){
		//identificar o ponto de interseção (x,y) entre aresta1 e aresta2
		var intersec = Aresta.getVerticeIntersecao(aresta1, aresta2);
		//definir o ponto inicial da aresta 1: é o ponto que não intercede com aresta2
		var p_inicial;
		if (aresta1.vertice1.eIgual(intersec)){
			//nao é esse o ponto
			p_inicial = aresta1.vertice2;
		}
		else{
			p_inicial = aresta1.vertice1;
		}
		
		context.lineTo(p_inicial.x, p_inicial.y);
		
		//definir o ponto final da aresta 2: é o ponto que não interce com aresta 1
		var p_final;
		if (aresta2.vertice1.eIgual(intersec)){
			p_final = aresta2.vertice2;
		}
		else{
			p_final = aresta2.vertice1;
		}
		
		context.lineTo(p_final.x, p_final.y);
	}
	
}