import { IUser } from '../interfaces';
import { UserModel } from '../models';
import connection from '../models/connection';

export default class UserService {
  private userModel: UserModel;
  constructor() {
    this.userModel = new UserModel(connection)
  }

  public async getAll(): Promise<IUser[]> {
    const result = await this.userModel.getAll();
    return result
  }

  public async getById(id: number): Promise<IUser> {
    const result = await this.userModel.getById(id);
    return result[0]
  }

  public async create(name: string, email: string, password: string): Promise<IUser> {
    const result = await this.userModel.create(name, email, password);
    return result
  }

  public async update(id: number, name: string, email: string, password: string): Promise<IUser> {
    const result = await this.userModel.update(id, name, email, password);
    return result
  }

  public async destroy(id: number): Promise<void> {
    await this.userModel.destroy(id);
  }
}
