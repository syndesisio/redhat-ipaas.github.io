---
permalink: /technical-overview/
title: "Technical Overview"
---

## API

While iPaaS can certainly be considered to have a Service Oriented Architecture (SOA), it consists of 
an API that uses a Layered Architecture, written in Node.js. If you'd like to read more about this, see 
[here](http://byterot.blogspot.com/2013/10/api-layer-and-its-responsibilities-rest-viewpoint-webapi-csds-aspnetwebapi.html). This 
is to allow swapping out ORMs, data stores, and services easy to do. These abstraction layers make it 
highly configurable and secure.

## Client

The client is written in TypeScript and uses Angular 2 and Webpack 2.

## Backend

The backend runs on the fabric8 platform, which uses Camel for service-to-service integration.
