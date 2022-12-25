export default Object.freeze({
  runtimeEnv: process.env.RUNTIME_ENV,
  port: process.env.PORT,
  logLevel: process.env.LOG_LEVEL,
  auth: {
    privateKey: process.env.JWT_PRIVATE_KEY
  }
});