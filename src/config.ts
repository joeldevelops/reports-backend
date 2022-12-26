export default Object.freeze({
  runtimeEnv: process.env.RUNTIME_ENV || "development",
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL,
  auth: {
    privateKey: process.env.JWT_PRIVATE_KEY,
  },
});
