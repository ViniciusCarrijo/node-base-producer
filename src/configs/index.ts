export default {
  redis: {
    host: process.env.REDIS_HOST! || 'localhost',
    password: process.env.REDIS_PASSWORD! || 'redispw',
    port: Number(process.env.REDIS_PORT!) || 49153,
  },
};
