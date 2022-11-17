const express=require('express');
const Routes=express.Router();



const{sendMail} = require('../controller/mail');

Routes.post("/sendmail", sendMail);
module.exports=Routes;