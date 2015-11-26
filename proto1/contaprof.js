function checkinput(){
	var el = document.getElementById("vercursos");
	if(el.value=="criar") window.location = "criarcurso.html";
	else if (el.value=="ql") window.location = "lecciono.html";
	el.value = "vc";
}