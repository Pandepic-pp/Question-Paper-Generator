const express = require("express");
const route = express.Router();
const  {getEasyQuestions,getMediumQuestions,getHardQestions}=require("../controller/getQuestionController");

route.get("/getEasyQuestions", getEasyQuestions);
route.get("/getMediumQuestions",getMediumQuestions);
route.get("/getHardQuestions",getHardQestions);
module.exports = route;