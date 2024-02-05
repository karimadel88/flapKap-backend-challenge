import db from "app/general/database/connection-database";
import { DataTypes, Model, ModelDefined, Optional } from "sequelize";

const Product = db.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amountavailable: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sellerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Product",
    tableName: "products",
    createdAt: "createdat",
    updatedAt: "updatedat",
  },
);

export default Product;
