//jsonplaceholder
const func = async () => {
    let option = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            title: 'heery',
            body: 'bhai',
            userId: 1100,
        }),
    }
    //json.string convert to object into string 
    //json.parse convert to valid json.string into object

    /*.then((response) => response.json())
    .then((json) => console.log(json));*/

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', option);
    let response = await p.json();
    return response;

}

const mainfunc = async () => {
    let todo = await func();
    console.log(todo);
}

mainfunc();