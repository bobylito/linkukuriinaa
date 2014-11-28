/* jshint asi:true */

console.log("リンククリーナー ready!")

window.LinkuKuriinaa = (function (){
  var LinkuKuriinaa = {}

  LinkuKuriinaa.cleanLink = function (link) {
    link.removeAttribute("onmousedown")
    link.onmousedown = undefined
  }

  LinkuKuriinaa.cleanAllLinks = function (base) {
    var links = document.querySelectorAll(base)
    for (var i=0; i < links.length; i++) {
      LinkuKuriinaa.cleanLink(links[i])
    }
  }

  return LinkuKuriinaa
}())

window.LinkuKuriinaa.cleanAllLinks('#res a')
