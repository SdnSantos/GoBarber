// configuração da parte de uploads de arquivos
import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  // como o multer vai guardar os arquivos de imagem
  // diskStorage é para salvar dentro da aplicação
  storage: multer.diskStorage({
    // resolve é para manipular os caminhos e
    // deixar igual para Windows, Mac ou Linux
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    // como será formatado o nome da imagem
    filename: (req, file, cb) => {
      // crypto é utilizado para gerar caracteres aleatórios
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
