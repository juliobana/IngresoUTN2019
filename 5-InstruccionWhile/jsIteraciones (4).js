function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
//Aca valido los numeros y si es cualquier cosa que no sea numero
	while(numero <0 || numero >10 || isNaN(numero))
	// de la otra forma
	//while(!(numero >= 0 && numero<= 10))
{
numero = parseInt(prompt("Incorrecto, ingrese un número entre 0 y 10."));

}

alert("Numero correcto!!");
}//FIN DE LA FUNCIÓN