const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");
const { request } = require("@octokit/request");


const octokit = new Octokit({
    auth: "access_token",
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

async function TestRequest() {
  const TestData = octokit.repos.listContributors({
    owner: 'ory',
    repo: 'kratos',
  });
  return {TestData}
}
console.log('starting getting data');
console.log(TestRequest);
console.log('end getting data');