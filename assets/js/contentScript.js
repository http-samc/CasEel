function saveNotebook() {
    /*
        Saves the currently opened NetMath notebook
            Only works on https://courseware.illinois.edu/*
            Finds save button by XPATH and sends a click to it
            Does not handle timing of the saves (1 call => 1 save)
    */

    chrome.tabs.executeScript({
        code: `
        let saveButton = document.evaluate('//*[@id="ext-gen22"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        saveButton.click();
            `
    });
}

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s/1000));
};

async function autoSave() {
    let delay = parseInt(document.getElementById("interval").value);
    console.log(`Waiting ${delay} seconds to save . . .`)
    while (true) {
        await sleep(delay);
        saveNotebook();
        console.log(`Saved!`)
    };
};

document.getElementById("start").addEventListener("click", autoSave());