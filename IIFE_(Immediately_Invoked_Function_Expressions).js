let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456);
        }, 4000);
    })
}


//IIFE 
(async () => {


    let b = await a();
    console.log(b);

    let c = await a();
    console.log(c);

    let d = await a();
    console.log(d);
})()  //Immediately_Invoked_Function_Expressions to avoid polluting namespaces
//IIFE used to create ()() function instead of traditional method of creating and calling like let a=()=>{}  a()

// used on async await function ,traditional function ,arrow function etc.

