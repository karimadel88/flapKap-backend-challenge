import db from "app/general/database/connection-database";
import { RoleType } from "app/general/utils/types";
import Product from "app/products/model/product";
import { DataTypes, Model, ModelDefined, Optional } from "sequelize";

/**
 *
 */
// class User extends Model {
//   public id!: number;
//   public username!: string;
//   public password!: string;
//   public deposit!: number;
//   public role!: string;
//   public createdat!: Date;
//   public updatedat!: Date;
// }

const User = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deposit: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "User",
    tableName: "users",
    createdAt: "createdat",
    updatedAt: "updatedat",
  },
);

User.hasMany(Product, { foreignKey: "sellerid" });

export default User;
