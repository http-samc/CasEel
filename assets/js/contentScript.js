function saveNotebook() {
    /*
        Saves all opened NetMath notebooks
            Only works on https://courseware.illinois.edu/*
            Finds save button by going into each noteboook iframe and using ID (then .click() ing)
            Does not handle timing of the saves (1 call => 1 save per opened notebook)
    */

    chrome.tabs.executeScript({
        code: `
        var iframes = [... document.getElementsByTagName("iframe")];
        Array.prototype.forEach.call(iframes, iframe => {
            try {
                iframe.contentDocument.getElementById("ext-gen22").click();
            }
            catch (e) {
                return;
            }
        });
        `
    });
}

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
};

async function autoSave() {
    //let delay = parseInt(document.getElementById("interval").value);
    //console.log(`Waiting ${delay} seconds to save . . .`)
    while (true) {
        await sleep(5);
        saveNotebook();
        console.log(`Saved!`)
    };
};

autoSave();