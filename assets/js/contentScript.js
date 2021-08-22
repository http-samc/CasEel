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
        var delay = parseInt(document.getElementById("interval").value);
        console.log(`Waiting ${delay} seconds to save . . .`);

        await sleep(delay);
        saveNotebook();
        console.log(`Saved!`)
    };
};

window.onload = function() {
    let start = document.getElementById("start");
    start.addEventListener("click", function () {
        console.log("Starting autosaver!");
        autoSave();
    });
};