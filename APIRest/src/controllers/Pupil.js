import Pupil from '../models/Pupil';
import Photo from '../models/Photo';

class PupilController {
  async index(req, res) {
    const pupils = await Pupil.findAll(
      {
        attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'desc'], [Photo, 'id', 'desc']],
        include: {
          model: Photo,
          attributes: ['filename'],
        },
      },
    );
    return res.json(pupils);
  }

  async store(req, res) {
    try {
      const pupil = await Pupil.create(req.body);
      return res.json(pupil);
    } catch (e) {
      return res.status(400).json({
        errors: 'Error create Pupil',
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando id'],
        });
      }
      const pupil = await Pupil.findByPk(id, {
        attributes: ['id', 'name', 'surname', 'email', 'age', 'weight', 'height'],
        order: [['id', 'desc'], [Photo, 'id', 'desc']],
        include: {
          model: Photo,
          attributes: ['filename'],
        },
      });
      if (!pupil) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      return res.json(pupil);
    } catch (e) {
      return res.status(400).json({
        errors: 'Ocorreu um erro',
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando id'],
        });
      }
      const pupil = await Pupil.findByPk(id);
      if (!pupil) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await pupil.destroy();
      return res.json({
        delete: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Faltando id'],
        });
      }
      const pupil = await Pupil.findByPk(id);
      if (!pupil) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      const pupilUpdated = await pupil.update(req.body);
      return res.json(pupilUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((error) => error.message),
      });
    }
  }
}

export default new PupilController();
