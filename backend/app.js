const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const getQuestions=require("./routes/getQuestions");
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/app',getQuestions);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});