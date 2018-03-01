//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mesDelAno = prompt("Ingrese un mes del año");
    
    switch(mesDelAno)
    {
        case "enero":
        case "febrero":
            alert("¡Veranito!");
            break;
        default:
            alert("¡Extraño enero y febrero!");
            break;
    }
}

