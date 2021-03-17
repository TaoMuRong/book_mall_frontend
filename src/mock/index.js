/* eslint-disable no-unused-vars */
const express = require('express')
const mock = require('mockjs')
const cors = require('cors')

const app = express()
// app.all('*',function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });
app.use(cors())

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
  res.send('<h1>some html</h1>')
})

app.post('/login', (req, res) => {
  const {
    userName,
    pwd
  } = req.body
  if (userName == 'admin' && pwd == "123") {
    res.send({
      status: true,
      result: ['admin']
    })
  } else if(userName == 'user' && pwd == "123") {
    res.send({
      status: true,
      result: ['user']
    })
  } else {
    res.send({
      status: false,
      result: []
    })
  }


})

app.listen('8090', () => {
  console.log('MockServer已启动');
})