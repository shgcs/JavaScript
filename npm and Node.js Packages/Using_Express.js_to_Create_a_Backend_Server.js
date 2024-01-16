const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
     res.send('about');
     console.log(req)
})

app.get('/map', (req, res) => {
    res.send('map')
})

app.get('/contact', (req, res) => {
    res.send('contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

//"type": "module",
/* /about,/map,/contact  used to create various pages in browser*/

//http://localhost:3000/?name=herry
//npm i -g nodemon used to restart the server automatically. need to used nodemon instead of node/npm while throw the command in ide console
//  .\ and press tab for name of file

//nodemon .\file_name

console.log("hiii js");
