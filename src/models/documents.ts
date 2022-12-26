import { Model, DataTypes } from "sequelize";

import sequelize from ".";
import comment from "./comments";

class document extends Model {
  public id!: number;
  public title!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

document.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize,
        modelName: "document",
    }
);

// Relations go in one file so as to avoid circular imports
document.hasMany(comment, { foreignKey: "documentId" });
comment.belongsTo(document, { foreignKey: "documentId" });

export default document;