const express = require('express')
const bodyparser = require("body-parser");
const app = express();

app.get('/', (req, res) => {
  //res.render('/index')
  res.sendFile(__dirname + '\\index.html')
});

app.use(bodyparser.json({type:"application/*+json"}));

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

//app.post("/addcustomer", jsonparser, customer.addcustomer);