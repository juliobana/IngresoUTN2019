function Mostrar()
{

 /*al presionar el botón pedir un número. Mostar los numeros pares desde el 1 al número ingresado,
    y mostar la cantidad de numeros pares encontrados. */

var numero;
var contador = 0;

		numero = parseInt(prompt("Ingrese un numero "));
		while (isNaN(numero))
			{	
				numero = parseInt(prompt("Esto no es un numero"));
			}

            for(var i=1; i <= numero ;i++ )

            {
                    if(i % 2 ==0){
                        contador++;
                        console.log(i);
                    }

            }

		alert("numeros pares encontrados " + contador);


}//FIN DE LA FUNCIÓN