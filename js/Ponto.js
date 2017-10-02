class Ponto {
  constructor (x, y){
		this.x = x;
		this.y = y;
  }
  
  /**
  * Desenhar o ponto instanciado na tela
  */
  desenhar(){
	let radius = 1;
	context.beginPath();
    context.arc(this.x*ZOOM,this.y*ZOOM, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke(); 
  }
  
  /**
  * Desenhar o ponto X,Y na tela
  */
  static desenhar(x,y){
	  let pt = new Ponto(x,y);
	  pt.desenhar();

  }
  
  desenhar_com_texto(texto){
	let radius = 5;
    context.beginPath();
    context.arc(this.x*ZOOM, this.y*ZOOM, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();
    context.fillStyle = "black";
	context.fillText(texto, (this.x*ZOOM)+10, (this.y*ZOOM)+10);
  }
}