import { Schema } from "mongoose";

const DataSchema = new Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    Text: {
      type: String,
      required: true,
    },
  },
  {
    collection: "Data",
    timestamps: true,
  }
);

export { DataSchema };
