---
published: true
title: Best practice of mongoose connection
layout: post
---
Read through the [overview](https://github.com/Automattic/mongoose) on mongoose's github page and mongoose's document [connection.js](http://mongoosejs.com/docs/api.html#connection-js).

### Concepts

* There are two ways to connect to database: `mongoose.connect` and `mongoose.createConnection`.
* Use `mongoose.connect` if you only have one database. Use `mongoose.createConnection` if you need more connection instances(i.e. more databases to connect to).
* Mongoose buffers all the commands until it's connected to the database. No need to wait until it connects to MongoDB in order to define models, run queries, etc.
* `mongoose.connection` is the `Connection` instance when using `mongoose.connect`.
* `mongoose.createConnection` returns a `Connection` instance.
* Once connected, the `open` event is fired on the `Connection` instance.

### Events

`connected` then `open`, `disconnected` then `close`.

### Code example

```javascript
var mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost/my_database')
    .connection
    .once('open', function(){ /** open */ })
    .on('disconnected', function(){ /** disconnected */ })
    .on('error', function(){ /** error */ });
```

** Better **

Avoid latency when setting up event listener to capture events.

```javascript
var mongoose = require('mongoose');
mongoose
    .connection
    .once('open', function(){ /** open */ })
    .on('disconnected', function(){ /** disconnected */ })
    .on('error', function(){ /** error */ });
mongoose.connect('mongodb://localhost/my_database');
```