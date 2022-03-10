---
sidebar_position: 1
---
# Getting started

Scribe is a solution for DevSecOps teams and Security teams who want to govern security of software in the development process. Scribe enables you to collect and share evidence about the level of the process security you utilize. You can share such evidence with stakeholders (software consumers) internal to your organization or external to it. For example, with Scribe you can analyze and share the Software Bill of Materials (SBOM) of your product with your customers.
# QuickStart

Find out what all the components that made their way into your Node.js’s project final docker image are and make sure they are all identical when compared to their origin.
Scribe tracks all files from their origin source code repo up to the final image and validates that each file’s hash value hasn’t changed if it wasn’t supposed to. 
## Generating a report through the Scribe site

At the moment the only way to get the scribe tool’s analysis report is to run it through the scribe website. Go to: TBD and register to get an account with Scribe. This account will allow you to always get back to the starting page and re-run the code to generate a new report.

•	Open a bash session

•	To download the Scribe tool type in the following command:
> curl https://static.snyk.io/cli/latest/snyk-install.sh | bash

•	To run the tool on a specific Git repo and a specific Docker image, enter the following command:
> --source-code <git-path> --artifact <artifact path> --scribe-token 321hhjkl22



