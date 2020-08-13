import { Router } from 'express';
import Pupil from '../controllers/Pupil';

const router = new Router();

router.get('/', Pupil.index);

export default router;
