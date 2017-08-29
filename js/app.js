var gl; // Uma variável global para o contexto WebGL

function start() {
  var canvas = document.getElementById("glcanvas");

  // Inicializando o contexto GL
  gl = initWebGL(canvas);
  
  // Só continua se o WebGL estiver disponível e funcionando
  
  if (gl) {
    // Muda a cor para preto, completamente opaco
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Permite teste de profundidade
    gl.enable(gl.DEPTH_TEST);
    // Objetos próximos irão obscurecer objetos mais distantes
    gl.depthFunc(gl.LEQUAL);
    // Limpa a cor e o buffer de profundidade
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
}

function initWebGL(canvas) {
  gl = null;
  
  try {
    // Tentar obter o contexto padrão. Se falhar, tenta obter o experimental.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}
  
  // Se não obtivermos o contexto GL, desistir agora
  if (!gl) {
    alert("Incapaz de inicializar WebGL. Seu browser pode não suportá-lo.");
    gl = null;
  }
  
  return gl;
}