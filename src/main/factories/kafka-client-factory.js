const { Kafka } = require("kafkajs");
const env = require("../config/env");

const brokers = [env.EVENTS.KAFKA_BOOTSTRAP_SERVER];

const makeKafkaClient = (brokers = []) => {
  return new Kafka({
    clientId: "accounts-discord-notifier",
    brokers,
  });
};

module.exports = {
  kafkaClient: makeKafkaClient(brokers),
};
