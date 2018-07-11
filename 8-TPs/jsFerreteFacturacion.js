/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var Sumar;


		precioUno=document.getElementById('PrecioUno').value;
		precioDos=document.getElementById('precioDos').value;
		precioTres=document.getElementById('precioTres').value;
				
				precioUno=parseInt(precioUno);
				precioDos=parseInt(precioDos);
				precioTres=parseInt(precioTres);


			Sumar=(precioUno+precioDos+precioTres);
			alert("la suma es: "Sumar);

}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}