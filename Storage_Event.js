//need to open same path in another tab

//it would be trigger when you update the localStorage or sessionStorage
window.onstorage = (e)=>{
    alert("changed");
    console.log(e);
}


