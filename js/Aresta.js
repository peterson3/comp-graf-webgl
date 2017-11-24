class Aresta {
  constructor (vertice1, vertice2){
    this.vertice1 = vertice1;
    this.vertice2 = vertice2;
	this.i = ARESTA_COUNTER;
	ARESTA_COUNTER++;
	console.log("Aresta Adicionada = E" + this.i + "(V"+this.vertice1.i+",V"+this.vertice2.i +")");

  }
  
	getVerticeCentro(){
		let verticeCentro = new Vertice((vertice1.x + vertice2.x)/2, (vertice1.y + vertice2.y)/2, (vertice1.z + vertice2.z)/2 );
		return verticeCentro;
	}

	desenhar(){
    context.beginPath();
    context.moveTo(this.vertice1.x*ZOOM, this.vertice1.y*ZOOM);
    context.lineTo(this.vertice2.x*ZOOM, this.vertice2.y*ZOOM);
    context.stroke();
  }

	desenhar_com_numero(){
    context.beginPath();
    context.moveTo(this.vertice1.x, this.vertice1.y);
    context.lineTo(this.vertice2.x, this.vertice2.y);
    context.stroke();
	context.fillStyle = "green";
	//context.fillText(this.i, (this.vertice1.x + this.vertice2.x)/2, (this.vertice1.y+this.vertice2.y)/2);
  }

	//Retorna o Vertice Intersecao entre duas arestas
	static getVerticeIntersecao (aresta1, aresta2){
		if (aresta1.vertice1.eIgual(aresta2.vertice1)){
			return aresta1.vertice1;
		}
		else{
			if (aresta1.vertice1.eIgual(aresta2.vertice2)){
				return aresta1.vertice1;
			}
			else{
				if (aresta1.vertice2.eIgual(aresta2.vertice1)){
					return aresta1.vertice2;
				}
				else{
					if (aresta1.vertice2.eIgual(aresta2.vertice2)){
						return aresta1.vertice2;
					}
					else{
						return null;
					}
				}
			}
		}
	}
}
