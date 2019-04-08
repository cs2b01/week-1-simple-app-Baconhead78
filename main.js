window.onload=init;
function init(){
	var butt = document.getElementById("butt");
	butt.onclick = buttclick;
}

function buttclick(){
	var user=document.getElementById("user").value;
	var pass=document.getElementById("pass").value;
	if(user==pass){
		alert("correct!");
	}else{	
		alert("oh snap! Invalid password or username");
	}
}

