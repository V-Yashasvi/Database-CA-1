const express=require('express')
const app=express()
const port=8080

app.use(express.json())
app.use(express.static('static'))

app.get('/',(req,res)=>{
    res.send("Hello!...")
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

