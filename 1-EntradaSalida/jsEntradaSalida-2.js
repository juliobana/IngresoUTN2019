/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo.*/

function Mostrar()
var seguir;
var numero;
var contadorPares = 0;
var acumulador = 0;
var maximo;
var minimo;
var promedio;
var flag=0;
contador=0;
var contadorImpares=0;

{
	do{
numero = parseInt(prompt("Ingrese un numero"));

while(numero < 0 || isNaN(numero)){
numero = parseInt(prompt("Error Ingrese un numero"));
}

if(numero % 2 ==1){

    contadorImpares++;
}else{
    contadorPares++;
}

acumulador = acumulador + numero;

if(numero < minimo || flag==0)
	{
		minimo = numero;
		flag = 1;
	}

if(numero < maximo || flag==0)
	{
		maximo = numero;
		flag = 1;
	}

seguir = confirm("Quiere continuar?");
    }while(seguir);
promedio = acumulador / contador;

document.write(" a) la cantidad de numeros pares :" + contadorPares + "<br>");
document.write(" ab) la cantidad de numeros pares :" + contadorImpares + "<br>");
document.write(" b) El promedio de los numeros ingresados es :" + promedio + "<br>");
document.write(" c) la suma de los numeros es :" + acumulador + "<br>");
document.write(" d) numero maximo es :" + maximo + "<br>");
document.write(" c) numero minimo es :" + minimo + "<br>");
}

