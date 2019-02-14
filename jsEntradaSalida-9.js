/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

    var sueldo;
    var sueldoAumento;
    var aumento =10;

    sueldo = parseInt(document.getElementById("sueldo").value);

    aumento = aumento * sueldo / 100;

    sueldoAumento = aumento + sueldo;

    document.getElementById("resultado").value = sueldoAumento;
}
