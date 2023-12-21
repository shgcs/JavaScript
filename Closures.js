/*
function hello1() {
    let message = "Good Morning";

    let c = function hello2() {
        console.log("I am c" + message);

    }
    // here c variable store to the as it is function and return also to it in the form of variable
   return c;  //return with lexical environment known as closures

}

c = hello1();
c();
//when we not used let,const,var keyword with the variable then he will take by default var keyword
*/

let main1 = () => {


    let func1 = () => {
        let a = 1;
        console.log(a);

        let func2 = () => {

            console.log(a);

            let func3 = () => {

                console.log(a);
            }
            func3();
        }
        func2();
    }
    return func1;
}

let w = main1();
w();