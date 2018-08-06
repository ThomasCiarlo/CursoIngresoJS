function mostrar()
{
	var sexo;
	var nota;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var cantidadDeVarones=0;
	var acumulador=0;
	var contador=0;
	var promedio;

	

	

	while(contador!=5){	

		sexo=prompt("ingrese el sexo");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("ingrese el sexo");
		}


		nota=prompt("ingrese la nota");
		nota=parseInt(nota);
		while(isNaN(nota)|| nota<0||nota>10)
		{
			nota=prompt("ingrese la nota");
			nota=parseInt(nota);
		}	

				acumulador=acumulador+nota;

			if (contador==0) 
			{
				notaMasBaja=nota;
				sexoNotaMasBaja=sexo;

			}	

			else if (notaMasBaja>nota) {
		
				notaMasBaja=nota;
				sexoNotaMasBaja=sexo;

			}

			if (nota>6 && sexo=="m")
		 	{
		 		cantidadDeVarones++;
			}
		 		contador++;
	}
		promedio=acumulador/contador;

		 	alert("la nota mas baja es:"+notaMasBaja+"el sexo es:"+sexoNotaMasBaja);
		 	alert("la cantidad de varones con nota mas 6 es:"+cantidadDeVarones);
			alert("el promedio final es: "+promedio);
		 		
}

