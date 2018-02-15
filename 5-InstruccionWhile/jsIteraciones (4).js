function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	
	while((!(numero >= 0 && numero <=9)) || isNan(numero))
	{
		numero = prompt("Incorrecto");
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN