//snake water gun game
//s w=s
//w g=w
//s g=g

alert("*****Welcome to Snake Water Gun Game*****");

let count1 = 0;//user
let count2 = 0;//computer

for (let i = 1; i <= 10; i++) {
    let user = prompt("choose the number 1:snake 2:water 3:gun");
    user = Number.parseInt(user);

    let computer = (Math.random() * 3) + 1;
    computer = Number.parseInt(computer);

    if (user == 1 && computer == 2) {
        alert("user winner because of user:snake computer:water");
        count1++;
    }
    else if (user == 2 && computer == 1) {
        alert("computer winner because of user:water computer:snake");
        count2++;
    }
    else if (user == 2 && computer == 3) {
        alert("user winner because of user:water computer:gun");
        count1++;
    }
    else if (user == 3 && computer == 2) {
        alert("computer winner because of user:gun computer:water");
        count2++;
    }
    else if (user == 1 && computer == 3) {
        alert("computer winner because of user:snake computer:gun");
        count2++;
    }
    else if (user == 3 && computer == 1) {
        alert("user winner because of user:gun computer:snake");
        count1++;
    }
    else if ((user == 1 && computer == 1) || (user == 2 && computer == 2) || (user == 3 && computer == 3)) {
        if (user == 1) { alert("draw the match because of user:snake computer:snake"); }
        if (user == 2) { alert("draw the match because of user:water computer:water"); }
        if (user == 3) { alert("draw the match because of user:gun computer:gun"); }
        count1 = count1 + 0.5;
        count2 = count2 + 0.5;
    }
}

let score = confirm("Do you want to see Context winner");

if (score) {
    if (count1 > count2) {
        document.write(`User Winner <br>`);
        document.write(`User Score: ${count1} <br>`);
        document.write(`Computer Score: ${count2} <br>`);
    }
    else if (count1 == count2) {
        document.write(`Not any Winner <br>`)
        document.write(`User Score: ${count1} <br>`);
        document.write(`Computer Score: ${count2} <br>`);
    }
    else {
        document.write(`Computer Winner <br>`);
        document.write(`User Score: ${count1} <br>`);
        document.write(`Computer Score: ${count2} <br>`);
    }
}
else {
    alert("you don't want to see winner");
}