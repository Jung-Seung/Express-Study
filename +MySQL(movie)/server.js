const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const db=require('./config/db.js')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    console.log('root')
})
app.get('/movie',(req,res)=>{
    console.log('/movie')
    db.query("select * from movie",(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})
app.get('/movie/:no',(req,res)=>{
    console.log('/movie/:no')
    const no = req.params.no
    db.query(`select * from movie where no=${no}`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})
app.post('/movie',(req,res)=>{
    console.log('/movie(POST)')
    console.log(req.body)
    //const no = req.body.no
    //const title = req.body.title
    //const runtime = req.body.runtime
    //const GPA = req.body.GPA
    const {no,title,runtime,GPA} = req.body
    //ES6 - 비구조화할당, 구조분해할당
    //destructuring assignment
    db.query(`insert into movie values(${no},'${title}',${runtime},${GPA})`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})
app.put('/movie',(req,res)=>{
    console.log('/movie(PUT)')
    const id = req.params.id
    console.log(id)
    console.log(req.body)
    const runtime = req.body.runtime
    const GPA = req.body.GPA
    db.query(`update movie set runtime=${runtime},GPA=${GPA} where id=${id}`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})
app.delete('/movie',(req,res)=>{
    console.log('/movie(DELETE)')
    const id = req.params.id
    db.query(`delete from movie where id=${id}`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/movie/search',(req,res)=>{
    console.log('/movie/search')
    console.log(req.query)
    // console.log(req.body)
    const title = req.body.title
    //쿼리스트링에서 반지 검색어 뽑아내고 그걸 like쿼리에 와일드카드와 결합
    db.query(`select * from movie where title like '%${title}%'`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})
//http://localhost:4000/movie/search?query=반지

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})