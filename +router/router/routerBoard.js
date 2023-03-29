const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    // /board
    console.log('/board')
})

router.get('/:no',(req,res)=>{
    // /board:/no
    console.log('/board/:no')
})

module.exports = router;