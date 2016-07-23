var llamadas=0;
var contador=1;

class telefono{

	constructor(numero,marca,color){
		this.numero = numero;
		this.marca = marca;
		this.color = color;
	}

	get llamadas_totales(){
		return this.marcar();
	}

	marcar(numero){
		if(numero){
			llamadas += contador;
			return this.llamadas;
		}
	}

	}

var tel1 = new telefono("5584596758","samsung","negro");
console.log(tel1.llamadas_totales);
