function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key);
    letras = " abcdefghijklmnñopqrstuvwxyz";
    if (letras.indexOf(tecla) == -1){
		return false;
	}
}

function encriptar(){
	document.getElementById("output-texto").innerHTML = ''
	valor = document.getElementById("input-texto").value;
	respuesta = '';
	for(var i=0;i<valor.length;i++){
		if(valor.charAt(i)==='e'){
			respuesta = respuesta+'enter';
		} else if(valor.charAt(i)==='i'){
			respuesta = respuesta+'imes';
		} else if(valor.charAt(i)==='a'){
			respuesta = respuesta+'ai';
		} else if(valor.charAt(i)==='o'){
			respuesta = respuesta+'ober';
		} else if(valor.charAt(i)==='u'){
			respuesta = respuesta+'ufat';
		} else {
			respuesta = respuesta+valor.charAt(i);
		}
	}
	document.getElementById("output-texto").innerHTML = respuesta;
	document.getElementById("input-texto").value = '';
}

function copiar(){
	var textoCopiar = document.getElementById('output-texto');
    textoCopiar.select();
    document.execCommand('copy');
}

function desencriptar(){
	document.getElementById("output-texto").innerHTML = ''
	valor = document.getElementById("input-texto").value;
	respuesta = '';
	for(var i=0;i<valor.length;i++){
		if((valor.charAt(i)+valor.charAt(i+1)+valor.charAt(i+2)+valor.charAt(i+3)+valor.charAt(i+4))==='enter'){
			respuesta = respuesta+'e';
			i=i+4;
		} else if((valor.charAt(i)+valor.charAt(i+1)+valor.charAt(i+2)+valor.charAt(i+3))==='imes'){
			respuesta = respuesta+'i';
			i=i+3;
		} else if((valor.charAt(i)+valor.charAt(i+1))==='ai'){
			respuesta = respuesta+'a';
			i=i+1;
		} else if((valor.charAt(i)+valor.charAt(i+1)+valor.charAt(i+2)+valor.charAt(i+3))==='ober'){
			respuesta = respuesta+'o';
			i=i+3;
		} else if((valor.charAt(i)+valor.charAt(i+1)+valor.charAt(i+2)+valor.charAt(i+3))==='ufat'){
			respuesta = respuesta+'u';
			i=i+3;
		} else {
			respuesta = respuesta+valor.charAt(i);
		}
	}
	document.getElementById("output-texto").innerHTML = respuesta;
	document.getElementById("input-texto").value = '';
}

var botonEncriptar = document.getElementById("btn-encriptar");
botonEncriptar.onclick = encriptar;

var botonCopiar = document.getElementById("btn-copy");
botonCopiar.onclick = copiar;

var botonDesencriptar = document.getElementById("btn-desencriptar");
botonDesencriptar.onclick = desencriptar;