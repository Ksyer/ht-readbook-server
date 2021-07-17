const express = require('express')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', (req, res) => {
  throw new Error('error...')
})

function errorHandler(err, req, res, next) {
  console.log(err)
  res.status(500).json({
    error: -1,
    msg: err.toString()
  })
}

app.use(errorHandler)

const server = app.listen(port, () => {
  const { address, port } = server.address()
  console.log('HTT启动成功：http://%s:%s', address, port)
})
