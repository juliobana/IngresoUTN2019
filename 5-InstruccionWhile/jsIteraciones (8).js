function Mostrar()
{
/*
Al presionar el botón pedir números hasta que el usuario quiera,
 sumar los que son positivos y multiplicar los negativos.
*/	var positivo=0;
	var negativo=1;
	var acumulador = 0;
	var respuesta;
	var numero;
	flag= true;

	do {
		numero = parseInt(prompt("Ingrese un numero "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Esto no es un numero"));
		}

		if (numero>=0)

		{
			positivo=positivo + numero;
			//positivo+=numero;
		}
		else{
			flag = false;
			negativo *=numero;
		}
		acumulador = acumulador + numero;
		respuesta = confirm("¿Desea continuar?");
		
	
	} while (respuesta);

document.getElementById('suma').value=positivo;
if(flag){
	negativo=0;
}


document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN