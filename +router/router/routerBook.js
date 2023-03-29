const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    // /book
    console.log('/book')
})

router.get('/:no',(req,res)=>{
    // /book:/no
    console.log('/book/:no')
})

module.exports = router;