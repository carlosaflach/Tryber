import { Pool, ResultSetHeader, RowDataPacket,  } from 'mysql2/promise';
import IUser from '../interfaces/IUser';
import connection from './connection';

export default class UserModel {
  constructor(private connection: Pool) {
    this.connection = connection
  }

  public async getAll(): Promise<IUser[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM users')
    return result as IUser[]
  }

  public async getById(id: number): Promise<IUser[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM users WHERE id= ?', [id])
    return result as IUser[]
  }

  public async create(name: string, email: string, password: string): Promise<IUser> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users(name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    const {insertId} = result;
    return {id: insertId, name, email, password}
  }

  public async update(id: number, name: string, email: string, password: string): Promise<IUser> {
    await this.connection.execute<ResultSetHeader>(
      'UPDATE users SET name= ?, email= ?, password= ? WHERE id= ?', [name, email, password, id]);
    return {id, name, email, password}
  }

  public async destroy(id: number): Promise<void> {
    await this.connection.execute<ResultSetHeader>(
      'DELETE FROM users WHERE id= ?', [id]);
  }
}