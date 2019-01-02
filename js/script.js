var doCoolStuff = function(){

	var prevClassName = document.getElementById("cool").className;
	if(prevClassName == 'cool red'){
		document.getElementById("cool").className = 'cool';
	}
	else document.getElementById("cool").className = 'cool red';
}