//common.js
const hello = () => {
    console.log("hello  herry");
}

const Ahello = (name) => {
    console.log("hello " + name)
}

//module.exports = {hello:hello,Ahello:Ahello};

module.exports = { hello, Ahello };