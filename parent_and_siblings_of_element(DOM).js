//head and body are siblings/parent node
// $0 basis on tags
console.log(document.body.firstChild);

let a = document.body.firstChild;
console.log(a.parentNode);//parentNode used to find the parent node of children node
console.log(a.parentElement);//parentElement used to find parent only element of childern node
//this both concept are very similar
console.log(a.firstChild.nextSibling);//nextSibling used to find next tag




//properties of DOM

//firstChild
//lastChild
//ChildNode
//firstElementChild
//parentNode
//parentElement
//nextSibling


