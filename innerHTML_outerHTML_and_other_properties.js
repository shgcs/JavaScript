/* 
console.log(document.getElementsByTagName('span')[0]);// [0] return the tag or index element 
console.log(document.getElementsByTagName('span'));// return HTML collection


//dir
console.dir(document.getElementsByTagName('span')[0]);// return span tag all methods and properties
console.dir(document.getElementsByTagName('span'));// return HTML collection



console.log(document.body.firstChild.nodeName);//print only children name 
console.log(document.body.firstElementChild.nodeName);//print only tag/element/node name 




//innerHTML  valid for element/tag node only
//console.log(document.body.firstElementChild.nextElementSibling.innerHTML = "javascript");
//console.log(document.body.firstElementChild.nextElementSibling.innerHTML = "<i>javascript<i>");




//outerHTML 
console.log(document.body.firstElementChild.nextElementSibling.outerHTML="<div>heery</div>")//change the tag also




console.log(document.body.firstChild)//return the text node or comment node or element node
console.log(document.body.firstChild.data)//return the text node data only
console.log(document.body.firstChild.nodeValue)//return the text node data only




//console.log(document.body.textContent);//used to copy all page text content only 


//<span hidden>python</span> //hidden used to hide the tag content but would be show in the inspect html page

//$0.hidden=false      //for browser console
//(select tag).hidden=false //for ide console
//used to show the hidden text of tag by selecting tag

*/


