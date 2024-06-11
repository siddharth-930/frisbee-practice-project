const User = require('../models/userModel.js');

const getHome = (req,res)=>{
    res.render('index.ejs');
}

const getData = (req,res)=>{
    const { email} = req.body;
    User.findOne({email})
.then((data)=>{
    res.send(data);
})
.catch((err)=>{
    res.send(err);
})

}

const createUser = (req,res)=>{

    console.log('user details to be created :' , req.body);
    User.create(req.body)
    .then((data)=>{
        res.render('index.ejs', data);
        // res.send('created successfully');
    })
    .catch((err)=>{
        console.log('error-', err.message);
    })
}

const updateUser = (req,res)=>{
    const updateE = req.body.email;
    User.updateOne({email: updateE},req.body)
    .then((data)=>{
        console.log(data);
        res.render('index.ejs', data);
    })
    .catch((err)=>{
        console.log('error in controller', err.message);
    })
}

module.exports = {
    createUser,
    getData,
    updateUser,
    getHome
};