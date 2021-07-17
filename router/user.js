/**
 * @fileoverview 用户路由
 */

 const express = require('express')
 const router = express.Router()

 // 用户列表
 router.get('/', (req, res) => {
   res.json('user list')
 })

 module.exports = router
