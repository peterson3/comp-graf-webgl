class Vetor {
  constructor (x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
	//console.log("Novo Vetor Definido = Vec " + "("+this.x+","+this.y+","+this.z+")");
  }


  static ProdutoVetorial(v1, v2){
  	let verticeResult;

  	let x =(v1[1]*v2[2])-(v2[1]*v1[2]);
  	let y = -((v1[0]*v2[2])-( v2[0]*v1[2]));
  	let z = (v1[0]*v2[1])-( v2[0]*v1[1]);

  	verticeResult = new Vertice(x, y, z);
  	return verticeResult;
  }

  static newVectorByVertexes(ver1, ver2){

  	let verticeResult = new Vertice(	ver2.x-ver1.x,
  									  	ver2.y-ver1.y,
  							  			ver2.z-ver1.z);
	   return verticeResult;
  }

  static ProdutoEscalar(v1, v2){

      return (v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
  }

  static ProdutoInterno (v1,v2){
    let numerador = Vetor.ProdutoEscalar(v1,v2);
    let denominador = v1.getModulo()*v2.getModulo();
    return numerador/denominador;

  }

  static AnguloEntre(v1,v2){
      let numerador = Vetor.ProdutoEscalar(v1,v2);
      let denominador = (v1.getModulo()*v2.getModulo());
      let tetha = numerador/denominador;
      return tetha;
  }

  getModulo(){
      let modulo = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2) +Math.pow(this.z,2));
      return modulo;
  } 

  getNormalizado(){
      let modulo = this.getModulo();
      return new Vetor (this.x/modulo, this.y/modulo, this.z/modulo); 
  }

}