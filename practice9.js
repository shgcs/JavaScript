/*
async function loadScript(src) {
//let func = async () =>{}
    let a = new Promise((resolve, reject) => {

        let element = document.createElement("script");
        element.src = src;
        document.body.appendChild(element);

        element.onload = () => {
            resolve("script loaded");
            resolve(... + ...);
        }

        element.onerror = () => {
            reject("script not loaded");
        }

    })

   
    return await a;

}


let aa = loadScript("browser.js");

aa.then((value) => {
    console.log(value);
    alert("script loaded")
})
*/


/*
try {
    async function func() {
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                 resolve("resolve")
                reject(new Error("error hai"))
            }, 3000);

        })

        return await promise;
    }

    func().then((value) => {
        console.log(value);

    });

}
catch (error) {
    console.log("erorr hai re...");
}
*/


console.time("run");
async function func() {

    let a = new Promise((resolve, reject) => {
        resolve("resolve 1");
    })

    let b = new Promise((resolve, reject) => {
        resolve("resolve 2");
    })

    let c = new Promise((resolve, reject) => {
        resolve("resolve 3");
    })


    let aa = await a;
    let bb = await b;
    let cc = await c;
    let values = Promise.all([aa, bb, cc]);
    console.log(values)
    values.then((value) => {
        //console.log(Array.from(value));
        console.log(value);
    })
}

func();

console.timeEnd("run");





