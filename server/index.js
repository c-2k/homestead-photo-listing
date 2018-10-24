const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const git = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  db.matchId(req.body.term)
  .then(id => {
    if(id===null){
      console.log('uniqueId', id)
      git.getReposByUsername(req.body.term)
        .then(id => {
          var test = JSON.parse(id)
          test.forEach(ele => {
            db.save(ele);
          });
        res.send(test)
        })
    } else {
      console.log("notSoUniqueId", id);
    }
  })
  .catch(err=>{
    console.error(err)
  })
  // git.getReposByUsername(req.body.term)
  // .then(data => {
  //   var test = JSON.parse(data)
  //   test.forEach(ele => {
  //     db.save(ele);
  //   });
  // })
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

db.matchAll()
  .then(data => {
    console.log('testMatchAll', data)
  })

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  db.matchAll()
  .then(data=>{
    res.send(data);
  })
  .catch(err =>{
    console.error(err)
  })

});

//RESOLVED: Write a GET /repos endpoint that retrieves the top 25 repos stored in your database, sorted by the criteria you decided on earlier.

//RESOLVED: Figure out how to design a function that filters the top 25 repos that are displayed on the page

//TODO: Complete Getting Started with NodeJS on Heroku.

//TODO: What config variables will you need to set in order for the deployed version to work? Modify your existing code to use config variables, then set those config variables when you get to that section.

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

