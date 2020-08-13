import User from '../models/User';

class HomeController {
  async index(req, res) {
    try {
      const allUsers = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(allUsers);
    } catch (error) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const userNew = await User.create(req.body);
      const { id, name, email } = userNew;
      return res.json({ id, name, email });
    } catch (error) {
      const { errors } = error;
      return res.status(400).json({
        errors: errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      const { id, name, email } = users;
      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      console.log(user);
      if (!user) {
        return res.status(400).json({
          errors: ['User not exists'],
        });
      }
      const updated = await user.update(req.body);
      const { id, name, email } = updated;

      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['User not exists'],
        });
      }
      await user.destroy();
      return res.json({
        success: 'User delete success',
      });
    } catch (error) {
      return res.send(null);
    }
  }
}
export default new HomeController();
