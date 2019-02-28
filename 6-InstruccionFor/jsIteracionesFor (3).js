function Mostrar()
{
/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

 */
var repeticiones = parseInt(prompt("Ingrese el numero de repeticiones"))

while (isNaN(repeticiones)){

    repeticiones = parseInt(prompt("Esto no es un numero. Ingrese un numero"))
}
// Otra forma : for (var i= repeticiones; i>0 ; i--)
for(var i=0 ; i<repeticiones; i++){
    console.log("Hola UTNFRA");
}


}//FIN DE LA FUNCIÓN