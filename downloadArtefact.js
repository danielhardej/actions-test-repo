// A program to download an artefact from a given repo using the Octokit library to interact with the GitHub API.
// The octokit.rest.actions.downloadArtifact method is used to send the API request. The parameters for 
// the API request are provided as an object. The await keyword is used to pause the execution of the 
// function until the API request is completed. The response from the API request is then logged 
// to the console. This code is intended to be run in a Node.js environment.


const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
})

async function downloadArtifacts() {
    const response = await octokit.rest.actions.downloadArtifact({
        owner: 'danielhardej',
        repo: 'actions-test-repo',
        artifact_id: 1190868053,
        archive_format: 'zip',
    })
    console.log(response);
    // print response status code
    console.log(response.status);
}

downloadArtifacts();