import { Router } from 'express';
import UserController from '../controllers/User';

const router = new Router();

router.post('/', UserController.store);

export default router;
/**
  async index = Listar -> Get
  async store/create = Cria um novo registro -> Post
  async delete/destroy - Apaga um registro -> Delete
  async show - Mostra 1 registro -> Get
  async update - Atualiza 1 registro -> Put/Patch
 */
