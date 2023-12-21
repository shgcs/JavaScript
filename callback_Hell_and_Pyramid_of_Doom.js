//callbacks
function loadScript(src, callback1, callback2) {//url or src
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("SRC: " + src)//if script src is valid then print otherwise not
        callback1(null, src);
        // callback2(src);
    }
    script.onerror = function () {//print when script is not valid
        console.log("error loading script with SRC: " + src);
        callback1(new Error("Src got some error"));//print the error messeage
    }
    document.body.appendChild(script);
}

//loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js")

/*
function hello(error, src) {
    if (error) {
        console.log(error);
        sendEmergencyMessageToCeo();
        return;
    }
    alert("heery " + src);
}

function goodmorning(src) {
    alert("goodmorning " + src);
}


loadScript("browserr.js", hello, goodmorning);*/

//pyramid of doom
loadScript("browser.js", function hello(error, src) {
    if (error) {
        console.log(error);
        sendEmergencyMessageToCeo();
        return;
    }
    loadScript("browser2.js", function hello(error, src) {
        if (error) {
            console.log(error);
            sendEmergencyMessageToCeo();
            return;
        }
        loadScript("browser3.js", function hello(error, src) {
            if (error) {
                console.log(error);
                sendEmergencyMessageToCeo();
                return;
            }
            loadScript("browser4.js", function hello(error, src) {
                if (error) {
                    console.log(error);
                    sendEmergencyMessageToCeo();
                    return;
                }
                loadScript("browser5.js", function hello(error, src) {
                    if (error) {
                        console.log(error);
                        sendEmergencyMessageToCeo();
                        return;
                    }
                    loadScript("browser6.js", function hello(error, src) {
                        if (error) {
                            console.log(error);
                            sendEmergencyMessageToCeo();
                            return;
                        }
                        alert("heery " + src);
                    });
                });
            });
        });
    });
});
