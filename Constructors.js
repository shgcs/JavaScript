class RailwayForm {

    constructor(value) {
        console.log(value + " CONSTRUCTORS CALLED...");
    }
    submit() {
        alert(this.name + " :This form is submitted for train number: " + this.trainno);
    }

    cancel() {
        alert(this.name + " :This form is cancelled for train number: " + this.trainno);
    }

    fill(givenname, trainno) {
        this.name = givenname;
        this.trainno = trainno;
    }
}

//constructors would be called when you create the object of classes and then it would called automatically
let herry = new RailwayForm("JS");
herry.fill("Herry", 145316);
let rohan = new RailwayForm("JS");
rohan.fill("Rohan", 222420);


herry.submit();
herry.cancel();
rohan.submit();
rohan.cancel();