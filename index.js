const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')


const app = express()

app.use(express.urlencoded({extended: false}))
// app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views','views')


app.get('/', (req, res, next) => {
    res.render('homepage',{data:{}, userdate:""})
})


app.post('/pincodewise', (req, res, params) => {
    
    let newdate = req.body.userdate.slice(8,10)+'-'+req.body.userdate.slice(5,7)+'-'+req.body.userdate.slice(0,4)
    fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+req.body.code+'&date=05-05-2021')
        .then(res => res.json())
        .then(data => {
                // console.log(data.sessions)
                res.render('homepage',{data:data, userdate:newdate})
        });
})




app.listen(3001);