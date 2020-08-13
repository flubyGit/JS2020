import { Router } from 'express';
import UserController from '../controllers/User';
import LoginRequired from '../middlewares/LoginRequired';

const router = new Router();

// router.get('/', LoginRequired, UserController.index);
// router.get('/:id', UserController.show);

router.post('/', UserController.store);
router.put('/', LoginRequired, UserController.update);
router.delete('/', LoginRequired, UserController.delete);

export default router;
