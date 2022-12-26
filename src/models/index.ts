import { Sequelize } from "sequelize";

import config from "../config";
const dbConfig = config[config.runtimeEnv];

let sequelize;
if (dbConfig?.url) {
  sequelize = new Sequelize(dbConfig.url, dbConfig);
} else {
  sequelize = new Sequelize(dbConfig);
}

export default sequelize;
