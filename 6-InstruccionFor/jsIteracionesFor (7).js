function Mostrar()
{

var numero;
var contador = 0;

		numero = parseInt(prompt("Ingrese un numero "));
		while (isNaN(numero))
			{	
				numero = parseInt(prompt("Esto no es un numero"));
			}

            for(var i=1; i <= numero ;i++ )

            {
                    if(i ){
                        contador++;
                        console.log(i);
                    }

            }

		alert("numeros pares encontrados " + contador);


}//FIN DE LA FUNCIÓN