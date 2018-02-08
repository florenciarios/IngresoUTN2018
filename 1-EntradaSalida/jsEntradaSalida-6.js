/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar() 
{
    //declara datos
    var num1;
    var num2;
    var suma;

    //toma datos de html, pasa caracteres a números y realiza la suma
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);

    suma = num1 + num2;

    //muestra el resultado
    alert("La suma es " + suma);

}

