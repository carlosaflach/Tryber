// ./src/models/MongoModel.ts

import { Model, isValidObjectId, UpdateQuery } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';
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
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id });
  }

  public async update(id: string, payload: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    const updated = await this._model.findByIdAndUpdate(
      { id }, 
      { ...payload } as UpdateQuery<T>, 
      { new: true },
    );

    if (!updated) return null;

    return updated;
  }

  public async readAll(): Promise<T[]> {
    return this._model.find();
  }

  public async destroy(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete({ _id });
  }
}

export default MongoModel;