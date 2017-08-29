var gl; // Uma vari�vel global para o contexto WebGL

function start() {
  var canvas = document.getElementById("glcanvas");

  // Inicializando o contexto GL
  gl = initWebGL(canvas);
  
  // S� continua se o WebGL estiver dispon�vel e funcionando
  
  if (gl) {
    // Muda a cor para preto, completamente opaco
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Permite teste de profundidade
    gl.enable(gl.DEPTH_TEST);
    // Objetos pr�ximos ir�o obscurecer objetos mais distantes
    gl.depthFunc(gl.LEQUAL);
    // Limpa a cor e o buffer de profundidade
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
}

function initWebGL(canvas) {
  gl = null;
  
  try {
    // Tentar obter o contexto padr�o. Se falhar, tenta obter o experimental.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
  
  // Se n�o obtivermos o contexto GL, desistir agora
  if (!gl) {
    alert("Incapaz de inicializar WebGL. Seu browser pode n�o suport�-lo.");
    gl = null;
  }
  
  return gl;
}