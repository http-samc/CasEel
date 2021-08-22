// Each notebook page is set as an iframe, we'll get them all as an array
var iframes = [... document.getElementsByTagName("iframe")];

// Iterate over each iframe in the array
Array.prototype.forEach.call(iframes, iframe => {
    try {
        // try finding the save button (id = ext-gen22) in each iframe document
        // and then click it
        iframe.contentDocument.getElementById("ext-gen22").click();
    }
    catch (e) {
        // if we get an error, it's because the save button didn't exist
        // this is usually due to the notebook not being saveable
        // eg. the 'Welcome' page, so we can return and move to the next notebook
        return;
    }
});