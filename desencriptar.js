 //document.getElementById("resultado1").value = "";

 function aDesencriptar (){
    var textoArea = document.getElementById("area").value;
    if(textoArea.trim() != ''){
      
      var texto = decodificar(textoArea);
      
      document.getElementById("resultado1").innerHTML = texto;
      limpiarText();
    }
  }

  var desencriptar = document.querySelector(".desencriptar");
  desencriptar.onclick = aDesencriptar;


/*DE-CODIFICAR*/
  function decodificar(s) {
    var r = '';
    for (var j = 0; j < s.length;j++) {
      switch(s[j]) {
      case 'e': 
        if (s[j + 4] === 'r') { r += 'e'; j += 4; }
        else { return false; }
        break;
      case 'i': 
        if (s[j + 3] === 's') { r += 'i'; j += 3; }
        else { return false; }
        break;
      case 'a': 
        if (s[j + 1] === 'i') { r += 'a'; j += 1; }
        else { return false; }
        break;
      case 'o': 
        if (s[j + 3] === 'r') { r += 'o'; j += 3; }
        else { return false; }
        break;
      case 'u': 
        if (s[j + 3] === 't') { r += 'u'; j += 3; }
        else { return false; }
        break;
      default:
        r += s[j];
      }
    }
    return r;
  }