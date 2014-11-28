var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var buttons = require('sdk/ui/button/action');

var isActivated = true;
var button = getButton("Desactivate Linkukuriinaa");
var pageMod = getPageMod(isActivated);

function getButton(label) {
  return buttons.ActionButton({
    id: "linkukuriinaa-link",
    label: label,
    icon: {
      "16": "./icon-16.png",
      "32": "./icon-32.png",
      "64": "./icon-64.png"
    },
    onClick: toggleButton
  });
}

function toggleButton(state) {
  var label;
  if(isActivated) {
    isActivated = false;
    label = "Activate Linkukuriinaa";
  } else {
    isActivated = true;
    label = "Desactivate Linkukuriinaa";
  }
  button.state("window", {
    "label" : label
  });
  pageMod.destroy();
  pageMod = getPageMod(isActivated);
}

function getPageMod(isActivated) {
  return pageMod.PageMod({
    include: /.*google.*/,
    contentScriptFile: getScriptFile(isActivated)
  });
}

function getScriptFile(isActivated) {
  if(isActivated) {
    return [data.url("link_cleaner.js")];
  } else {
    return [];
  }
}
