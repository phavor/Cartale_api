const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('You are welcome to Cartale Stores and Management System')
})

module.exports = router