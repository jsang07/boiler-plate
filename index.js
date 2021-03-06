const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
// 이 방식들로 데이터 분석? 받게 해준다
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 에러 안 뜬다고 함
}).then(()=> console.log('MGD connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.post('/register', (req, res) =>{
  // 회원 가입 할때 필요한 정보들을 고객에서 가져와서 데이터베이스에 넣는다
  
  const user = new User(req.body)    

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, ()=> console.log(`Example port ${port}!`))