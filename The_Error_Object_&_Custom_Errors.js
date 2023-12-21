
try {
    let age = prompt("enter your age");
    age = Number.parseInt(age);

    if (age > 150) {
        //console.log(herry);
        //throw new ReferenceError("herry ka error");//custom error

        throw new ReferenceError("This is probably not true");

    }


}
catch (error) {// error is error object
    console.log(error)
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);


}

console.log("The script is still running");