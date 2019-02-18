/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var centigrados;
    var fahrenheit;

    fahrenheit = parseFloat(document.getElementById("Temperatura").value);

    centigrados =  [(fahrenheit -32) * 5] /9;
	alert( fahrenheit + " grados Fahrenheit son " + centigrados + " centígrados");
    
}

function CentigradosFahrenheit () 
{

fahrenheit = parseFloat(document.getElementById("Temperatura").value);

centigrados =  [((centrigrados * 9) / 5) +32];
alert( fahrenheit + " grados Centigrados son " + centigrados + " Fahrenheint");

}