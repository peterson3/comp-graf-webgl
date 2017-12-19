class Curva{
	constructor (pontoInicial, pontoFinal, pontosControle){
		this.pontoInicial = pontoInicial;
		this.pontoFinal = pontoFinal;
		this.pontosControle = pontosControle;
	}


static bezier(t, p0, p1, p2, p3){
  var cX = 3 * (p1.x - p0.x),
      bX = 3 * (p2.x - p1.x) - cX,
      aX = p3.x - p0.x - cX - bX;

  // context.fillRect(p0.x,p0.y,4,4);

  // context.fillRect(p1.x,p1.y,4,4);

  // context.fillRect(p2.x,p2.y,4,4);

  // context.fillRect(p3.x,p3.y,4,4);

  var cY = 3 * (p1.y - p0.y),
      bY = 3 * (p2.y - p1.y) - cY,
      aY = p3.y - p0.y - cY - bY;

  var x = (aX * Math.pow(t, 3)) + (bX * Math.pow(t, 2)) + (cX * t) + p0.x;
  var y = (aY * Math.pow(t, 3)) + (bY * Math.pow(t, 2)) + (cY * t) + p0.y;

  return {x: x, y: y};
}

}
