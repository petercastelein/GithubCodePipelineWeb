// Peter Castelein
// I based my font swap code in part on https://usefulangle.com/post/74/javascript-dynamic-font-loading

// work done in lab 2 
function toggleStyleSheet() {
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var thing = document.getElementById("mainStyleSheet")
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var ssName = thing.getAttribute("href")
    // 1 (c) Determine new stylesheet file name
    var changeName
    if (ssName === "styles/primary.css") {
        changeName = "styles/secondary.css"
        swapFonts(changeName);
    }
    else {
        changeName = "styles/primary.css"
        swapFonts(changeName);
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    thing.setAttribute("href", changeName)

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("pickSheet", changeName)
}

// swap fonts
function swapFonts(ssName) {
    if (ssName === "styles/secondary.css") {
        //Font for second style
        var second_font = new FontFace('Alice', 'url(fonts/Alice-Regular.ttf)');
        second_font.load().then(function (loaded_face) {
            document.fonts.add(loaded_face);
            document.body.style.fontFamily = '"Alice", Palatino';
        }).catch(function (error) {
            // Do nothing on error
        });
    }
    else {
        //Font for first style
        var first_font = new FontFace('Alice', 'url(fonts/Roboto-Regular.ttf)');
        first_font.load().then(function (loaded_face) {
            document.fonts.add(loaded_face);
            document.body.style.fontFamily = '"Roboto", Helvetica';
        }).catch(function (error) {
            // do nothing on error
        });
    }
}

window.onload = function () {
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var ssName = localStorage.getItem("pickSheet")
    if (ssName != null) {
        // 2 (b) get html style element by ID
        var thing = document.getElementById("mainStyleSheet")
        // 2 (c) replace href attribute of html element.
        thing.setAttribute("href", ssName)
        swapFonts(ssName);
    }
}