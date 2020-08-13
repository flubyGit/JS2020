import { Router } from 'express';
import Pupil from '../controllers/Pupil';
import LoginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.get('/', Pupil.index);
router.post('/', LoginRequired, Pupil.store);
router.put('/:id', LoginRequired, Pupil.update);
router.get('/:id', Pupil.show);
router.delete('/:id', LoginRequired, Pupil.delete);

export default router;
