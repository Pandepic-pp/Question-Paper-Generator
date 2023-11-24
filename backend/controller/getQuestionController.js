const EasyQuestions=require("../QuestionDataSet/EasyQuestion.json");
const MediumQuestions=require("../QuestionDataSet/MediumQuestion.json");
const HardQuestions=require("../QuestionDataSet/HardQuestion.json");
function getRandomQuestions(array, count) {
    if (array.length < count) {
      console.error(`Not enough questions in the array.`);
      return [];
    }
    const shuffledQuestions = [...array];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
  
    return shuffledQuestions.slice(0, count);
  }

const getEasyQuestions= async function(req,res){
    const randomQuestions = getRandomQuestions(EasyQuestions, 20);
    console.log(JSON.stringify(randomQuestions, null, 2));
    res.send(JSON.stringify(randomQuestions, null, 2));
}
const getMediumQuestions=async function(req,res){
    const randomQuestions = getRandomQuestions(MediumQuestions, 50);
    console.log(JSON.stringify(randomQuestions, null, 2));
    res.send(JSON.stringify(randomQuestions, null, 2));
}
const getHardQestions=async function(req,res){
    const randomQuestions = getRandomQuestions(HardQuestions, 30);
    console.log(JSON.stringify(randomQuestions, null, 2));
    res.send(JSON.stringify(randomQuestions, null, 2));
}
module.exports={getEasyQuestions,getMediumQuestions,getHardQestions};