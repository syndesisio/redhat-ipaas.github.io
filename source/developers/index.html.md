---
title: Developers

language_tabs:
  - shell: UXD
  - ruby: UI
  - python: Backend
  - csharp: QE
  - php: Support
  - java: Resources
  - javascript: Planning
  - go: Notes

search: true
---

# Introduction

This guide assumes that you are either a developer or contributor of iPaaS. If you are looking for a guide to teach you the ins and outs of iPaaS and how to use it, please refer to the <a href="/users" rel="nofollow">User Guide</a>.

# Architecture

Coming soon.

# Getting Started

## API

The API can be run locally or you can use the staging API. If you'll strictly be working on the UI, or just want to get the app running as quickly as possible, we recommend using the API staging server rather than running it locally. 

### Running the API Locally

Instructions here.


### Authentication

>  To authorize via the UI, simply access it in your browser, where you'll be redirected to an OpenShift login/registration page where you are prompted for your name, email address, etc. You'll then be redirected to a  GitHub permissions page. You'll be prompted to grant OpenShift the proper permissions. Once you accept, you'll finally be granted access to the UI. You should only need to do this once. 


```ruby
<img src="https://cloud.githubusercontent.com/assets/3844502/24225759/9d8ebdd6-0f38-11e7-8c76-8d6ce48dda5f.jpg">
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
```

```shell
# With shell, you can just pass the correct header with each request
curl "api_endpoint_here"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
```

> Make sure to replace `meowmeowmeow` with your API key.

Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our [developer portal](http://example.com/developers).

Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: meowmeowmeow`

<aside class="notice">
You must replace <code>meowmeowmeow</code> with your personal API key.
</aside>


## Running the UI

Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.

Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

### If you'll be using the staging API

Coming soon.

### If you've set up the API locally

Coming soon.


# Models

## Connections

## Integrations

## Tags

## Templates

## Users

# Tests

## E2E Tests

Points of Contact: 

[Happy Path](https://issues.jboss.org/browse/IPAAS-285) for E2E Tests


## Unit Tests

We are very behind on unit tests.


# Contributing

## UI

We have a [Style Guide]() for the UI that can be found [here](). In addition, we follow the [official Angular 2 Style Guide]() when possible.


# Kittens

## Get All Kittens

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get()
```

```shell
curl "http://example.com/api/kittens"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let kittens = api.kittens.get();
```

> The above command returns JSON structured like this:

```json
[
  {
    "id": 1,
    "name": "Fluffums",
    "breed": "calico",
    "fluffiness": 6,
    "cuteness": 7
  },
  {
    "id": 2,
    "name": "Max",
    "breed": "unknown",
    "fluffiness": 5,
    "cuteness": 10
  }
]
```

This endpoint retrieves all kittens.

### HTTP Request

`GET http://example.com/api/kittens`

### Query Parameters

Parameter | Default | Description
--------- | ------- | -----------
include_cats | false | If set to true, the result will also include cats.
available | true | If set to false, the result will include kittens that have already been adopted.

<aside class="success">
Remember — a happy kitten is an authenticated kitten!
</aside>

## Get a Specific Kitten

```ruby
require 'kittn'

api = Kittn::APIClient.authorize!('meowmeowmeow')
api.kittens.get(2)
```

```python
import kittn

api = kittn.authorize('meowmeowmeow')
api.kittens.get(2)
```

```shell
curl "http://example.com/api/kittens/2"
  -H "Authorization: meowmeowmeow"
```

```javascript
const kittn = require('kittn');

let api = kittn.authorize('meowmeowmeow');
let max = api.kittens.get(2);
```

> The above command returns JSON structured like this:

```json
{
  "id": 2,
  "name": "Max",
  "breed": "unknown",
  "fluffiness": 5,
  "cuteness": 10
}
```

This endpoint retrieves a specific kitten.

<aside class="warning">Inside HTML code blocks like this one, you can't use Markdown, so use <code>&lt;code&gt;</code> blocks to denote code.</aside>

### HTTP Request

`GET http://example.com/kittens/<ID>`

### URL Parameters

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

