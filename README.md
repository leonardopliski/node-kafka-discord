### Node.js Pub Sub API with Apache Kafka & Discord Integration

This is a simple demo Node.js API that receives a **POST** request on the **/accounts** route and produces a message to the **account-created** topic.

There is also a **consumer** API that subscribes to this topic and publishes this message to the discord group via **webhook**.

## Local Installation

First of all, clone this `repo`:

```sh
git clone git@github.com:leonardopliski/node-apache-kafka.git
```

Move to the project dir:

```sh
cd node-apache-kafka/
```

[Create a discord Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)

Set the discord webhook environment variable: **DISCORD_WEBHOOK_URL**

```sh
export DISCORD_WEBHOOK_URL=<your-webhook-url-right-here>
```

With [NVM](https://github.com/nvm-sh/nvm) run:

```sh
nvm use
```

With [NPM](https://www.npmjs.com/) run:

```sh
npm install
```

With [Docker Compose](https://docs.docker.com/compose/) installed just run:

```sh
npm run up
```

Start the main API.

```sh
npm run start:server
```

Start the subscriber API.

```sh
npm run start:consumer
```

Done! Execute a POST request to the following URL:

```
http://localhost:5050/accounts

body: {
  "email": "test@gmail.com"
}
```

A message should appear on the Discord group.
> ## Technologies 

* Kafka
* ZooKeeper
* Axios
* Node.js
* NVM
* Express
* Nodemon
