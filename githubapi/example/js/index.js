const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const { request } = require("@octokit/request");
var fs = require('fs');


const octokit = new Octokit({
    auth: "access_token ", // you need to put a valid personal access token here
    userAgent: 'actions test',
    timeZone: 'Europe/Amsterdam',
    baseUrl: 'https://api.github.com',

    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
      },
      request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
      }
    })

async function getContributors() {
  console.log('calling');
  owner = "ory";
  repo = "kratos";
  anon = "true"
  per_page = "500";
  page = "0"
  const TestData = await octokit.repos.listContributors({owner, repo});  

  console.log(TestData); //This will display the fetched information in console
  fs.writeFile('contributors.json', 'TestData', function (err) {  // this should write the data to contributors.json, but somehow its not happening...
    if (err) throw err;
    console.log('Saved!');
  });
}

console.log('starting getting data');
getContributors();
console.log('end getting data');

