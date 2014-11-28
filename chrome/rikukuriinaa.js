/* jshint asi:true */

console.log("リンククリーナー ready!")

window.RinkuKuriinaa = (function rinkuMain(){
  var RinkuKuriinaa = {}

  RinkuKuriinaa.cleanLink = function (link) {
    link.removeAttribute("onmousedown")
    link.onmousedown = undefined
  }

  RinkuKuriinaa.cleanAllLinks = function (base) {
    var links = document.querySelectorAll(base)
    for (var i=0; i < links.length; i++) {
      RinkuKuriinaa.cleanLink(links[i])
    }
  }

  return RinkuKuriinaa
})()

RinkuKuriinaa.cleanAllLinks('#res a')
