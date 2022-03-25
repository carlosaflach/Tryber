import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';
import { Request, Response } from 'express';

export default class UserController {
  private userService: UserService = new UserService();

  public getAll = async(_req: Request, res: Response) => {
    const result = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(result);
  }

  public getById = async(req: Request, res: Response) => {
    const {id} = req.params
    const result = await this.userService.getById(+id);
    return res.status(StatusCodes.OK).json(result);
  }

  public create = async(req: Request, res: Response) => {
    const {name, email, password} = req.body
    const result = await this.userService.create(name, email, password);
    return res.status(StatusCodes.CREATED).json(result);
  }

  public update = async(req: Request, res: Response) => {
    const {name, email, password} = req.body
    const result = await this.userService.update(+req.params.id, name, email, password);
    return res.status(StatusCodes.OK).json(result);
  }

  public destroy = async(req: Request, res: Response) => {
    await this.userService.destroy(+req.params.id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }
}
