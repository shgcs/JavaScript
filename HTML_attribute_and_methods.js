//document.body....  it's recommanded but you can do it in this way as well instead of id1 value


let a=id1.getAttribute("id");//return the attribute value
//console.log(a);//return id value

//console.log(id1.hasAttribute("id"));

//console.log(id1.hasAttribute("style"));//return true or false

//console.log(id1.setAttribute("hidden","true"));//used to set the attribute into the tag   (attribute_name,value_name)

//console.log(id1.setAttribute("class","class1 class2"));//here two value of class attribute

//console.log(id1.removeAttribute("class"));//used to remove the attribute

//console.log(id1.attributes);//used to collection of attibutes



//user define attributes
console.log(id1.dataset);//return the user define attribute list
//used to define the user define attributes in HTML and for that in HTML tag data-"attribute_name"="value"
console.log(id1.dataset.game);//game and player is user define attributes and return user define attribute value only
console.log(id1.dataset.player);