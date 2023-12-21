/*
async function heery(){
   return 5;
}

herry().then((value) => {
    alert(value);
});
*/



async function herry() {
    let delhiWeather = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("27 Deg");
        }, 1000)

    });

    let bangaloreWeather = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("21 Deg");
        }, 7000);

    });


    //delhiWeather.then(alert);
    //bangaloreWeather.then(alert);

    let delhi = await delhiWeather;
    console.log("Fetched Weather: ", delhi);
    let bangalore = await bangaloreWeather;// wait upto the first promise resolve
    console.log("Fetched Weather: ", bangalore);

    return [delhi, bangalore]
    // return [await delhiWeather,await bangaloreWeather]

}

herry().then((value) => {
    console.log(value);

});

//console.log(herry());



/*
async function cherry() {
    console.log("cheery");
}

async function lerry() {
    console.log("lerry");
}

async function cherry_lerry() {

    let a = await cherry();
    let b = await lerry();

}

cherry_lerry();
*/







//await used on the promises and async functions 


