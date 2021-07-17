const express = require('express')
const router = express.Router()
const boom = require('boom')
const userRouter = require('./user')
const { CODE_ERROR } = require('../utils/constant')

router.get('/', (req, res) => {
  res.send('欢迎访问华树读书管理后台')
})

router.use('/user', userRouter)

/**
 * 集中处理404请求的中间件，放在正常处理流程之后，不然会拦截正常请求
 */
router.use((req, res, next) => {
  next(boom.notFound('接口不存在'))
})

/**
 * 自定义路由异常处理中间件，必须放在路由最后
 * 事件处理：4个参数一个不能少
 */
router.use((err, req, res, next) => {
  console.log(err)
  const msg = (err && err.message) || '系统错误'
  const statusCode = (err.output && err.output.statusCode) || 500
  const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
  res.status(statusCode).json({
    code: CODE_ERROR,
    msg,
    error: statusCode,
    errorMsg
  })
})

module.exports = router
