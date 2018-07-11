function mostrar()
{
	var ValorDelProducto;
	var descuentoPorsentaje;
	var iva;
	var resultado;
	var final;
	var valorFinal;
	

		ValorDelProducto=prompt("ingerese el valor");
		descuentoPorsentaje=prompt("ingerese el posentaje del descuento");
		

		resultado=(ValorDelProducto*descuentoPorsentaje);
		final=(ValorDelProducto-resultado);



			alert("El descuento en dinero: "+resultado+" El precio con el descuento: "+final+" su iva es: 21%");


				

				Iva=(final*0.21);
				valorFinal=(Iva+final);
			
				
	
			document.getElementById('elPrecioFinal').value=valorFinal;







}
