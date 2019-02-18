function Mostrar()
{
	/*Genero el número RANDOM entre 1 y 10 
	Al presionar el Botón, asignar una nota
	RANDOM al examen y mostar: "EXCELENTE"
	para notas igual a 9 o 10, "APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4*/
	
	var numero=  Math.floor(Math.random() * 10 + 1);

	alert(numero);

	if (numero >=9)
	{
		alert("EXCELENTE");
	}
		else if (numero <4)
	 	{
			alert("Vamos, la proxima se puede");
		} 
			else
			{
				alert("APROBÓ");
			}

	

}//FIN DE LA FUNCIÓN