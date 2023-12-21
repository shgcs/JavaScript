/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolve after 2 senconds")
        resolve(56);
    }, 2000);

});

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2")

        }, 2000)
    })
    return p2;
}).then((value) => {
    console.log("we are done")
    return 2;
}).then((value) => {
    console.log("now we are pakka done");
})
*/

const loadScript = (src) => {
    return new Promise((resolve, reject) => {



        let script = document.createElement('script');
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);

        script.onload = () => {
            // resolve(1);
            resolve("script loaded");
        }

        script.onerror = () => {
            reject(0);
        }


    });
}


let p1 = loadScript("browser.js");
p1.then((value) => {

    console.log(value);
    return loadScript("DOM.js");

}).then((value2) => {

    console.log("second script");

}).catch((error) => {

    console.log("we are sorry but we are having problems loading this script");

})