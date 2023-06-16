import { model } from "mongoose";
import { DataSchema } from "../schemas/schema.js";

const dataSchema = model("users", DataSchema);

export class modelFn {
  async create(param) {
    const createdNewData = await dataSchema.create(param);

    return createdNewData;
  }

  async findAll(id) {
    const datas = await dataSchema.find({ID:id});
    
    return datas;
    // dataSchema.find({ email: /foo\./bar/ }).find({ age: { $gte: 30 }});
      
  }

  async delete() {
    const deletedData = await dataSchema.deleteMany();
    
    return deletedData;
  }
}

const ModelFn = new modelFn();

export { ModelFn };
