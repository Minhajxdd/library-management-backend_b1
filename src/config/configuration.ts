export default () => ({
  port: process.env.PORT || 3000,
  database: {
    connectionString: process.env.MONGO_URL,
  },
  node_environment: {
    node_env: process.env.NODE_ENV,
  },
  domain: {
    domain_name: process.env.DOMAIN,
  },
});
