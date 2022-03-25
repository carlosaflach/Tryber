import { Router } from 'express';
import UserController from '../controllers/user';

const router = Router();

const userController = new UserController();

router.get(
  '/',
userController.getAll,
);

router.get('/:id', userController.getById);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.destroy);

export default router;
