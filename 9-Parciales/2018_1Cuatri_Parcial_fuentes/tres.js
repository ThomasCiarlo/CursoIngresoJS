function mostrar()
{		
	var precio;
	var descuento;
	var precioFinal;
	var Final;

		precio=prompt("ingrese el precio");
		descuento=prompt("ingrese el descuento");

			precioFinal=precio*descuento/100;
			Final=precio-precioFinal;

			document.getElementById('elPrecioFinal').value=Final;

}
