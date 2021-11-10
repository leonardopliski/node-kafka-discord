const env = {
  PORT: process.env.PORT || 3000,
  EVENTS: {
    KAFKA_BOOTSTRAP_SERVER: process.env.KAFKA_BOOTSTRAP_SERVER || "localhost:9092",
    TOPICS: {
      ACCOUNTS: {
        ACCOUNT_CREATED: 'account-created'
      }
    }
  }
};

module.exports = env;
