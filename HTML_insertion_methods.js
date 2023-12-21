//first way to add tags 
/*
let a = document.getElementsByTagName('div')[0];
//a.innerHTML = a.innerHTML + '<h1>hello JS</h1>';//used to add the tags in HTML  div = div + h1
*/




//second way to add tags
let a = document.getElementsByTagName('div')[1];
let div = document.createElement('div');
div.innerHTML = '<h1>JS</h1>';
a.appendChild(div);//appendChild() used to add child tag into the parent tag
//a.append(div);//add to last in div tag
//a.prepend(div);//used to add to first in div tag
//a.before(div)//insert first in body tag but into the div tag before div tag
//a.after(div);//insert last in body tag but into the div tag after div tag
//a.replaceWith(div);//replace/remove to the parent node means to div tag with new div tag

 