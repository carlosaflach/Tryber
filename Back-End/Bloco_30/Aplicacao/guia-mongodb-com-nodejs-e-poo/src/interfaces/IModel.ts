// ./src/interfaces/IModel.ts

interface IModel<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
  update(id: string, payload: Partial<T>): Promise<T | null>
  readAll():Promise<T[]>
  destroy(_id:string,):Promise<T | null>,
}

export default IModel;