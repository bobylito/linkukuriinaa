window.setInterval(function() {
  disableOnMouseDown();
}, 100);

function disableOnMouseDown() {
  console.log('disableOnMouseDown');
  document.querySelectorAll('#rcnt a');
  for (var i=0; i < links.length; i++) {
    links[i].onmousedown = undefined;
  }
}
