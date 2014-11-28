document.querySelector('body').onmousedown = function(e) {
  e.preventDefault();
  e.stopPropagation();
  console.log('on click');
}

// var links = document.querySelectorAll('#rcnt a');
// for (var i=0; i < links.length; i++) {
//   console.log("link: " + links[i]);
//   links[i].onmousedown = undefined;
// }
