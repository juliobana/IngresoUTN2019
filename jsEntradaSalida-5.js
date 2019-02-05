/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	

    var nombre;

    var edad;

    //nombre = prompt("ingrese su nombre");

	nombre = document.getElementById("elNombre").value;

    //edad = prompt("ingrese su edad");

	edad = document.getElementById("laEdad").value;

    alert(" Usted se llama " + nombre + " Y tiene " + edad + "años");
    
}

