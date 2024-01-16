

let value = 0;
let a = () => {
    value = document.body.getElementsByClassName("p1")[1].textContent;
    value = Number.parseInt(value)
    value = value + 1;
    if (value >= 0 && value <= 23) {
        if (value >= 0 && value < 10) {
            value = "0" + value;
        }
        return document.body.getElementsByClassName("p1")[1].innerHTML = value;
    }
}
document.body.getElementsByClassName("p1")[0].addEventListener('click', a);

let b = () => {
    value = document.body.getElementsByClassName("p1")[1].textContent;
    value = Number.parseInt(value)
    value = value - 1;
    if (value >= 0 && value <= 23) {
        if (value >= 0 && value < 10) {
            value = "0" + value;
        }
        return document.body.getElementsByClassName("p1")[1].innerHTML = value;
    }
}
document.body.getElementsByClassName("p1")[2].addEventListener('click', b);





let value2 = 0;
let a2 = () => {

    value2 = document.body.getElementsByClassName("t1")[1].textContent;
    value2 = Number.parseInt(value2);
    value2 = value2 + 1;
    if (value2 >= 0 && value2 <= 59) {
        if (value2 >= 0 && value2 < 10) {
            value2 = "0" + value2;
        }
        return document.body.getElementsByClassName("t1")[1].innerHTML = value2;
    }
}
document.body.getElementsByClassName("t1")[0].addEventListener('click', a2);

let b2 = () => {
    value2 = document.body.getElementsByClassName("t1")[1].textContent;
    value2 = Number.parseInt(value2)
    value2 = value2 - 1;
    if (value2 >= 0 && value2 <= 59) {
        if (value2 >= 0 && value2 < 10) {
            value2 = "0" + value2;
        }
        return document.body.getElementsByClassName("t1")[1].innerHTML = value2;
    }
}
document.body.getElementsByClassName("t1")[2].addEventListener('click', b2);





let a3 = () => {
    return document.body.getElementsByClassName("l1")[1].innerHTML = "AM";
}
document.body.getElementsByClassName("l1")[0].addEventListener('click', a3);

let b3 = () => {
    return document.body.getElementsByClassName("l1")[1].innerHTML = "PM";
}
document.body.getElementsByClassName("l1")[2].addEventListener('click', b3);





let button = () => {
    alert("Submitted");
    document.body.getElementsByClassName("id3")[0].setAttribute("style", "background-color:yellow")

    let value1 = document.body.getElementsByClassName("p1")[1].textContent;
    let value2 = document.body.getElementsByClassName("t1")[1].textContent;
    let value3 = document.body.getElementsByClassName("l1")[1].textContent;

    value1 = Number.parseInt(value1);
    value2 = Number.parseInt(value2);


    var n = 0;
    setInterval(() => {
        let obj = new Date();

        let AMorPM = "";
        if (obj.getHours() >= 0 && obj.getHours() <= 12) {
            AMorPM = "AM";
        }
        else {
            AMorPM = "PM";
        }


        if (value1 == obj.getHours() && value2 == obj.getMinutes() && value3 == AMorPM && obj.getSeconds() == 0) {

            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
            audio.play();
            alert("Alram");
            n = 600000;
            setTimeout(()=>{
            audio.ended;
              
            },15000)

        }

    }, n);

    console.log(value1, value2, value3);
}
document.body.getElementsByClassName("id3")[0].addEventListener('click', button)










