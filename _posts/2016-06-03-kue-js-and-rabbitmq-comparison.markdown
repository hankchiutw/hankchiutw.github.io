---
published: false
title: Kue.js and RabbitMQ
layout: post
---
For message queue.

# Kue.js
- REST style
- Redis as backend
- Web client polling to get results(?)
- Exposed JSON API
- Tutorials
  - [alarming with kue](http://www.grepstar.org/recipe-3-alarming-with-kue/)

# RabbitMQ
- RPC style
- [Web messaging](https://www.rabbitmq.com/devtools.html#web-messaging)
  - [sockjs-client](https://github.com/sockjs/sockjs-client)
  - [Web STOMP RabbitMQ plugin](https://www.rabbitmq.com/web-stomp.html)
- Probably usage:
  - Socket.io in client and server, amqplib in server
  - sockjs-client in client, Web STOMP plugin enabled in server

# References
- [queues.io](http://queues.io/)