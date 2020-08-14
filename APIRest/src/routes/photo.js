import { Router } from 'express';
import Photo from '../controllers/Photo';

const router = new Router();

router.post('/', Photo.store);

export default router;
