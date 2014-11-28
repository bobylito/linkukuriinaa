disableOnMouseDown();

document.querySelector('#gbqfq').addEventListener('input', function() {
  setTimeout(disableOnMouseDown, 1000);
});

function disableOnMouseDown() {
  console.log('removeOnMouseDown');
  var links = document.querySelectorAll('#rcnt a');
  for (var i=0; i < links.length; i++) {
    links[i].onmousedown = undefined;
  }
}
