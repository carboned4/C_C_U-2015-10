var activeTab="home";
var defaultTitle="C:I:A < GTA 5 / MTASA >"

function getElement(id){
	return document.getElementById(id);
}

function changeTitle( tab ){
	var title=defaultTitle;
	var pre="";
	if (tab != "home"){
		pre=getElement(tab).innerHTML;
		pre=pre+" - ";
	}
	getElement("title").innerHTML=pre + title;
}

function changeTab( id ){
	getElement( activeTab ).className="menupage";
	getElement( activeTab + "_tab").className="tab";
	activeTab=id;
	getElement( activeTab ).className="menupage_current";
	getElement( id+"_tab" ).className="tab_current";
	changeTitle(id);
}