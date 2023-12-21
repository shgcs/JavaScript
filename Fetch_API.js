let input = prompt("enter the city");
let Fetch = "https://goweather.herokuapp.com/weather/" + input;
let p = fetch(Fetch /*, {
    headers: {
        Authentication: 'secret'
    }
}*/);  //here p is Promise

p.then((response) => {
    console.log(response.status);//status code
    console.log(response.ok);//if ok then return true
    console.log(response.headers);
    console.log(response.text());
    return response.json();

}).then((value2) => {
    console.log(value2);
    console.log(value2.description);
    console.log(Array.from(value2.forecast));
    console.log(value2.forecast[0]);


})