//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var lado = parseFloat(document.getElementById("lado").value);
    var perimetro;

    perimetro=lado*3;

    alert("El perímetro del triángulo es " + perimetro);
	
}

