function aEncriptar (){
  var textoArea = document.getElementById("area").value;
  if(textoArea.trim() != ''){
     var resultado1='';
     var texto=codificar(textoArea);
     document.getElementById("resultado1").innerHTML = texto;
     limpiarText();
   }
 }
 
 var aencriptar = document.querySelector(".bencriptar");
 aencriptar.onclick = aEncriptar;
 

 /*CODIFICAR*/
 function Cod(x) {
    switch(x) {
    case 'e': return 'enter';
    case 'i': return 'imes';
    case 'a': return 'ai';
    case 'o': return 'ober';
    case 'u': return 'ufat';
    default : return x;
    }
  }
  
  function codificar(s) {
    var r = '';
    for (const c of s) {
        r += Cod(c);
    }
    return r;
  }