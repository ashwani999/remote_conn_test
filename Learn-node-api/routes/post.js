const express = require('express');
const postcontroller=require('../controllers/post');
const router=express.Router();

router.get("/",postcontroller.getpost)
module.exports=router;