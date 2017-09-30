class Vertice {
  constructor (x, y, z){
    //this.x = x*3+25;
    //this.y= y*3+25;
	this.x = x;
	this.y = y;
	this.z = z;
	this.i = VERTICE_COUNTER;
	//console.log(VERTICE_COUNTER);
	VERTICE_COUNTER ++;
  }

  /**
  *Retorna Novo Vertice com as coordenadas homogêneas
  */
  getVerticeAsCoordenadasHomogeneas(){
    let homo_vert = new Vertice(this.x/this.z, this.y/this.z, 1);
    return homo_vert;
  }

	getVerticeAsMatrix (){
		let matriz = [];
		matriz.push([this.x]);
		matriz.push([this.y]);
		matriz.push([this.z]);
    matriz.push([1]);
	  //matriz.push([1]);
		return matriz;
	}

  static desenharVertice2d(v){
      let radius = 3;
      context.beginPath();
      context.arc(v.x, v.y, radius, 0, 2 * Math.PI, false);
      context.fillStyle = "orange";
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = '#003300';
      context.stroke();
  }

  setVerticeAsMatrix(m){
    this.x = m[0][0];
    this.y = m[1][0];
    this.z = m[2][0];
  }

	desenhar() {
    console.log ("("+this.x + "," + this.y + "," + this.z+ ")");
    let radius = 3;
    context.beginPath();
    context.arc(this.x, this.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 1;
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

  static saoIguais (vertice1, vertice2){
	  if ((vertice1.x == vertice2.x) && (vertice1.y == vertice2.y))
	  {
		  return true;
	  }
	  else{
		  return false;
	  }
  }

  eIgual (vertice){
	  if ((this.x == vertice.x) && (this.y == vertice.y)){
		  return true;
	  }
	  else{
		  return false;
	  }
  }
}
