//change the card title
//let card_title=document.getElementsByClassName('card-title')[0]

//let card_title=document.getElementById('firstcardtitle')

//card_title.style.color="red";





let card_title = document.querySelectorAll(".card-title");//. for class and # for id

card_title[0].style.color = "blue";
card_title[1].style.color = "red";
card_title[2].style.color = "green";

console.log(card_title);


document.querySelector(".this").style.color = "black";
document.querySelector(".this").style.background = "red";

console.log(document.getElementsByTagName("a"));//anchor tag

console.log(document.querySelector(".card").getElementsByTagName("a"));


console.log(document.getElementsByName("search"));




