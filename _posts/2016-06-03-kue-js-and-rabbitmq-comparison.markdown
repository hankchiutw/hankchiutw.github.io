---
published: false
title: Kue.js and RabbitMQ
layout: post
---
For [message queue](https://en.wikipedia.org/wiki/Message_queue).

# Kue.js
- REST style
- Redis as backend
- Not really a message queue
- Web client polling to get results(?)
- Exposed JSON API
- Tutorials
  - [alarming with kue](http://www.grepstar.org/recipe-3-alarming-with-kue/)

# RabbitMQ
- RPC style
- [Web messaging](https://www.rabbitmq.com/devtools.html#web-messaging)
  - [sockjs-client](https://github.com/sockjs/sockjs-client)
  - [Web STOMP RabbitMQ plugin](https://www.rabbitmq.com/web-stomp.html)
- Not for browser
- Possible usage:
  - Socket.io in client and server, amqplib in server or [relay to rabbitmq](https://gist.github.com/adunkman/1611789)
  - Socket.io in client, socket.io-amqp in server
  - sockjs-client in client, Web STOMP plugin enabled in server
  - sockjs-client in client, sockjs-node in server

# References
- [queues.io](http://queues.io/)
- [stackoverflow: RabbitMQ v.s Socket.io](http://stackoverflow.com/questions/6636213/rabbitmq-vs-socket-io)