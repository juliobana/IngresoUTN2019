/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numero1;
    var numero2;
    var numero3;
    var suma;
    
    numero1 = parseInt(document.getElementById("PrecioUno").value);
    numero2 = parseInt(document.getElementById("PrecioDos").value);
    numero3 = parseInt(document.getElementById("PrecioTres").value);

    suma = numero1 + numero2 + numero3;

    alert("$" + suma);

}
function Promedio () 
{
	numero1 = parseInt(document.getElementById("PrecioUno").value);
    numero2 = parseInt(document.getElementById("PrecioDos").value);
    numero3 = parseInt(document.getElementById("PrecioTres").value);

    Promedio = (numero1 + numero2 + numero3) / 3;

    alert("$" + Promedio);
}
function PrecioFinal () 
{

    var numero1;
    var numero2;
    var numero3;
    var suma;
    var Iva;
    var precioFinal;
    numero1 = parseInt(document.getElementById("PrecioUno").value);
    numero2 = parseInt(document.getElementById("PrecioDos").value);
    numero3 = parseInt(document.getElementById("PrecioTres").value);

    suma = numero1 + numero2 + numero3;

    Iva = (21 * suma) / 100;
    precioFinal = Iva + suma
   alert("El precio con IVA es : $" + precioFinal);


}