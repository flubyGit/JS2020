import jwt from 'jsonwebtoken';
import User from '../models/User';

class Token {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credencias inválidas'],
      });
    }
    const user = User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não encontrado.'],
      });
    }
    if (!(await user).passwordIsValid(password)) {
      return res.status(401).json({
        errors: ['Senha invalida.'],
      });
    }
    const { id } = user;
    const { TOKEN_SECRET, TOKEN_EXPIRATION } = process.env;
    const token = jwt.sign({ id, email }, TOKEN_SECRET, { expiresIn: TOKEN_EXPIRATION });
    return res.json({ token });
  }
}
export default new Token();
