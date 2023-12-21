
//alert("welcome to cat random images");

let fetchapi = fetch("https://api.thecatapi.com/v1/images/search?limit=10");

let path = [];
fetchapi.then((value) => {
    return value.json();
}).then((value) => {

    console.log(value);

    for (const img of value) {

        path.push(img.url);
        

    }
  //  console.log(path[3])

    //asynchronous programming
    for (let i = 0; i < 10; i++) {
        let func = () => {
            let atr1 = "img" + (i + 1);
            let a = document.getElementsByClassName(atr1)[0].setAttribute("src", path[i]);

        }

        let atr2 = "btn" + (i + 1);
        document.getElementsByClassName(atr2)[0].addEventListener('click', func);
    }
});



