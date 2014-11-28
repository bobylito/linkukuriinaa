window.setInterval(function() {
  disableOnMouseDown();
}, 100);

function disableOnMouseDown() {
  var links = document.querySelectorAll('a');
  for (var i=0; i < links.length; i++) {
    links[i].onmousedown = undefined;
  }
}
