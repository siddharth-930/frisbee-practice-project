const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fressbee_form_api")
.then(()=>{
    console.log('Database connect successfully');
})
.catch((err)=>{
    console.log('error', err.message);
})
