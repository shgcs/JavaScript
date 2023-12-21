
let a = (e) => {
    let obj = new Date();
    document.getElementById("hh1").innerHTML = obj.getHours();
    document.getElementById("hh2").innerHTML = obj.getMinutes();
    document.getElementById("hh3").innerHTML = obj.getSeconds();
    document.getElementById("d1").innerHTML = obj.getDate();
    //document.getElementById("hh4").innerHTML = obj.getMilliseconds();
}

setInterval(a, 0)

let b = (e) => {
    document.getElementById("id1").classList.toggle("c1");
    document.getElementById("id2").classList.toggle("c2");
    document.getElementById("id3").classList.toggle("c3");


}
setInterval(b, 1000)