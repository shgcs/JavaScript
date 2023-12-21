const changeBodyRed = () =>{
    document.body.firstElementChild.style.background="red";
}

changeBodyRed();

let b = document.body;
console.log("first child of b is: ", b.firstChild);//return text node or tag/element node or comment node
console.log("first child of b is: ", b.firstElementChild);//return only tag/element node ignore to the text node and comment node

//$0 refer to the element/tag can used on console of browser

//$0.childern   for access all childern node list by selecting tag

