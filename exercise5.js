alert("ENTER THE DATA");

let n = prompt("enter the name");
let w;
let c = confirm("confirm");

if (c) {
    async function Hacker() {

        let a1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                let statement1 = "Initializing Hack Program...."
                resolve(statement1);
            }, 1000)

        }).then((value) => {
            console.log(value);
            document.body.getElementsByClassName("class1")[0].innerHTML = value;

        })

        let a2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                let statement2 = "Hacking " + n + " username";
                resolve(statement2);
            }, 5000)
        }).then((value) => {
            console.log(value);
            document.body.getElementsByClassName("class2")[0].innerHTML = value;

        })

        let a3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                let statement3 = "Username found " + n + Number.parseInt(Math.random() * 100);
                resolve(statement3);
            }, 10000)
        }).then((value) => {
            w = value;
            console.log(value);
            document.body.getElementsByClassName("class3")[0].innerHTML = value;
        })

        let a4 = new Promise((resolve, reject) => {
            setTimeout(() => {
                let statement4 = "Connecting to Facebook";
                resolve(statement4);
            }, 15000)

        }).then((value) => {
            console.log(value);
            document.body.getElementsByClassName("class4")[0].innerHTML = value;
        })


        let await1 = await a1;
        let await2 = await a2;
        let await3 = await a3;
        let await4 = await a4;

        return [await1, await2, await3, await4];

    }

   console.log( Hacker());

}

//document.getElementsByClassName("class3")[0].innerHTML = w;
setInterval((e) => {
    document.body.getElementsByTagName("h1")[0].classList.toggle("class1");
    document.body.getElementsByTagName("h1")[1].classList.toggle("class2");
    //document.body.getElementsByTagName("h1")[2].classList.toggle("class3");
    document.body.getElementsByTagName("h1")[3].classList.toggle("class4");
    //document.getElementById("body").classList.toggle("class");
}, 1000);

