

var suma=0;

do{
	var numero = prompt("Please enter characters","Here!!!");
}

while(numero != "fin"){
	

	if(isNaN(numero)){
	 	console.log("incorrect characters, try it again");

	}

	else{
		numero=parseInt(numero);
		suma=suma+numero;
	}
}

console.log(suma);