alert("enter the value of a");
let a = prompt("enter here", "578");//578 default value
a = Number.parseInt(a);

//document.write(a);
alert("type:" + typeof a);

let write = confirm("do you want to write it to the page");//tap on ok then true and tap on cancel then false
if (write) {
    document.write(a);
}
else {
    document.write("please allow me tow");
}

//alert:button=ok
//prompt:button=ok,cancel
//confirm:button=ok,cancel