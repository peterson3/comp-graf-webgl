class Aresta {
  constructor (vertice1, vertice2){
    this.vertice1 = vertice1;
    this.vertice2 = vertice2;
	this.i = ARESTA_COUNTER;
	ARESTA_COUNTER++;
  }
  
  /*constructor (verts, i, j){
    this.vertice1 = verts[i];
    this.vertice2 = verts[j];
	this.i = i;
	this.j = j;
  }*/

  desenhar(){
    context.beginPath();
    context.moveTo(this.vertice1.x, this.vertice1.y);
    context.lineTo(this.vertice2.x, this.vertice2.y);
    context.stroke();
  }
   
  desenhar_com_numero(i){
    context.beginPath();
    context.moveTo(this.vertice1.x, this.vertice1.y);
    context.lineTo(this.vertice2.x, this.vertice2.y);
    context.stroke();
	context.fillStyle = "black";
	context.fillText(i, (this.vertice1.x + this.vertice2.x)/2, (this.vertice1.y+this.vertice2.y)/2);
  }

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