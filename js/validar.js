function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c == 32); // [a-z ]
  }
  
  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
  }
    
  function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)) {
      elem.classList.add('invalido');
        if((validarEntrada(txt))==false){
          alert("Texto Incorrecto");
          document.getElementById("area").value = "";
          }
    } else {
      elem.classList.remove('invalido');
    }
  }


function copiarTexto(){
    window.onload = function (){
    };
    var textoCopy= document.getElementById("resultado1");
    textoCopy.select();
    document.execCommand('copy');
}

function limpiarText (){
  var txt='';
  document.getElementById("area").value = "";
  validarEntrada(txt);
} 


