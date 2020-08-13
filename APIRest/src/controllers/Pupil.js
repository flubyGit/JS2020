import Pupil from '../models/Pupil';

class PupilController {
  async index(res) {
    console.log('Pupilos');
    const pupils = await Pupil.findAll();
    return res.json(pupils);
  }

  // async store() {
  //   '';
  // }

  // async delete() { ''; }

  // async update() { ''; }
}

export default new PupilController();
