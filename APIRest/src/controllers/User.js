import User from '../models/User';

class HomeController {
  async store(req, res) {
    try {
      const userNew = await User.create(req.body);
      res.json(userNew);
    } catch (error) {
      const { errors } = error;
      res.status(400).json({
        errors: errors.map((err) => err.message),
      });
    }
  }
}
export default new HomeController();
