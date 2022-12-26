import { Model, DataTypes } from "sequelize";

import sequelize from ".";
import thread from "./threads";

// We will probably want models for documents and for groups
// TODO: Relation to documents
class comment extends Model {
  public id!: number;
  public content!: string;
  public page!: number;
  public paragraph!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: { type: DataTypes.STRING, allowNull: false },
    page: { type: DataTypes.INTEGER, allowNull: false },
    paragraph: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "comment",
  }
);

comment.hasMany(thread, { foreignKey: "parentId" });
thread.belongsTo(comment, { foreignKey: "parentId" });

export default comment;
