class Solido{
	constructor (){
		this.vertices = [];
		this.arestas = [];
		this.faces = [];
	}

	gerarMeuSolido_Estranho(){
		//Gerando Vertices
		this.vertices.push(new Vertice(0, 0, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(100, 100, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(0, 100, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(100, 0, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(50, 80, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(50, 20, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(10, 30, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(10, 70, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(25, 90, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(75, 90, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(90, 70, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(90, 30, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(40, 60, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(60, 60, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(40, 35, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(60, 35, Utils.getRandomInt(0, 31)));
		this.vertices.push(new Vertice(50, 50, Utils.getRandomInt(0, 31)));

		//Definindo Arestas
		this.arestas.push(new Aresta(this.vertices[0], this.vertices[2]));
		this.arestas.push(new Aresta(this.vertices[0], this.vertices[3]));
		this.arestas.push(new Aresta(this.vertices[1], this.vertices[3]));
		this.arestas.push(new Aresta(this.vertices[1], this.vertices[2]));
		this.arestas.push(new Aresta(this.vertices[0], this.vertices[6]));
		this.arestas.push(new Aresta(this.vertices[6], this.vertices[7]));
		this.arestas.push(new Aresta(this.vertices[7], this.vertices[8]));
		this.arestas.push(new Aresta(this.vertices[8], this.vertices[9]));
		this.arestas.push(new Aresta(this.vertices[9], this.vertices[10]));
		this.arestas.push(new Aresta(this.vertices[10],this.vertices[11]));
		this.arestas.push(new Aresta(this.vertices[11],this.vertices[3]));
		this.arestas.push(new Aresta(this.vertices[2], this.vertices[7]));
		this.arestas.push(new Aresta(this.vertices[2], this.vertices[8]));
		this.arestas.push(new Aresta(this.vertices[8], this.vertices[4]));
		this.arestas.push(new Aresta(this.vertices[9], this.vertices[4]));
		this.arestas.push(new Aresta(this.vertices[4], this.vertices[13]));
		this.arestas.push(new Aresta(this.vertices[13],this.vertices[10]));
		this.arestas.push(new Aresta(this.vertices[4], this.vertices[12]));
		this.arestas.push(new Aresta(this.vertices[7], this.vertices[12]));
		this.arestas.push(new Aresta(this.vertices[12],this.vertices[13]));
		this.arestas.push(new Aresta(this.vertices[12],this.vertices[16]));
		this.arestas.push(new Aresta(this.vertices[13],this.vertices[16]));
		this.arestas.push(new Aresta(this.vertices[6], this.vertices[12]));
		this.arestas.push(new Aresta(this.vertices[13],this.vertices[11]));
		this.arestas.push(new Aresta(this.vertices[16],this.vertices[14]));
		this.arestas.push(new Aresta(this.vertices[16],this.vertices[15]));
		this.arestas.push(new Aresta(this.vertices[14],this.vertices[15]));
		this.arestas.push(new Aresta(this.vertices[5], this.vertices[14]));
		this.arestas.push(new Aresta(this.vertices[5], this.vertices[15]));
		this.arestas.push(new Aresta(this.vertices[0], this.vertices[5]));
		this.arestas.push(new Aresta(this.vertices[3], this.vertices[5]));
		this.arestas.push(new Aresta(this.vertices[14],this.vertices[6]));
		this.arestas.push(new Aresta(this.vertices[11],this.vertices[15]));
		this.arestas.push(new Aresta(this.vertices[1],  this.vertices[9]));
		this.arestas.push(new Aresta(this.vertices[10], this.vertices[1]));


		//Definindo Faces
		this.faces.push (new Face(new Array(this.arestas[20],this.arestas[21],this.arestas[19])));
		this.faces.push (new Face(new Array(this.arestas[4], this.arestas[29],this.arestas[27], this.arestas[31])));
		this.faces.push (new Face(new Array(this.arestas[0], this.arestas[11],this.arestas[5], this.arestas[4])));
		this.faces.push (new Face(new Array(this.arestas[11],this.arestas[12],this.arestas[6])));
		this.faces.push (new Face(new Array(this.arestas[12],this.arestas[3], this.arestas[33], this.arestas[7])));
		this.faces.push (new Face(new Array(this.arestas[8], this.arestas[33],this.arestas[34])));
		this.faces.push (new Face(new Array(this.arestas[13],this.arestas[7], this.arestas[14])));
		this.faces.push (new Face(new Array(this.arestas[27],this.arestas[26],this.arestas[28])));
		this.faces.push (new Face(new Array(this.arestas[1], this.arestas[30],this.arestas[29])));
		this.faces.push (new Face(new Array(this.arestas[28],this.arestas[30],this.arestas[10], this.arestas[32])));
		this.faces.push (new Face(new Array(this.arestas[10],this.arestas[2], this.arestas[34], this.arestas[9])));
		this.faces.push (new Face(new Array(this.arestas[5], this.arestas[18],this.arestas[22])));
		this.faces.push (new Face(new Array(this.arestas[6], this.arestas[13],this.arestas[17], this.arestas[18])));
		this.faces.push (new Face(new Array(this.arestas[22],this.arestas[20],this.arestas[24], this.arestas[31])));
		this.faces.push (new Face(new Array(this.arestas[24],this.arestas[25],this.arestas[26])));
		this.faces.push (new Face(new Array(this.arestas[17],this.arestas[15],this.arestas[19])));
		this.faces.push (new Face(new Array(this.arestas[25],this.arestas[32],this.arestas[23], this.arestas[21])));
		this.faces.push (new Face(new Array(this.arestas[23],this.arestas[9], this.arestas[16])));
		this.faces.push (new Face(new Array(this.arestas[15],this.arestas[14],this.arestas[8], this.arestas[16])));
	}

	gerarMeuSolido_batmerang(){
	
		//Declaração dos 17 vértices
			this.vertices.push(new Vertice(8, 0, 0));
			this.vertices.push(new Vertice(9, 3, 0));
			this.vertices.push(new Vertice(11, 2.5, 0));
			this.vertices.push(new Vertice(18, 6, 0));
			this.vertices.push(new Vertice(11, 6, 0));
			this.vertices.push(new Vertice(10, 5, 0));
			this.vertices.push(new Vertice(9, 5, 0));
			this.vertices.push(new Vertice(9, 6.9, 0));
			this.vertices.push(new Vertice(8.4, 6, 0));
			this.vertices.push(new Vertice(7.6, 6, 0));
			this.vertices.push(new Vertice(7, 6.9, 0));
			this.vertices.push(new Vertice(7, 5, 0));
			this.vertices.push(new Vertice(6, 5, 0));
			this.vertices.push(new Vertice(5, 6, 0));
			this.vertices.push(new Vertice(-2, 6, 0));
			this.vertices.push(new Vertice(5, 2.5, 0));
			this.vertices.push(new Vertice(7, 3, 0));

		//Multiplicando as coordenadas do Sólido por -10 para virar de cbeca pra baixo e aumentar
			for (let i=0; i<this.vertices.length; i++){
				this.vertices[i].x *= -10
				this.vertices[i].y *= -10
			}

		//Definindo Arestas
			for (let i=0; i<this.vertices.length; i++){
				if (i+1 == this.vertices.length){
					this.arestas.push(new Aresta(this.vertices[i], this.vertices[0]));		
				}
				else{
					this.arestas.push(new Aresta(this.vertices[i], this.vertices[i+1]));		
				}
			}

 		console.log("Sólido Definido");
	}



	sweep(){


		//Adicionando Vértices Atrás
			let verticesAtras  = [];
			for (let i=0; i<this.vertices.length; i++){
				verticesAtras.push(new Vertice(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z+40));
			}
				
		//Arestas Vértices de Trás
			let arestasVerticesDeTras = [];
			for (let i=0; i<verticesAtras.length; i++){
				if (i+1 == verticesAtras.length){
					arestasVerticesDeTras.push(new Aresta(verticesAtras[i], verticesAtras[0]));		
				}
				else{
					arestasVerticesDeTras.push(new Aresta(verticesAtras[i], verticesAtras[i+1]));		
				}
			}	
		
		//Arestas que ligam vértices de trás aos vértices da frente
			let arestas3d = [];
			for (let i=0; i<this.vertices.length; i++){
				arestas3d.push(new Aresta(this.vertices[i], verticesAtras[i]));
			}
		
		//Definiando as Faces
			this.faces.push(new Face(arestasVerticesDeTras));
			 for (let i=0; i<this.arestas.length; i++){
			 	if (i+1 == this.arestas.length){
			 		this.faces.push (new Face([this.arestas[i],arestas3d[0], arestasVerticesDeTras[i], arestas3d[i]]));
			 	}
			 	else{
			 		this.faces.push (new Face([this.arestas[i],arestas3d[i+1], arestasVerticesDeTras[i], arestas3d[i]]));
			 	}
			 }
			 this.faces.push(new Face(this.arestas));

		//Juntando as Partes
			this.vertices = this.vertices.concat(verticesAtras);
			this.arestas = this.arestas.concat(arestasVerticesDeTras);
			this.arestas = this.arestas.concat(arestas3d);
	}

	projetar(modoProjecao){
		if (modoProjecao == "Perspectiva"){
		//Projeção Perspectiva
			let distancia = 30;
			for (let i=0; i<this.vertices.length; i++){
	  		 //Definir um vértice temporario
	 		 if (this.vertices[i].z != 0){
	 			 this.vertices[i].x = (distancia / this.vertices[i].z ) * this.vertices[i].x;
	 			 this.vertices[i].y = (distancia / this.vertices[i].z ) * this.vertices[i].y;	
	 		 }
	 		}	
		}
		
	}

	desenharVertices (){

		for (let i=0; i<this.vertices.length; i++){
		 //Definir um vértice temporario
		 let vTemp = new Vertice(this.vertices[i].x, this.vertices[i].y, this.vertices[i].z);
		 //Fazer as operacoes com o vertice
		 vTemp.desenhar();
		}
	}

	desenharArestas (){

		for (let i=0; i<this.arestas.length; i++)
		{
			 //Definir um vértice temporario
			  this.arestas[i].desenhar();
		}	
	}

	desenharFaces(){
		for (let i=0; i<this.faces.length; i++){
			this.faces[i].desenhar();
		}
	}

	gerarMeuSolido_Cubo(){
		this.vertices.push(new Vertice(50, 50, 50));
		this.vertices.push(new Vertice(100, 50, 50));
		this.vertices.push(new Vertice(50, 100, 50));
		this.vertices.push(new Vertice(100, 100, 50));

		this.vertices.push(new Vertice(50, 50, 100));
		this.vertices.push(new Vertice(100, 50, 100));
		this.vertices.push(new Vertice(50, 100, 100));
		this.vertices.push(new Vertice(100, 100, 100));

		this.arestas.push(new Aresta(this.vertices[0], this.vertices[1]));
		this.arestas.push(new Aresta(this.vertices[0], this.vertices[2]));
		this.arestas.push(new Aresta(this.vertices[1], this.vertices[3]));
		this.arestas.push(new Aresta(this.vertices[2], this.vertices[3]));

		this.arestas.push(new Aresta(this.vertices[4], this.vertices[5]));
		this.arestas.push(new Aresta(this.vertices[4], this.vertices[6]));
		this.arestas.push(new Aresta(this.vertices[5], this.vertices[7]));
		this.arestas.push(new Aresta(this.vertices[6], this.vertices[7]));

		this.arestas.push(new Aresta(this.vertices[0], this.vertices[4]));
		this.arestas.push(new Aresta(this.vertices[1], this.vertices[5]));
		this.arestas.push(new Aresta(this.vertices[2], this.vertices[6]));
		this.arestas.push(new Aresta(this.vertices[3], this.vertices[7]));

		//Faces
		this.faces.push (new Face(new Array(this.arestas[4],this.arestas[5],this.arestas[7], this.arestas[6])));
		this.faces.push (new Face(new Array(this.arestas[6],this.arestas[9],this.arestas[2], this.arestas[11])));
		this.faces.push (new Face(new Array(this.arestas[10],this.arestas[7],this.arestas[11], this.arestas[3])));
		this.faces.push (new Face(new Array(this.arestas[2],this.arestas[11],this.arestas[6], this.arestas[9])));
		//Face lateral esq
		this.faces.push (new Face(new Array(this.arestas[5],this.arestas[8],this.arestas[1], this.arestas[10])));
		//Face de cima
		this.faces.push (new Face(new Array(this.arestas[8],this.arestas[0],this.arestas[9], this.arestas[4])));
		//Face da Frente
		this.faces.push (new Face(new Array(this.arestas[0],this.arestas[1],this.arestas[3], this.arestas[2])));
	}
		
	verificarEuler(){
		if ( 2 == (this.faces.length - this.arestas.length + this.vertices.length) )
		{
			return true;
		}
		else{
			return false;
		}
	}

	imprimirTabelaGeral (){
		//Imprimindo Tabela de Vértices
		let verticeTable= "<table class='table table-sm table-striped table-inverse table-hover' id='verticeTable' border=1 width=30% style='float: left;'>";

		for (let i=0; i<this.vertices.length; i++){
			// vertices[i].desenhar();
			//vertices[i].desenhar_com_numero(i);
			verticeTable += "<tr>";
			verticeTable += "<td>";
			verticeTable += "v" + i + "= (" + this.vertices[i].x + "," + this.vertices[i].y + "," + this.vertices[i].z + ")";
			verticeTable += "</td>";
			verticeTable += "</tr>";
		}
		verticeTable += "</table>";

		//Imprimindo Tabela de Arestas
		let arestaTable= "<table id='arestaTable' border=1 width=30% style='float: left;'>";
		for (let i=0; i<this.arestas.length; i++){
		//this.arestas[i].desenhar();
		//  arestas[i].desenhar_com_numero(i);
			arestaTable += "<tr>";
			arestaTable += "<td>";
			arestaTable += "e" + i + "= " + "v"+ this.arestas[i].vertice1.i + ", " + "v" + this.arestas[i].vertice2.i;
			arestaTable += "</td>";
			arestaTable += "</tr>";
		}
		arestaTable += "</table>";

		//Imprimindo Tabela de Faces
		let faceTable= "<table id='faceTable' border=1 width=30% style='float: left;'>";
		for (let j=0; j<this.faces.length; j++){
			//arestas[i].desenhar();
			//faces[j].desenhar();
			faceTable += "<tr>";
			faceTable += "<td>";
			faceTable += "f" + j + "= ";
			for (let i=0; i< this.faces[j].arestas.length; i++){
				faceTable += "e"+ this.faces[j].arestas[i].i + ", ";
			}
			faceTable += "e"+ this.faces[j].arestas[0].i;
			faceTable += "</td>";
			faceTable += "</tr>";
		}

		faceTable += "</table>";

		return verticeTable + arestaTable + faceTable;
	}

	desenhar(){

		this.desenharVertices();
		this.desenharArestas();
		this.desenharFaces();
	}

	async animar(){
		for (let i=0; i<this.faces.length; i++){
			await Utils.sleep(1000);
			this.faces[i].desenhar();
		}
	}

	transformar(matriz_transf){
		for (let i=0; i< this.vertices.length; i++){
			this.vertices[i].transformar(matriz_transf);
		}		
	}
	
	getVerticeCentro(){
		let xSum = this.vertices[0].x;
		let ySum = this.vertices[0].y;
		let zSum = this.vertices[0].z;
		let qtd_vertices = this.vertices.length;
		
		for (let i=1; i<qtd_vertices; i++){
			xSum += this.vertices[i].x;
			ySum += this.vertices[i].y;
			zSum += this.vertices[i].z;
		}
		
		
		return new Vertice(xSum/qtd_vertices, ySum/qtd_vertices, zSum/qtd_vertices);
	}

	getListaDeNormais(){
		let normais = [];

		for (let i=0; i<this.faces.length; i++){
			normais.push(this.faces[i].getVetorNormal());
		}
		return normais;
	}

	desenharCurvilineo(){
	

	var accuracy = 0.1;
	context.moveTo(this.vertices[0].x, this.vertices[0].y);

		 
		// for (let j=0; j<this.vertices.length; j=j+4){
      for (let i=0; i<1; i+=accuracy){
         var p = Curva.bezier(i, this.vertices[0], this.vertices[1], this.vertices[2], this.vertices[3]);
         context.lineTo(p.x, p.y);
      }


// } 
       for (let i=0; i<1; i+=accuracy){
         var p = Curva.bezier(i, this.vertices[4], this.vertices[5], this.vertices[6], this.vertices[7]);
         context.lineTo(p.x, p.y);
      }

      
      	context.moveTo(this.vertices[0].x, this.vertices[0].y);


          for (let i=0; i<1; i+=accuracy){
         var p = Curva.bezier(i, this.vertices[0], this.vertices[16], this.vertices[15], this.vertices[14]);
         context.lineTo(p.x, p.y);
      }

             for (let i=0; i<1; i+=accuracy){
         var p = Curva.bezier(i, this.vertices[13], this.vertices[12], this.vertices[11], this.vertices[10]);
         context.lineTo(p.x, p.y);
      }


             for (let i=0; i<1; i+=accuracy){
         var p = Curva.bezier(i, this.vertices[9], this.vertices[8], this.vertices[8], this.vertices[7]);
         context.lineTo(p.x, p.y);
      }


            context.stroke();
		}
	
}
