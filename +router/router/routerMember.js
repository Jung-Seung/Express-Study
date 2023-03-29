const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    // /member
    console.log('/member')
})

router.get('/:id',(req,res)=>{
    // /board:/id
    console.log('/member/:id')
})

module.exports = router;