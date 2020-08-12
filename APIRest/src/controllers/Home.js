import Pupil from '../models/Pupil';

class HomeController {
  async index(req, res) {
    const pupilNew = await Pupil.create({
      name: 'Felipe',
      surname: 'André',
      email: 'profissionalf.andre@gmail.com',
      age: 20,
      weight: 50,
      height: 1.80,
    });
    res.json(pupilNew);
  }
}
export default new HomeController();
