const {Router} = require('express')
const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors({
    origin: 'http://143.244.137.54'
}));

app.use(cors())

app.get('/',(req,res) =>{
    res.sendFile('/root/bootstrap_victor_product_page/bootstrap_victor_product_page.html')
})

app.get('/images/:name',(req,res)=>{
    res.sendFile('/root/bootstrap_victor_product_page/' + req.path)
})

// app.get('/video/:name',(req,res)=>{
//     res.sendFile('/root/bootstrap_victor_home_page/' + req.path)
// })

app.listen(3000,()=>console.log('Running on port:3000'))