const { default: axios } = require("axios");
const env = require("./config/env");
const { kafkaClient } = require("./factories/kafka-client-factory");

const kafkaConsumer = kafkaClient.consumer({
  groupId: env.EVENTS.CONSUMERS.GROUPS.ACCOUNTS,
});

const main = async () => {
  await kafkaConsumer.connect();
  await kafkaConsumer.subscribe({
    topic: env.EVENTS.TOPICS.ACCOUNTS.ACCOUNT_CREATED,
    fromBeginning: true,
  });
  await kafkaConsumer.run({
    eachMessage: async ({ message }) => {
      const { email } = JSON.parse(message.value.toString());
      const content = `Account created, email: ${email}`;
      await axios.post(env.DISCORD_WEBHOOK_URL, { content });
    },
  });
};

main().catch(async (error) => {
  console.error(error);
  try {
    await kafkaConsumer.disconnect();
  } catch (error) {
    console.error("Failed to gracefully disconnect from consumer", error);
  }
});
