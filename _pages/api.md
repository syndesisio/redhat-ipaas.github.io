---
permalink: /api/
title: "API"
---

While iPaaS can certainly be considered to have a Service Oriented Architecture (SOA), some of its services, notably the API, use a Layered Architecture. If you'd like to read more about this, you are highly encouraged
 to read [this blog post](http://byterot.blogspot.com/2013/10/api-layer-and-its-responsibilities-rest-viewpoint-webapi-csds-aspnetwebapi.html).
 

## Contributing
Pull requests are always welcome. Please be sure to read through this entire guide before opening up a
 pull request for the API.

**We also highly recommend reading the [Technical Overview](https://github.com/redhat-ipaas/ipaas-api/blob/master/docs/overview.md) and [Contributing](https://github.com/redhat-ipaas/ipaas-api/blob/master/docs/contributing.md)
docs before contributing.**

### Getting Started
- Fork the repository you'd like to collaborate on.
- Clone your fork of that repository, NOT the original repository directly.
- Install dependencies with `npm i` or `npm install`.
- Run the server with `npm start`.


### Your Environment
**NOTE:** By default, [Express.js](http://expressjs.com/) will define your `process.env.NODE_ENV`, or your Node.js environment variable, as `development` via `app.get('env')` if you have not defined one. For more information, see [here](http://expressjs.com/en/4x/api.html#app.get). For the purposes of this documentation, we will assume you are in `development` mode the entire time and will add relevant comments for other environments. If you'd like to use another environment, we support the following: `development`, `staging`, `test`, `production`

## Data Layer

### SQLite
If you will be working on this project locally, it is likely you'll want to use SQLite as the data store. We recommend downloading a GUI for SQLite, such as [DB Browser for SQLite](http://sqlitebrowser.org/), to be able to view and edit the data easily. Once you have run the API server at least once, a `./db.development.sqlite` file will be created in the root of the project. To view its structure or any seed data (more on that below), open DB Browser for SQLIte, press the 'Open Database' button and select the generated `./db.development.sqlite` from the root of the project.

**Adding or Editing Dummy or Seed Data**
You can view the database structure, browse through and edit data via the GUI mentioned above. Still, 
the best way to add dummy data is through JSON files in `/data/fixtures/{environemnt}.json` and enabling `seedDataOnInit` in your `/config/{environment}.json` file. You can still view them in the GUI.

We provide a set of seed JSON files to populate the database, which you can enable to occur automatically on starting up the server by going to `/config/{environment}.json` and changing `db.options.seedDataOnInit` from `false` to `true`. Note that by default it will automatically use the JSON file located at `/src/data/fixtures/development.json` to populate the database, which you can change in the same configuration file under `db.options.seederStoragePath`. The sqlite file is generated in the root of the project at `/db.development.sqlite`.


## Guidelines


## Models
To see a list of models, go to the [`src/models`](https://github.com/redhat-ipaas/ipaas-api/blob/master/src/models/index.js) file. Each subdirectory 
there is a model, which contains a file for each ORM it needs to be mapped to. By default, this ORM is
 Sequelize. We haven't found the need to use another ORM, but feel free to do so as this application 
 is setup to handle swapping out ORMs quite easily, so long as you provide the mapping via a file 
 under the model subdirectory.

Model associations are also done specific to the ORM, so are defined in an `associations` method 
within the `sequelize.js` files of the model subdirectories.

### Creating Your Own Models
There are a few things you need to do in order to create a new model:

- **Create the model directory and ORM file.** You'll have to do this for each data store you will be using. For instance, if you are using Sequelize, you'd create the following file: `src/models/{modelName}/sequelize.js`. This is where you define the attributes you would like for your model. For a list of support data types in Sequelize, see [here](http://docs.sequelizejs.com/en/v3/docs/models-definition/#data-types).
- **Create the routes file for the API.** It should be formatted like so: `src/api/{modelName}.js`. This is going to be where your route methods for the API or interface go. All routes are defined in [`./router.js`](https://github.com/redhat-ipaas/ipaas-api/blob/master/router.js), but they usually reference methods that are located in `/src/api/{modelName}.js`.
- **Create the repository file for the model.** Example: `src/repositories/{modelName}Repository.js`. There is an example in `src/repositories/ExampleRepository.js`. This is just a necessary step that allows you to provide custom methods that can be called by the service, such as `.getAllWithAssociations`, or things that may be specific to that model (e.g. `.createSquirrelWithoutTail`), should you need them. Most of the time, the `ExampleRepository.js` in that directory file will suffice without any custom methods, of course renamed to your model instead of `Example`.
- **Create the service file for the model.** Example: `src/services/{modelName}Service.js`.There is an example in `src/services/ExampleService.js`. This is just a necessary step that allows you to provide custom formatting when you are using more than one data store, or repository. In the near future, we hope to make this an optional step and not a requirement.
- **Create dummy seed data for the model. (optional)** Open up the following file: `src/data/fixtures/{your environment}.json` and add whatever dummy data you'd like your database to be populated with.
- **Write unit tests. (optional)** This is optional if you'll be using this repository for your own purposes, but if you want to create a PR and have it merged back into the codebase you'll definitely need unit tests for your code.

### Restarting after code changes
For development you can have the service restart itself whenever a code or configuration change is made, simply run:

```
npm run watch:restart
```

## Testing
- Tests are run by the CI against pull requests when they're opened and whenever commits are merged to master.
- To run tests locally:
```
npm test
```
- To run tests automatically when you make code changes:
```
npm run watch:test
```  

## Code Best Practices

- Models, repositories, and services should only be called when needed, and on an individual basis.
- Constructors/classes should be used for EACH model, which will allow for those models to be instantiated individually, as opposed to instantiating the models layer which would include all models. The main models file should only require the individual model file. At the top of that model file should be `object var [Model] = {}` with default parameters of that model. Functions will then determine how to map to Sequelize (default ORM) and import the files, etc. For example, the Users controller calls the `UserService`, which calls the `UserRepository` (and possibly other repositories), which calls the User model, for instance.
- Model parents and children will all be on the same table, and use the same classes.
- Layers: You **must** specify the layer name and the model name. This is very important!
- **Extends Function**: Used for extending `Base[Layer]` with `[Model][Layer]`. Allows you to create an object that has no properties of its own, but inherits everything from the parent's prototype. The object is then used as the layer (service, repository, etc.) instance/object. Make sure each base class constructor is EMPTY. Only add reusable properties to it, which go in the prototype to then be inherited by other layers. Otherwise, those properties in the constructor will be added to the prototype chain, rather than ONLY using the child's (or layer’s) properties. The parent will never be modified once the child is, because only the parent’s prototypes are inherited. This protects the original object retrieved by Sequelize from the database from being modified by any user of the subsequently created class. You should never have to use the uber property, or the uber Class, EVER, because it references the BaseRepository, or BaseService, directly.




