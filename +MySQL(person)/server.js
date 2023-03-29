const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const db = require('./config/db.js')
app.get('/',(req,res)=>{
    console.log('root')
})

app.get('/person',(req,res)=>{
    console.log('/person')
    db.query("select * from person",(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
    //연결된 DBMS에 SQL문을 날려서 응답받은 결과는
    //query메서드의 콜백함수의 2번째 매개변수에 들어온다.
    //콘솔에 출력했다.
})

app.get('/person/:id',(req,res)=>{
    console.log('/person/:id')
    const id = req.params.id
    db.query(`select * from person where id=${id}`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.post('/person',(req,res)=>{
    console.log('/person')
    console.log('(post)')
    console.log(req.body)//undefined
    //req.body읽어지게 한다음에 객체에서 데이터 꺼내서
    //insert쿼리에 실어서 보낸다~
    //그래서 DBMS에 데이터 추가되게 한다.
    //회원가입,정보등록,차량등록,글쓰기
})

app.put('/person',(req,res)=>{
    console.log('/person')
    console.log('(put)')
})

app.delete('/person',(req,res)=>{
    console.log('/person')
    console.log('(delete)')
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})