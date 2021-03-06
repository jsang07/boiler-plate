const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://js:js1234@boiler-plate.jmdi3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 에러 안 뜬다고 함
}).then(()=> console.log('MGD connected..'))
  .catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World sex'))

app.listen(port, ()=> console.log(`Example port ${port}!`))