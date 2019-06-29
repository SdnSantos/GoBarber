import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      // informações que quero que retorne
      attributes: ['id', 'name', 'email', 'avatar_id'],
      // retornar os atributos do file
      include: [
        {
          model: File,
          as: 'avatar',
          // campos que vão retornar do file
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    return res.json(providers);
  }
}

export default new ProviderController();
