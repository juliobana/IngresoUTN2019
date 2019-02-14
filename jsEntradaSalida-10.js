/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    
    var importe;
    var Descuento =25,

    importe = parseInt(document.getElementById("importe").value);

    descuentoDelImporte = importe * Descuento / 100;

    Resultado = importe - descuentoDelImporte;

    document.getElementById("resultado").value = Resultado;


}
