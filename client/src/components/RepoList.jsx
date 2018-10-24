import React from 'react';

//RESOLVED: Make each repo's name in the table link to that repo's page on GitHub.

const RepoList = (props) => (
  <div>
    <h3> Repo List Component </h3>
    These are the top 25 repos.
    { props.repos.map( (ele) => {
         return <h5> <a href={ele.url}>
             Project: {ele.name}
              </a>
           , Owner: {ele.owner}, FORKS: {ele.forks}
           </h5>
    })}
     Total: {props.repos.length} repos.
  </div>
)

export default RepoList;