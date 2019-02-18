
//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById("edad").value;

if(edad > 13 && edad <=17)

{
alert("Es adolecente");
}
else
{
    alert("Es mayor");
}

}//FIN DE LA FUNCIÓN

