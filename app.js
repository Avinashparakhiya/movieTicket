const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
app.use('/api',require('./routes/index'));

mongoose.connect('mongodb://localhost/test123').then(()=>
{
    console.log("Connection DataBase Establish....");
}).catch(err=>{
    console.log(`db error ${err.message}`);
    process.exit(-1)
})

const port = 3000
  
  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })