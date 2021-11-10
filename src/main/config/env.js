const env = {
  PORT: process.env.PORT || 5050,
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL || '',
  EVENTS: {
    KAFKA_BOOTSTRAP_SERVER: process.env.KAFKA_BOOTSTRAP_SERVER || "localhost:9092",
    CONSUMERS: {
      GROUPS: {
        ACCOUNTS: "accounts"
      },
    },
    TOPICS: {
      ACCOUNTS: {
        ACCOUNT_CREATED: 'account-created'
      }
    }
  }
};

module.exports = env;
