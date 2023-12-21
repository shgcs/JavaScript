class program {

    func1() {
        setTimeout(() => {
            console.log("Hello World");
        });
    }

    func2(...arr) {

        let a = [...arr];
        let i = 0;
        let sum = 0;
        do {
            sum = sum + a[i];
            i++;
        } while (i < a.length)

        console.log("average :", sum / a.length);
    }

    func3(n) {
        (function (n) {
            let p = new Promise((resolve, reject) => {

                setTimeout(() => {
                    resolve("resolve");
                }, n);
            });


            p.then((value) => {
                console.log(value);
            });
        })(n);
    }


    func4(p, r, t) {
        let SI = (p * r * t) / 100;
        console.log(`Simple Interest : ${SI}`);
    }

}

let obj = new program();
obj.func1();
obj.func2(1, 2, 3, 4);
obj.func3(3000);
obj.func4(2000, 2, 8);




