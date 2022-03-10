---
sidebar_position: 6
---

# verify Command

You can use the ‘verify’ command to check a .sig file created by bomber and check that its signature is valid. As part of the check you’ll be able to see the signer’s email address or other credential used in the siging – GitHub or Microsoft credential. This assumes the use of the default signing mechanism using the online sigstore library. The verification uses cosign so you need to be online to verify an attestation. It’s possible to change the configuration file to use different methods of signing. To learn more go to the configuration file chapter. 

Here are some examples to using this command:  
```scribe verify alpine:latest``` – Search for a .sig file in the cache folder (by default ‘tmp/scribe) and verify its signature.

```scribe verify yourrepo/yourimage:tag``` - defaults to using images from a Docker daemon. If Docker is not present, the image is pulled directly from the registry.

```scribe verify docker:yourrepo/yourimage:tag``` - explicitly use the Docker daemon  
```scribe verify docker-archive:path/to/yourimage.tar``` - use a tarball from disk for archives created from "docker save"  
```scribe verify oci-archive:path/to/yourimage.tar``` - use a tarball from disk for OCI archives (from Skopeo or otherwise)  
```scribe verify dir:path/to/yourproject``` - read directly from a path on disk (any directory)  
```scribe verify registry:yourrepo/yourimage:tag``` - pull image directly from a registry (no container runtime required)  
```scribe verify file:path/to/yourproject/file``` - read directly from a path on disk (any single file)  

Here are the flags relevant to the ‘verify’ command.

<table>
  <tr>
    <th>Short</th>
    <th width='18%'>Full Flag</th>
    <th>Format</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>-C</td>
    <td>--context-type</td>
    <td>string</td>
    <td>The context of the bomber’s run – what is the source of the CLI tool. The current options are Jenkins, GitHub, and Local. The default is "Local" and it’s added to the attestation created.</td>
  </tr>
  <tr>
    <td>-n</td>
    <td>--name</td>
    <td>string</td>
    <td>Custom project name to be added to the attestation.</td>
  </tr>  
  <tr>
    <td>-h</td>
    <td>--help</td>
    <td></td>
    <td>Presents all the help information for the ‘verify’ command.</td>
  </tr>
</table>