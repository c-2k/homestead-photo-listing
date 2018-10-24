const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  owner: String,
  description: String,
  forks: Number
});

//RESOLVED: Refactor the client so that when the page loads, the top 25 repos are displayed on the page.

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  var newRepo = new Repo({
    id: repo.id,
    name: repo.name,
    url: repo.html_url,
    owner: repo.owner.login,
    description: repo.description,
    forks: repo.forks
  });
  // This function should save a repo or repos to
  newRepo.save(err => {
    console.log('Your content has been saved!')
    if (err) {
      console.error(err);
    }
  });
  // the MongoDB
};

let matchId = (owner) => {
  var identify = Repo.findOne({owner: owner})
  return identify.exec();
}

var matchAll = () => {
  let identify = Repo.find({}).sort({forks: "descending"}).limit(25)
  return identify.exec();
}

module.exports.save = save;
module.exports.matchId = matchId;
module.exports.matchAll = matchAll;