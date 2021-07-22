const h1= document.querySelector(".hello:first-child h1");


function handleTitleClick(){
	h1.style.color = "blue";
}

function handMouseEnter(){
	h1.innerText = "Mouse is here";
}

function handMouseLeave(){
	h1.innerText = "Mouse is gone";
}

function handleWindowResize(){
	document.body.style.backgroundColor = "tomato";
}
function handWindowCopy(){
	alert("copier");	
}

function handWindowOffine(){
	alert("sos no wifi");
}
function handWindowOnline(){
	alert("wifi is on");
}
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handMouseEnter);
h1.addEventListener("mouseleave",handMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handWindowCopy);
window.addEventListener("offline", handWindowOffine);
window.addEventListener("online", handWindowOnline);