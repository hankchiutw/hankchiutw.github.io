---
published: true
title: Best practice of mongoose connection
layout: post
---
Read through the [overview](https://github.com/Automattic/mongoose) on mongoose's github page. Here are some points to mention:

* There are two ways to connect to database: `mongoose.connect` and `mongoose.createConnection`.
* Use `mongoose.connect` if you only have one database. Use `mongoose.createConnection` if you need more connection instances(i.e. more databases to connect to).
* Mongoose buffers all the commands until it's connected to the database. No need to wait until it connects to MongoDB in order to define models, run queries, etc.
* `mongoose.connection` is the `Connection` instance when using `mongoose.connect`.
* `mongoose.createConnection` returns a `Connection` instance.
* Once connected, the `open` event is fired on the `Connection` instance.

Code example:

**Bad**

~~~
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');
~~~