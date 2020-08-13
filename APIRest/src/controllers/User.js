import User from '../models/User';

class HomeController {
  async index(req, res) {
    try {
      const allUsers = await User.findAll();
      return res.json(allUsers);
    } catch (error) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const userNew = await User.create(req.body);
      return res.json(userNew);
    } catch (error) {
      const { errors } = error;
      return res.status(400).json({
        errors: errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const users = await User.findByPk(id);
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!id) {
        return res.status(400).json({
          errors: ['Id missing'],
        });
      }
      if (!user) {
        return res.status(400).json({
          errors: ['User not exists'],
        });
      }
      const updated = await user.update(req.body);
      return res.json(updated);
    } catch (error) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!id) {
        return res.status(400).json({
          errors: ['Id missing'],
        });
      }
      if (!user) {
        return res.status(400).json({
          errors: ['User not exists'],
        });
      }
      await user.destroy(id);
      return res.json({
        success: 'User delete success',
      });
    } catch (error) {
      return res.send(null);
    }
  }
}
export default new HomeController();
