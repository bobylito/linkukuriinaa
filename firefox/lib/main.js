var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: /.*google.*/,
  contentScriptFile: [data.url("link_cleaner.js")]
});
