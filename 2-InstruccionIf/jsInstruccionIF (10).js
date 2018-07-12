function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var RANDOM;

	document.getElementById("FormIngreso").value;
	
	RANDOM=Math.floor(Math.random() * 11);

	if (RANDOM<=10&&RANDOM>=9) {
		alert("Exelente te sacaste: "+RANDOM);

	}

	else{
		if (RANDOM<9&&RANDOM>=4) {
			alert("APROBÓ TE SACASTE : "+RANDOM);

		}

		else{
			alert("Vamos, la proxima se puede, te sacaste : "+RANDOM);			
		}
	}

}//FIN DE LA FUNCIÓN