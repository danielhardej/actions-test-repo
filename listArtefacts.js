// A program to list the artefacts of a given repo using the Octokit library to interact with the GitHub API.
// The octokit.request method is used to send the API request. The first argument to this method is a string 
// that specifies the HTTP method and the API endpoint. The second argument is an object that contains the 
// parameters for the API request. The await keyword is used to pause the execution of the function until the
// API request is completed. The response from the API request is then logged to the console.
// This code is intended to be run in a Node.js environment. The @octokit/core library is used to interact with
// the GitHub API. The @octokit/core library is a lightweight version of the @octokit/rest library that is
// intended for use in environments that do not support the fetch API, such as Node.js.

const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

async function getArtifacts() {
    const response = await octokit.request('GET /repos/{owner}/{repo}/actions/artifacts', {
        owner: 'danielhardej',
        repo: 'actions-test-repo',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
    console.log(response.data);
}

getArtifacts();