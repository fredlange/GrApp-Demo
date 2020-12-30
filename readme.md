# GrApp Demo
This is only demos of GrApp. For the source visit [this repository](https://github.com/fredlange/GrApp)

## Getting started
* First start the manager `npm run start:orator`
* App `npm run start:app1:dev`
* App2 `npm run start:app2:dev`
* Spectator `npm run start:spectator:dev`

### The Orator
The orator is the only application with a fixed port. All apps notify the orator of their liveliness and the orator then broadcast that state to all other apps, hence keeping in sync (or so they should be).
### Demo apps
App and app2 are the most simplistic apps to showcase how GrApp is used by an end user
### Spectator
The spectator provided sets up a graphiql instance to be able to use http to query against the flexible schema. The subschemas of the spectator will use UDP.