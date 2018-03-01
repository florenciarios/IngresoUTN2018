/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparas= parseFloat(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var descuento;
    var precio = 35*lamparas;
    var precioDesc;
    var precioFinal;

    switch(lamparas)
    {
        case 5:
            if(marca == "ArgentinaLuz")
            {
                descuento=40/100*precio;
            }
            else
            {
                descuento=30/100*precio;
            }
            break;

        case 4:
            if(marca == "ArgentinaLuz" || "FelipeLamparas")
            {
                descuento=25/100*precio;
            }
            else
            {
                descuento=20/100*precio;
            }
            break;

        case 3:
            if(marca == "ArgentinaLuz")
            {
                descuento=15/100*precio;
            }
            else if(marca == "FelipeLamparas")
            {
                descuento=10/100*precio;
            }
            else
            {
                descuento=5/100*precio;
            }
            break;

        case 2:
        case 1:
            descuento = 0;
            break;

        default:
            descuento=50/100*precio;

            break;

    }

    precioDesc = precio-descuento;

    if(precioDesc >= 120)
    {
        precioFinal=precioDesc+21/100*precioDesc;
    }
    else
    {
        precioFinal=precioDesc;
    }

    document.getElementById("precioDescuento").value=precioFinal;
    
}
