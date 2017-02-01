---
permalink: /backend/
title: "Backend"
---

The backend is hosted in the [fabric8-forge][]{:target="_blank"} repository and uses the [fabric8][]{:target="_blank"} platform and a 
[Forge][]{:target="_blank"} wrapper / API which makes requests for persisted data. This wrapper is currently being abstracted via the Red Hat iPaaS API.

The fabric8 platform runs on OpenShift or Kubernetes, for which we have tools called [MiniShift][]{:target="_blank"}, useful for when developing locally. For instructions on how to run fabric8 on OpenShift using MiniShift, please 
refer to [these](https://fabric8.io/guide/getStarted/minishift.html){:target="_blank"} docs.

[Camel][]{:target="_blank"} is an application frequently run on fabric8 that is used to ease communication between enterprise-grade services and applications.

Nexus is a repository manager that we use for software components. A huge repository is the [Maven][]{:target="_blank"} Repository. We have our own Nexus repository where we deploy iPaaS Connections or [Camel][]{:target="_blank"} Components to.

### Data Storage
We have data storage options in git and in [Kubernetes][]{:target="_blank"} via configmaps.

### Challenges:
There is a gap between the Connections Creation and Connections Deployment to [Nexus][]{:target="_blank"}.

## Resources
- [Camel][]{:target="_blank"}
- [django-examples][]{:target="_blank"}
- [fabric8][]{:target="_blank"}
- [fabric8-forge][]{:target="_blank"}
- [fabric8-console][]{:target="_blank"}
- [Forge][]{:target="_blank"}
- [gofabric8][]{:target="_blank"}
- [Gogs][]{:target="_blank"}
- [Kubernetes][]{:target="_blank"}
- [Minishift][]{:target="_blank"}
- [Nexus][]{:target="_blank"}
- [OpenShift][]{:target="_blank"}
- [openshift-origin][]{:target="_blank"}


[Camel]: http://camel.apache.org
[django-examples]: https://github.com/fabric8io/django-examples
[fabric8]: https://fabric8.io/
[fabric8-console]: https://github.com/fabric8io/fabric8-console
[fabric8-forge]: https://github.com/fabric8io/fabric8-forge
[fabric8-forge-web]: https://github.com/fabric8io/fabric8-forge/tree/master/fabric8-forge-web
[Forge]: https://forge.jboss.org/
[Fuse]: http://developers.redhat.com/products/fuse/overview/
[gofabric8]: https://github.com/fabric8io/gofabric8
[Gogs]: https://gogs.io/
[hawtio-kubernetes]: https://github.com/hawtio/hawtio-kubernetes
[hawtio-kubernetes-api]: https://github.com/hawtio/hawtio-kubernetes-api
[Kubernetes]: http://kubernetes.io/
[Maven]: https://maven.apache.org/
[MiniShift]: https://github.com/MiniShift/minishift
[Nexus]: https://www.sonatype.com/nexus-repository-sonatype
[OpenShift]: https://www.openshift.com
[openshift-origin]: https://github.com/openshift/origin


