import { ModelFn } from "../db/index.js";

class serviceFn {
  constructor(ModelFn) {
    this.ModelFn = ModelFn;
  }

  async addData(param) {
    // const { title, content } = param;
    // const newData = { title, content };
    const createdNewData = await this.ModelFn.create(param);

    return createdNewData;
  }

  async getDatas(id) {
    const datas = await this.ModelFn.findAll(id);

    return datas;
  }

  async delDatas() {
    const deletedData = await this.ModelFn.delete();

    return deletedData;
  }
}

const ServiceFn = new serviceFn(ModelFn);

export { ServiceFn };
