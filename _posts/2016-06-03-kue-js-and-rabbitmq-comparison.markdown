---
published: false
title: Kue.js and RabbitMQ comparison
layout: post
---
For message queue, 

# Kue.js
- REST style
- Redis as backend
- Web client polling to get results(?)
- Tutorials
  - [alarming with kue](http://www.grepstar.org/recipe-3-alarming-with-kue/)

# RabbitMQ
- RPC style
- [Web messaging](https://www.rabbitmq.com/devtools.html#web-messaging)
  - [sockjs-client](https://github.com/sockjs/sockjs-client)
  - [Web STOMP RabbitMQ plugin](https://www.rabbitmq.com/web-stomp.html)

# References
- [queues.io](http://queues.io/)