//Some stupid stuff
console.log("test");

var links = document.querySelectorAll('#rcnt a');
for (var i=0; i < links.length; i++) {
  links[i].onmousedown = undefined;
}
