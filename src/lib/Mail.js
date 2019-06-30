import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    // conexão com serviço externo para envio de emails
    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      // verifica de tem usuário, pois há algumas
      // estratégias de envio de emails que não possui autenticação
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
