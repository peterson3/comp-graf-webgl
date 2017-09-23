class Vertice {

  constructor (x, y){
    this.x = x*3+25;
    this.y= y*3+25;
  }

 desenhar() {
    let radius = 5;
    context.beginPath();
    context.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();
  }
  
  
  desenhar_com_numero(i){
	let radius = 5;
    context.beginPath();
    context.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();
    context.fillStyle = "black";
	context.fillText(i, this.x+10, this.y+10);
  }
}
