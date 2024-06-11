const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    first_name :{
        type : String,
        required : true,
    },
    last_name :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
    },
    passward :{
        type : String,
        required : true,
        minLength : 6,
    },
    continent :{
        type : String,
        required : true,
        enum : ["North America", "Asia", "South America", "Antarctica", "Africa", "Europe", "Oceania"],
    },
    phone :{
        type : Number,
        required : true,
        minLength : 10,
    },
    gender :{
        type : String,
        required : true,
        enum : ["Male", "Female", "Other"],
    },
    address :{
        type : String,
        required : true,
    },
    productCat :{
        type : String,
        required : true,
        enum : ["Pet food","Pet accessories", "Pet grooming"],
    },
    serviceCat :{
        type : String,
        required : true,
        enum : ["Pet training", "Personal grooming", "Pet walking"],
    },
    vendor_holder_name :{
        type : String,
        required : true,
    },
    vender_account_number :{
        type : Number,
        required : true,
        minLength : 10,
        maxLength : 14,
    },
    vender_account_type :{
        type : String,
        required : true,
        enum : ["current", "saving"]
    }

},{versionKey:false})
const User = model('user', userSchema);
module.exports = User;