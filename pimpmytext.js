function resizeText(){
	document.getElementById('area').style.fontSize='24px';
}

function makeBold(){
	if (document.getElementById('bling').checked) {
		document.getElementById('area').style.fontStyle='italic';
		document.getElementById('area').style.textDecoration='underline';
		document.getElementById('area').style.color='green';
		//document.getElementById('area').style.textDecoration='blink';
		document.getElementById('area').style.fontFamily='Times New Roman';

	}
	else{
		document.getElementById('area').style.fontStyle='normal';
		document.getElementById('area').style.textDecoration='none';
		document.getElementById('area').style.color='black';
		document.getElementById('area').style.fontFamily='Arial';
	}
}

function addPrefix(){
}
