function Mostrar()
{

	var numero;
	var seguir;
	var acumuladorPos=0;
	var acumuladorNeg=0;
	var contadorPos=0;
	var contadorNeg=0;
	contadorCeros=0;
	var diferencia;
	var promedioNeg=0;
	var promedioPos=0;
	

	//declarar contadores y variables 
	
	var respuesta="si";

	do {
		numero = parseInt(prompt("Ingrese un numero "));
		while (isNaN(numero))
			{
				
				
				numero = parseInt(prompt("Esto no es un numero"));
			}

		
	
	
	
		respuesta = confirm("¿Desea continuar?");
	  } while (respuesta == "s");

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;




}//FIN DE LA FUNCIÓN