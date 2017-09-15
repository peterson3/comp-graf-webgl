function start() {

var canvas = document.getElementById("glcanvas");
context = canvas.getContext("2d");
context.fillStyle="#FF0000";


var vertices = [];
vertices.push(new Vertice(0, 0));
vertices.push(new Vertice(100, 100));
vertices.push(new Vertice(0, 100));
vertices.push(new Vertice(100, 0));
vertices.push(new Vertice(50, 80));
vertices.push(new Vertice(50, 20));
vertices.push(new Vertice(10, 30));
vertices.push(new Vertice(10, 70));
vertices.push(new Vertice(25, 90));
vertices.push(new Vertice(75, 90));
vertices.push(new Vertice(90, 70));
vertices.push(new Vertice(90, 30));
vertices.push(new Vertice(40, 60));
vertices.push(new Vertice(60, 60));
vertices.push(new Vertice(40, 35));
vertices.push(new Vertice(60, 35));
vertices.push(new Vertice(50, 50));


for (i=0; i<vertices.length; i++){
  vertices[i].desenhar();
}

var arestas =[];
arestas.push(new Aresta(vertices[0], vertices[2]));
arestas.push(new Aresta(vertices[0], vertices[3]));
arestas.push(new Aresta(vertices[1], vertices[3]));
arestas.push(new Aresta(vertices[1], vertices[2]));
arestas.push(new Aresta(vertices[0], vertices[6]));
arestas.push(new Aresta(vertices[6], vertices[7]));
arestas.push(new Aresta(vertices[7], vertices[8]));
arestas.push(new Aresta(vertices[8], vertices[9]));
arestas.push(new Aresta(vertices[9], vertices[10]));
arestas.push(new Aresta(vertices[10], vertices[11]));
arestas.push(new Aresta(vertices[11], vertices[3]));
arestas.push(new Aresta(vertices[2], vertices[7]));
arestas.push(new Aresta(vertices[2], vertices[8]));
arestas.push(new Aresta(vertices[8], vertices[4]));


for (i=0; i<arestas.length; i++){
  arestas[i].desenhar();
}

/*
  conectaPonto(ponto5, ponto10);
  conectaPonto(ponto2, ponto11);
  conectaPonto(ponto2, ponto10);
  conectaPonto(ponto11, ponto14);
  conectaPonto(ponto5,ponto14);
  conectaPonto(ponto5, ponto13);
  conectaPonto(ponto13,ponto8);
  conectaPonto(ponto17,ponto14);
  conectaPonto(ponto17,ponto13);
  conectaPonto(ponto7,ponto13);
  conectaPonto(ponto12,ponto14);
  conectaPonto(ponto17,ponto15);
  conectaPonto(ponto17,ponto16);
  conectaPonto(ponto16,ponto12);
  conectaPonto(ponto15,ponto7);
  conectaPonto(ponto6,ponto15);
  conectaPonto(ponto6,ponto16);
  conectaPonto(ponto6,ponto1);
  conectaPonto(ponto6,ponto4);
  conectaPonto(ponto15,ponto16);
  */
}
