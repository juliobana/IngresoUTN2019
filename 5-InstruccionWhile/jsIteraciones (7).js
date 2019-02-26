function Mostrar() {
	/*Al presionar el botón pedir números hasta que el usuario quiera
	 e informar la suma acumulada y el promedio.*/

	var acumulador = 0;
	var respuesta;
	var numero;
	var contador=0;

	do {
		numero = parseInt(prompt("Ingrese un numero "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Esto no es un numero"));
		}
		acumulador = acumulador + numero;
		respuesta = prompt("¿Desea continuar?").toLocaleLowerCase();
		contador++;
		//Aca se puede usar el confirm con el while(respuesta)
		//respuesta = confirm("¿Desea continuar?");
	} while (respuesta == "s");

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN