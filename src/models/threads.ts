// Threaded comments

import { Model, DataTypes } from "sequelize";

import sequelize from ".";

class thread extends Model {
    public id!: number;
    public content!: string;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }

thread.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize,
        modelName: "thread",
    }
);

export default thread;