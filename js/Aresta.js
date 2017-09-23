class Aresta {
  constructor (vertice1, vertice2){
    this.vertice1 = vertice1;
    this.vertice2 = vertice2;
  }

  desenhar(){
    context.beginPath();
    context.moveTo(this.vertice1.x, this.vertice1.y);
    context.lineTo(this.vertice2.x, this.vertice2.y);
    context.stroke();
  }
  
}
