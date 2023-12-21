/*const sayHello = () =>{
    console.log("JS");
}

sayHello();*/


//const sayHello = name =>console.log("JS"+name);

const sayHello = name =>{
    console.log("JS1"+name);
    console.log("JS2"+name);
    console.log("JS3"+name);
}

const x={
    name:"herry",
    role:"JS developer",
    experience: 6, 
    show:function(){//here direct arrow method can't use 
    //here all keys can use as global using this.method_name/variable

        setTimeout(()=>{//here direct traditional method can't use 
            console.log("The name is"+this.name+"\n"+this.role);
           // console.log(this)
        },2000);//arrow method uses lexical this


//but here can use traditional method by this way also
        let that = this;
        setTimeout(function(){
            console.log("The name is"+that.name+"\n"+that.role);
            //console.log(this)
        },2000);
    }
}

sayHello("heery");

//console.log(x.name,x.experience);
//x.show();

