class Employee {
    login() {
        console.log(`Employee has logged in`)
    }

    logout() {
        console.log(`Employee has logged out`);
    }

    requestLeaves(leaves) {
        console.log(`Employee requested ${leaves} leaves`);
    }
}

class Programmer extends Employee {
    requestCoffee() {
        console.log(`Employee has requested ${x} coffee`);
    }

    requestLeaves(leaves) {
        super.requestLeaves(4);//super.method_name() used to call again previous class methods 
        //console.log("one extra is granted ");
        /* console.log(`Employee requested ${leaves} leaves with extra 3 leaves`);  */
         
        console.log(`Employee requested ${leaves} leavesssss`);
    }
}

let e = new Programmer();
e.login();
e.requestLeaves(3);
