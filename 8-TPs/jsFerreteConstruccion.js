/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var per = largo*2+ancho*2;
    var alambre;

    alambre = per*3;

    alert("Los metros de alambre requeridos son " + alambre);

}
function Circulo () 
{
	
    var radio = parseFloat(document.getElementById("Radio").value);
    var per = 2*radio*Math.PI;
    var alambre;

    alambre = per*3;

    alert("Los metros de alambre requeridos son " + alambre.toFixed(2));

}
function Materiales () 
{
	var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var superf = ancho*largo;
    var bolsaCem;
    var bolsaCal;
    
    bolsaCem = superf*2;
    bolsaCal = superf*3;

    alert("Se necesitan " + bolsaCem + "bolsas de cemento y " + bolsaCal + "bolsas de cal")
}