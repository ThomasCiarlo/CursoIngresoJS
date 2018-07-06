function mostrar()
{
	var descuentoDinero;
	var descuento;
	var iva;
	var resultado;
	var final;

		descuentoDinero=prompt("ingerese el dinero");
		descuento=prompt("ingerese el dinero");
		iva=prompt("ingerese el iva");

				

			resultado=(descuento*iva/100);
			final=(resultado+descuento);
		
	
			document.getElementById('elPrecioFinal').value=final;







}
