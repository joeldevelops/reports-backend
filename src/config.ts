export default Object.freeze({
  runtimeEnv: process.env.RUNTIME_ENV || "development",
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL,
  auth: {
    privateKey: process.env.JWT_PRIVATE_KEY,
  },
  // database settings
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
});
