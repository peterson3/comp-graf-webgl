class Face {
	//A ordem importa (a ser definido na hora do construcao)
	constructor (vec){
		this.arestas = vec;
		this.i = FACE_COUNTER;
		FACE_COUNTER++;
		//this.color = Utils.getRandomColor();
	}
	
	desenhar(color){
		//iniciar "caminho"
		context.beginPath();
		// console.clear();
		//recuperar quantidade de arestas na face 
		let qtdArestas = this.arestas.length;
		
		if (this.arestas == null){
			console.log ("vetor arestas nulo");
		}
		if (qtdArestas < 3){
			console.log("não pode desenhar uma face com menos de 3 arestas");
		}
		
		//iterar sobre o vetor
		for (let i=0; i<qtdArestas; i++){
			let StartArestaIndex;
			let EndArestaIndex;

			if (i==(qtdArestas-1)){
				//Ultima Iteracao
				StartArestaIndex = i;
				EndArestaIndex = 0;
				//console.log("ligando aresta " + i + " e " + "0");
			}
			else{
				StartArestaIndex = i;
				EndArestaIndex = i+1;
				//console.log("ligando aresta " + i + " e " + (i+1));
			}
			//console.log ("Face conectando arestas "+ StartArestaIndex + " e " + EndArestaIndex)
		    this.ligarAresta(this.arestas[StartArestaIndex], this.arestas[EndArestaIndex]);
		}


		//this.ligarAresta(this.arestas[1], this.arestas[2]);

		//
		context.closePath();
		
		// the outline
		context.lineWidth = 0;
		//context.strokeStyle = "red";
		context.stroke();
		
		//randomColor
		// the fill color
		context.fillStyle = color;
		//context.fillStyle = this.color;
		context.fill();
	}

	static async animar(vecFaces, colors, time){
		for (let i=0; i<vecFaces.length; i++){
			await Utils.sleep(time);
			vecFaces[i].desenhar(colors[i]);
		}
	}
	
	ligarAresta(aresta1, aresta2){
		//identificar o ponto de interseção (x,y) entre aresta1 e aresta2
		var intersec = Aresta.getVerticeIntersecao(aresta1, aresta2);
		//definir o ponto inicial da aresta 1: é o ponto que não intercede com aresta2
		let p1;
		let p2;
		let p3;

		if (aresta1.vertice1.eIgual(intersec)){
			//nao é esse o ponto
			p1 = aresta1.vertice2;
			p2 = aresta1.vertice1;
		}
		else{
			p1 = aresta1.vertice1;
			p2 = aresta1.vertice2;
		}

		//Start Point

		//Percorre a Primeira Aresta
		
		
		//definir o ponto final da aresta 2: é o ponto que não interce com aresta 1
		if (aresta2.vertice1.eIgual(intersec)){
			p3 = aresta2.vertice2;
		}
		else{
			p3 = aresta2.vertice1;
		}

		let distancia = 30;


		context.lineTo(p1.x, p1.y);
		context.lineTo(p2.x, p2.y);
		context.lineTo(p3.x, p3.y);
	}	
	
	getCentroide(){
		let qtdArestas = this.arestas.length;
		let x = 0;
		let y =0;
		let z= 0;
		for (let i=0; i<qtdArestas; i++){
			let verticeCentro = this.arestas[i].getVerticeCentro();
			x+= verticeCentro.x;
			y+= verticeCentro.y;
			z+= verticeCentro.z;
		}
	
		x /= i;
		y /= i;
		z /= i;
		
		return new Vertice(x,y,z);
	}

	getVetorNormal(){
		//Verificar a quantidade de Arestas 
		//Se arestas é igual a 4 (como desejado)
		let qtdArestas = this.arestas.length;
		let vetores = [];
		for (let i=0; i<qtdArestas; i++){
			let vetorNovo = Vetor.newVectorByVertexes(this.arestas[i].vertice1, this.arestas[i].vertice2);
			vetores.push(vetorNovo);
			//console.log("Vetor Novo["+i+"]: " + vetorNovo.x + "," + vetorNovo.y + "," + vetorNovo.z);
		}

		//QuaisQuer dois vetores da face
		let xNovo = (vetores[0].y * vetores[1].z) - (vetores[1].y * vetores[0].z);   
		let yNovo = (vetores[0].z * vetores[1].x) - (vetores[1].z * vetores[0].x);
		let zNovo = (vetores[0].x * vetores[1].y) - (vetores[1].x * vetores[0].y);
		return new Vetor(xNovo,yNovo,zNovo);
	}
}
