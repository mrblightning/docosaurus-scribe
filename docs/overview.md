---
sidebar_position: 1
---
# What is Scribe

Scribe is a leading security solution for organizations that are concerned about threats from their software supply chain.

## Who needs Scribe? ##

Scribe continuously assures your software is secure. It could be used by:


- DevSecOps teams securing software builds
- Security teams responsible for software in-use
- Larger scale development teams collaborating via remote tools


## How Scribe works  

### Software Bill of Materials (SBOM) 

An SBOM is a standard format for documenting information about components of a software artifact. With Scribe tools that you can run in your pipeline, you can generate an SBOM for every build.

SBOMs have many uses, they can, for example, be used to identify vulnerabilities in dependencies.

\>\> [Read more about SBOM](https://scribesecurity.com/sbom/)

After creating your SBOM, Scribe validates your software build. 
### Integrity Validation and Open Source Authentication 

Scribe validates the integrity of your software build by tracking the hash value of every file from its origin to the built artifact.


The origin of the files can be internal (from your organization), or from an external third party. For example: 

  - A code repo
  - A package manager
  - A container registry

In the validation process, Scribe flags suspicious modifications while accounting for legitimate changes such as linting and compilation.

With its open-source package intelligence, Scribe authenticates the open-source components, assuring that they were not maliciously modified.


Once your pipeline is integrated and configured with Scribe, every time you run the pipeline, Scribe creates an SBOM and an integrity report. Your builds are automatically secured and analyzed. 

<!--- Results --->
### Results
Scribe enriches SBOMs with validation information and creates integrity reports that you can easily share with stakeholders.
> In this release, Scribe validates Node.js projects and npm packages.

### Signing critical files 

Throughout the software development lifecycle (SDLC), advanced users can cryptographically sign and validate critical evidence with customer keys. Cryptographically signing and validating provides resistance against tampering. It extends software signing to the SDLC.


