let a = document.getElementsByClassName("container")[0];

//here onclick is property/attribute 

a.onclick = () => {
    let b = document.getElementsByClassName("container")[0];
    b.innerHTML = "JS";
    //console.log("JS")
}

