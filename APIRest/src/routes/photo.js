import { Router } from 'express';
import multer from 'multer';
import Photo from '../controllers/Photo';
import multerConfig from '../config/mouter';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('file'), Photo.store);

export default router;
