function checkLength10(elem){
	if (elem.value.length > 10){
		elem.value = elem.value.substring(0,10);
	}
}

function localStorage() {
		let checkBox = document.getElementById("storage").checked;
    if(checkBox) {
			let item = document.getElementById("username").value;
			window.localStorage.setItem('username', "uh"");
			return true;
		}
		return true;
}
