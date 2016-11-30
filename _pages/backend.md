---
permalink: /backend/
title: "Backend"
---

The backend is hosted in the [fabric8-forge](https://github.com/fabric8io/fabric8-forge) repository and uses the [Fabric8](https://fabric8.io/) platform and a [Forge](https://forge.jboss.org/) wrapper / API which makes requests for persisted data. This wrapper is currently being abstracted via the Red Hat iPaaS API.

The fabric8 platform runs on OpenShift or Kubernetes, for which we have tools called [MiniShift][5], useful for when developing locally. For instructions on how to run fabric8 on OpenShift using MiniShift, please 
refer to [these](https://fabric8.io/guide/getStarted/minishift.html) docs.

Camel is an application frequently run on fabric8 that is used to ease communication between enterprise-grade services and applications.

Nexus is a repository manager that we use for software components. A huge repository is the [Maven][8] Repository. We have our own Nexus repository where we deploy iPaaS Connections or Camel Components to.

### Data Storage
We have data storage options in git and in Kubernetes via configmaps.

### Challenges:
There is a gap between the Connections Creation and Connections Deployment to [Nexus][7].

## Resources
- [Apache Camel][10]
- [fabric8][1]
- [fabric8-forge][3]
- [Forge][2]
- [gofabric8][13]
- [Gogs][11]
- [Kubernetes][9]
- [Minishift][5]
- [Nexus][7]
- [OpenShift][3]



[1]: https://fabric8.io/ "fabric8"
[2]: https://forge.jboss.org/ "Forge"
[3]: https://github.com/fabric8io/fabric8-forge "fabric8-forge"
[4]: https://www.openshift.com "OpenShift"
[5]: https://github.com/MiniShift/minishift "MiniShift"
[6]: https://github.com/fabric8io/fabric8-console "fabric8 Console"
[7]: https://www.sonatype.com/nexus-repository-sonatype "Nexus"
[8]: https://maven.apache.org/ "Maven"
[9]: http://kubernetes.io/ "Kubernetes"
[10]: http://camel.apache.org "Camel"
[11]: https://gogs.io/ "Gogs"
[12]: http://developers.redhat.com/products/fuse/overview/ "Fuse"
[13]: https://github.com/fabric8io/gofabric8 "gofabric8"

