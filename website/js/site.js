function checkLength10(elem){
	if (elem.value.length > 10){
		elem.value = elem.value.substring(0,10);
	}
}

function localStorage() {
		alert("hi");
		let checkBox = document.getElementById("storage").checked;
    if(checkBox) {
			localStorage.setItem("user", document.getElementById("username").value);
			alert("ischecked");
			return true;
		}
		return false;
}
