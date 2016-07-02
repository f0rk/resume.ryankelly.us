const page = require("webpage").create();
const system = require("system");

const address = system.args[1];
const output = system.args[2];

const dpi = 72.0;
const dpCm = dpi / 2.54;

// letter size paper
const widthCm = 21.59;
const heightCm = 27.94;

page.viewportSize = {
   width: Math.round(widthCm * dpCm),
   height: Math.round(heightCm * dpCm),
};
page.paperSize = {
   width: page.viewportSize.width + "px",
   height: page.viewportSize.height + "px",
   orientation: "portrait",
   margin: "1cm"
};
page.settings.dpi = dpi;
page.zoomFactor = 1.0;

page.open(address, function(status) {
    if (status !== "success") {
        console.log("failed to load " + address);
        phantom.exit(1);
    } else {
        window.setTimeout(function() {
            page.render(output);
            phantom.exit();
        }, 200);
    }
});
