class Solido{
	constructor (){
		this.vertices = [];
		this.arestas = [];
		this.faces = [];
	}
	
	gerarMeuSolido(){
	
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
		var verticeTable= "<table id='verticeTable' border=1 width=30% style='float: left;'>";
			
		for (let i=0; i<vertices.length; i++){
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
		
		//Imprimindo Tabela de Arestas
		var arestaTable= "<table id='arestaTable' border=1 width=30% style='float: left;'>";
		for (let i=0; i<arestas.length; i++){
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
		
		//Imprimindo Tabela de Faces
		var faceTable= "<table id='faceTable' border=1 width=30% style='float: left;'>";
		for (let j=0; j<faces.length; j++){
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

	}
	
	desenhar(){	
		//Desenhando 3D
		//Definindo vértices projetados em profundidade no Z (simulado)
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
		
		
	}
	
}