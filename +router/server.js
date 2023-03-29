const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

const RouterBoard = require('./router/routerBoard')
const RouterBook = require('./router/routerBook')
const RouterMember = require('./router/routerMember')

app.use('/board',RouterBoard)
app.use('/book',RouterBook)
app.use('/member',RouterMember)

app.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}`)
})