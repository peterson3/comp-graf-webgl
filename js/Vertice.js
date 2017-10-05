class Vertice {
  constructor (x, y, z){
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = 1;
	this.i = VERTICE_COUNTER;
	VERTICE_COUNTER ++;
	console.log("Vertice Adicionado = V" + this.i + "("+this.x+","+this.y+","+this.z+")");
  }

  /**
  * Retorna Novo Vertice com as coordenadas homogêneas 2d
  */
  getVerticeAsCoordenadasHomogeneas2D(){
    let homo_vert = new Vertice(this.x/this.z, this.y/this.z, 1);
    return homo_vert;
  }

  /**
  * Retorna Vertice com estrutura de dados em Matriz
  */
  getVerticeAsMatrix (){
		let matriz = [];
		matriz.push([this.x]);
		matriz.push([this.y]);
		matriz.push([this.z]);
		matriz.push([this.w]);
	  //matriz.push([1]);
		return matriz;
	}
	
	
	homogen(){
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	}
	

  /**
  * Atribui Vertice a partir de uma estrutura de dados em Matriz
  */
  setVerticeAsMatrix(m){
    this.x = m[0][0];
    this.y = m[1][0];
    this.z = m[2][0];
	this.w = m[3][0];
  }

  /**
  * Transforma vértice e desenhar ponto da tela correspondente
  */
  desenhar() {
    console.log ("V"+this.i+ "=("+this.x + "," + this.y + "," + this.z+ ")");
	//this.x /= this.z;
	//this.y /= this.z;
	//this.z = 1;
    console.log ("V'"+this.i+ "=("+this.x + "," + this.y + "," + this.z + ")");
	Ponto.desenhar(this.x, this.y);
  }

  /**
  * Transforma vértice a partir de uma Matriz de transformação
  */
  transformar(MATRIZ){
	  //V' = M(t) x V
	 this.setVerticeAsMatrix(Utils.multiplicaMatriz(MATRIZ, this.getVerticeAsMatrix()));
	 this.x = Math.round(this.x);
	 this.y = Math.round(this.y);
	 this.z = Math.round(this.z);
  }

  /**
  * Define um método e transformar as coordenadas 3d do ponto em coordenadas 2d para serem desenhadas
  */
  transformar3Dpara2D(){

  }

 /**
  * Desenha ponto correspondente ao vértice com número sequencial na tela
  */
  desenhar_com_numero(i){
	console.log ("V"+this.i+ "=("+this.x + "," + this.y + "," + this.z+ ")");
	//this.x /= this.z;
	//this.y /= this.z;
	//this.z = 1;
    //console.log ("V'"+this.i+ "=("+this.x + "," + this.y + "," + this.z + ")");
	let p = new Ponto(this.x, this.y);
	p.desenhar_com_texto(i);
  }

  /**
  * Verifica se os dois vértices inseridos são iguais
  */
  static saoIguais (vertice1, vertice2){
	  if ((vertice1.x == vertice2.x) && (vertice1.y == vertice2.y))
	  {
		  return true;
	  }
	  else{
		  return false;
	  }
  }

  /**
  * Verifica se este objeto é igual ao vértice
  */
  eIgual (vertice){
	  if ((this.x == vertice.x) && (this.y == vertice.y)){
		  return true;
	  }
	  else{
		  return false;
	  }
  }


  copiar(){
	  let v_copiado = new Vertice(this.x, this.y, this.z);
	  v_copiado.i = this.i;
	  VERTICE_COUNTER--;

  }
}
