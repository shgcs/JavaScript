class RailwayForm {
    //This is the third type of create the function but only in classes 
    //we can't create the traditional and arrow function/methods in classes
    submit() {
        alert(this.name + " :This form is submitted for train number: " + this.trainno);
    }

    cancel() {
        alert(this.name + " :This form is cancelled for train number: " + this.trainno);
    }

    fill(givenname, trainno) {
        this.name = givenname;   //this.variable_name scope is global in classes
        this.trainno = trainno;
    }
}

let herry = new RailwayForm();//herry is object
herry.fill("Herry", 145316);
let rohan = new RailwayForm();//rohan is object
rohan.fill("Rohan", 222420);


herry.submit();
herry.cancel();
rohan.submit();
rohan.cancel();
