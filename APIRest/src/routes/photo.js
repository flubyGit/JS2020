import { Router } from 'express';
import Photo from '../controllers/Photo';
import LoginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.post('/', LoginRequired, Photo.store);

export default router;
