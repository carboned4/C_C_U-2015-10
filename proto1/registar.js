function concluirreg(){
	var el = document.getElementById("sucessocontanova").style.display="block";
	
}

function checkinput(){
	var el = document.getElementById("tipoconta");
	if(el.value=="aluno") document.getElementById("infoprof").style.display="none";
	else document.getElementById("infoprof").style.display="block";
	return;
}