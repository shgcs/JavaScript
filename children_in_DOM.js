console.log(document.body.firstChild)//first child would be text node in that html file IF
//<body>
//  <div>

//  </div>
//</body>




//space within the body and div tag are also text node




//console.log(document.body.firstChild)//first child would be div node in that html file IF
//<body><div>

//  </div>
//</body>
console.log(document.body.lastChild)//last child would be script node in that html file 
console.log(document.body.childNodes)//child would be all node as NodeList(number_of_node) in that html file 

//if you want to convert list into the array 
let arr = Array.from(document.body.childNodes)
console.log(arr)//but this is not actual array 

//run the all of this stuff on the browser console






