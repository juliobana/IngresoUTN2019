function Mostrar()
{
//tomo la edad  


var edad;

edad = parseInt(document.getElementById("edad").value);

// Esta fuera del rango?

if (!(edad <13 || edad >17))

alert("Es adolecente")

/*


//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
var edad;

edad = parseInt(document.getElementById("edad").value);

// Esta fuera del rango?

if (edad <13 || edad >17)

alert("No es adolecente")
*/
}//FIN DE LA FUNCIÓN