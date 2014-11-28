/* jshint asi:true */

// Taken from http://stackoverflow.com/a/4854189

function injectJs(link) {
  var scr = document.createElement("script")
  scr.type = "text/javascript"
  scr.src = link
  ;(document.head || document.body || document.documentElement).appendChild(scr)
}

injectJs(chrome.extension.getURL("rikukuriinaa.js"))
