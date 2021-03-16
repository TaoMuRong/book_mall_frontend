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
app.get('/',(req,res) => {
  res.send('<h1>some html</h1>')
})

app.post('/login',(req,res) => {
  
  res.send(['Admin'])
})

app.listen('8090', () => {
  console.log('MockServer已启动');
})