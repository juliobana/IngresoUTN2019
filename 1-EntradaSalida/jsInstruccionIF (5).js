//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if(edad <=13 || edad >=18)

{

    alert("La persona NO es adolecente");

}

/*
var edad;

edad = parseInt(document.getElementById("edad").value);

// Esta fuera del rango?

if (!(edad <13 || edad >17))

alert("Es adolecente")
*/

}//FIN DE LA FUNCIÓN