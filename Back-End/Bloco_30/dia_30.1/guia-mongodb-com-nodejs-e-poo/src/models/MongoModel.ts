// ./src/models/MongoModel.ts

import { Model, isValidObjectId } from 'mongoose';
import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async update(id: string, payload: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('InvalidMongoId');
    const updated = await this._model.findByIdAndUpdate(id, payload);

    if (!updated) return null;

    return updated;
  }
}

export default MongoModel;