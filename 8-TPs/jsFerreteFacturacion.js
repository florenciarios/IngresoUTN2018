/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var suma;

    suma = precio1+precio2+precio3;

    alert("La suma de los precios es " + suma);
}
function Promedio () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var prom;

    prom = precio1+precio2+precio3/3

    alert("El promedio de los precios es " + prom);
}
function PrecioFinal () 
{
	var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var precio = precio1+precio2+precio3;
    var iva = 21/100 * precio;
    var precioFinal;

    precioFinal = precio + iva;

    alert("El precio final es " + precioFinal);
}