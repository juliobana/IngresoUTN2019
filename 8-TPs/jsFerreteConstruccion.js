/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var CantidadAlambrado;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    CantidadAlambrado = [(largo + ancho) * 2] * 3;

    alert("La cantidad de metros de alambre es " + CantidadAlambrado);
}
function Circulo () 
{
    var radio;
    var perimetro;

    radio = parseInt(document.getElementById("Radio").value);
   
    perimetro = [(radio * 3.14) * 3]

    alert("La cantidad de metros de alambre es " + perimetro);



}
function Materiales () 
{
	var largo;
    var ancho;
    var area;
    var cemento = 2;
    var cal = 3;
    var materiales1;
    var materiales2;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    area = largo * ancho;
    materiales1= cemento * area;
    materiales2= cal * area;

    alert("La cantidad de bolsas de cemento es " + materiales1);
    alert("La cantidad de bolas de cal es " + materiales2);
}