function saveNotebook() {
    /*
        Saves all opened NetMath notebooks
            Only works on https://courseware.illinois.edu/*
            Finds save button by going into each noteboook iframe and using ID (then .click() ing)
            Does not handle timing of the saves (1 call => 1 save per opened notebook)
    */

    try {
        chrome.tabs.executeScript({
            file: 'assets/js/saveNotebooks.js'
        }, function() {
            if (chrome.runtime.lastError) {
                // no major error we just aren't on netmath
                // and therefore can't access the DOM
                console.warn("IGNORE ME: " + chrome.runtime.lastError.message);
            }
        });
    }
    catch (e) {
        return;
    };
};

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
};

async function autoSave() {
    while (true) {
        var delay = 90;
        await sleep(delay);
        saveNotebook();
    };
};

autoSave();