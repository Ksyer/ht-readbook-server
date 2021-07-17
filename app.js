const express = require('express')
const router = require('./router')
const app = express()

app.use('/', router)

const server = app.listen(3000, () => {
  const { address, port } = server.address()
  console.log('HTT启动成功：http://%s:%s', address, port)
})
