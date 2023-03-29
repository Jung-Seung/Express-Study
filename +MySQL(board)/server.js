const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const db=require('./config/db.js')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/board',(req,res)=>{
    console.log('/board')
    db.query("select * from board",(err,data)=>{
        if(!err){
            //console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})