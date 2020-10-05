const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const { request } = require("@octokit/request");

const octokit = new Octokit({
    auth: "389a2376d9f0ad3c38a5a3078def2eaf6f7f0ab9 ",
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

// ;(async () => {
//async function getContributors() {}

async function getContributors() {
  console.log('calling');
  owner = "ory";
  repo = "kratos";
  const TestData = await octokit.repos.listContributors( owner, repo);  

  console.log(TestData);
}
// })()

console.log('starting getting data');
console.log(getContributors());  
console.log('end getting data');
