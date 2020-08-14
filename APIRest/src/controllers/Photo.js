import multer from 'multer';
import multerConfig from '../config/multer';
import PhotoModel from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class Photo {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { pupile_id, url } = req.body;
        const photo = await PhotoModel.create({
          originalname, filename, pupile_id, url,
        });
        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}
export default new Photo();
