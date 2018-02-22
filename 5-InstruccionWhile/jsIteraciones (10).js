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
		respuesta = prompt("¿Desea ingresar otro numero?");

	}while(respuesta == "si")

	diferencia = positivo - -(negativo);
	document.write("1. Suma de los negativos " + negativo);
	document.write("// 2. Suma de los positivos " + positivo);
	document.write("// 3. Cantidad de positivos " + contadorPos);
	document.write("// 4. Cantidad de negativos " + contadorNeg);
	document.write("// 5. Cantidad de ceros " + cero);
	document.write("// 7. Promedio de positivos" + positivo/contadorPos);
	document.write("// 8. Promedio de negativos" + negativo/contadorNeg);
	document.write("// 9. Diferencia entre positivos y negativos " + diferencia);



}//FIN DE LA FUNCIÓN