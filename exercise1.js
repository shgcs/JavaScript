
alert("**********welcome to our number guessing**********");

let i = 1;
do {
    let number = Math.random();
    number = Number.parseInt(number * 100);

    if (number >= 1 && number <= 5) {
        alert("number alien between 1 to 5")
    }
    else if (number >= 6 && number <= 10) {
        alert("number alien between 6 to 10");
    }
    else if (number >= 11 && number <= 15) {
        alert("number alien between 11 to 15");
    }
    else if (number >= 16 && number <= 20) {
        alert("number alien between 16 to 20");
    }
    else if (number >= 21 && number <= 25) {
        alert("number alien between 21 to 25");
    }
    else if (number >= 26 && number <= 30) {
        alert("number alien between 26 to 30");
    }
    else if (number >= 31 && number <= 35) {
        alert("number alien between 31 to 35");
    }
    else if (number >= 36 && number <= 40) {
        alert("number alien between 36 to 40");
    }
    else if (number >= 41 && number <= 45) {
        alert("number alien between 41 to 45");
    }
    else if (number >= 46 && number <= 50) {
        alert("number alien between 46 to 50");
    }
    else if (number >= 51 && number <= 55) {
        alert("number alien between 51 to 55");
    }
    else if (number >= 56 && number <= 60) {
        alert("number alien between 56 to 60");
    }
    else if (number >= 61 && number <= 65) {
        alert("number alien between 61 to 65");
    }
    else if (number >= 66 && number <= 70) {
        alert("number alien between 66 to 70");
    }
    else if (number >= 71 && number <= 75) {
        alert("number alien between 71 to 75");
    }
    else if (number >= 76 && number <= 80) {
        alert("number alien between 76 to 80");
    }
    else if (number >= 81 && number <= 85) {
        alert("number alien between 81 to 85");
    }
    else if (number >= 86 && number <= 90) {
        alert("number alien between 86 to 90");
    }
    else if (number >= 91 && number <= 95) {
        alert("number alien between 91 to 95");
    }
    else if (number >= 96 && number <= 100) {
        alert("number alien between 96 to 100");
    }


    let user = prompt("enter the number");

    if (number == user) {
        document.write("number is guessed correctly user: ", user, " number: ", number, " in ", i, " steps");
        break;
    }

    if (number != user) {
        if (number > user) {
            alert("original number it was greater than your number");
        }
        else {
            alert("original number it was less than your number");

        }
    }

    if (i == 100) {
        alert("you not guessed your original number in 100 chances was: ", number);
    }
    alert("try again");
    i++;
} while (i <= 100);