const env = require("./config/env");
const express = require("express");

const { kafkaClient } = require("./factories/kafka-client-factory");

const kafkaProducer = kafkaClient.producer();

const main = async () => {
  await kafkaProducer.connect();
  const server = express();
  server.use(express.json());
  server.post("/accounts", async (req, res) => {
    try {
        const { email } = req.body;
        const responses = await kafkaProducer.send({
          topic: env.EVENTS.TOPICS.ACCOUNTS.ACCOUNT_CREATED,
          messages: [
            {
              key: email,
              value: JSON.stringify({ email })
            }
          ]
        })
        res.status(200).end();
        console.log('Published message', { responses })
    } catch(error) {
      res.status(500).send(error);
    }
  });
  server.listen(env.PORT, () => {
    console.log(`Server listening on port ${env.PORT}`);
  });
};

main().catch(console.error);
