function functionOne(){
	document.getElementById('one').innerHTML="GET THE TEST YOU WANT";
	setTimeout(functionTwo,300);
	setTimeout(functionThree,800);	
}
function functionTwo(){
	document.getElementById('two').innerHTML="IN 2 MINUTES";

}
function functionThree() {
	document.getElementById('three').innerHTML="ON YOUR PHONE";
}
