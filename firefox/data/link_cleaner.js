console.log("I'm in...");

var links = document.querySelectorAll('a');
for (var i=0; i < links.length; i++) {
	console.log("link: " + links[i]);
	//links[i].onmousedown = undefined;
}
