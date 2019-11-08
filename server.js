//setup backend server
const express = require('express');
const app = express();
var fs = require('fs');
var bodyParser = require("body-parser");
app.use(bodyParser());

app.use(
  express.static('public')
);

//fix cors issues on expressjs
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//get shapes from json
app.get('/api/shapes',(req,res)=>{
    const shapes = require('./public/shapes.json')
    res.json(shapes)
});


//write to json
app.post('/api/exportshapes',(req,res)=>{
  const fs = require('fs')

  // console.log(JSON.stringify(req.body))

  const chart= req.body

    saveShapesToPublicFolder(chart, function(err) {
    if (err) {
      res.status(404).send('Chart not saved');
      return;
    }

    res.send('Chart Saved');
  });

});

function saveShapesToPublicFolder(shape, callback) {
  fs.writeFile('./public/shapes.json', JSON.stringify(shape), callback);
}

const PORT = 3001;

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
