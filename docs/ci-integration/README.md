---
description: Setting up your Continuous Integration (CI)
---
 
 
# Setting up your Continuous Integration (CI)
 
Adding Scribe Hub code snippets to your CI pipeline will automate the process of generating SBOMs and analyzing reports.
 
The following scheme demonstrates the two points on your CI pipeline to enter the Scribe Hub code snippets:
 
<img src='../img/ci/ci_diagram.jpg' alt='Generic Pipeline' width="100%"/>

 
Once your CI pipeline is set up, running your pipeline (your builds) will activate Scribes' evidence collectors automatically. Your project's code integrity will be validated and the results will be uploaded to Scribe Hub.
 
## Two points of validation
These are the two points for adding Scribe Hub code:
1. Source Code Checkout - Generates an image of your Node.js source code file structure after checkout. This is an important yet an ___optional___ point.
1. Image of final code - Generates an SBOM right after the final image is created. This is the main and ___mandatory___ point.
 
## Supported CIs
 
Currently, Scribe natively supports the following CI setups:
 * [Jenkins over Kubernetes](../docs/ci-integration/jenkins "Jenkins over Kubernetes") - Please note that support is available for **Jenkins over Kubernetes** only.
 * [GitHub actions](../docs/ci-integration/github-actions "GitHub actions").
 
If you have another CI, you can integrate it using these [generic integration instructions](../docs/ci-integration/general "generic integration instructions").  
 
OK, Let's get started!
 
<!--<img src='../img/ci/jenkins.png' alt='integrating with Jenkins over Kubernetes' width="20px"/>
<img src='../img/ci/github.png' alt='integrating with GitHub actions' width="20px"/>-->

