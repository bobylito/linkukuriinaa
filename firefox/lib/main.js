var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScript: 'document.body.innerHTML = ' +
                 ' "<h1>Page matches ruleset</h1>";'
});
