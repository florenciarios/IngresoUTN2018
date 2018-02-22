function Mostrar()
{

	var contadorPos=0;
	var contadorNeg=0;
	var numero;
	var cero=0;
	var respuesta;
	var negativo=0;
	var positivo=0;
	var diferencia;
	var pares=0;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		if(numero >= 1)
			{
				positivo = positivo + numero;
				contadorPos++;
			}

		else if( numero <= -1)
			{
				negativo = negativo + numero;
				contadorNeg++;
				
			}
		else
			{
				cero++;
			}

		if(numero %2 == 0)
		{
			pares++;
		}

		respuesta = prompt("¿Desea ingresar otro numero?");

	}while(respuesta == "si")

	diferencia = positivo - (negativo);
	document.write("1. Suma de los negativos: " + negativo + "</br>");
	document.write("2. Suma de los positivos: " + positivo + "</br>");
	document.write("3. Cantidad de positivos: " + contadorPos + "</br>");
	document.write("4. Cantidad de negativos: " + contadorNeg + "</br>");
	document.write("5. Cantidad de ceros: " + cero + "</br>");
	document.write("6. Cantidad de números pares: " + pares + "</br>");
	document.write("7. Promedio de positivos: " + positivo/contadorPos + "</br>");
	document.write("8. Promedio de negativos: " + negativo/contadorNeg + "</br>");
	document.write("9. Diferencia entre positivos y negativos: " + diferencia);



}//FIN DE LA FUNCIÓN