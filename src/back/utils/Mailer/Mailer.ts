import nodemailer from 'nodemailer';
import { emailhost, emailport, emailuser, emailpassword } from '../../config';

export default class Mailer {
  private transporter = nodemailer.createTransport({
    host: emailhost,
    port: emailport,
    secure: true, 
    authMethod: "PLAIN",
    auth: {
      user: emailuser,
      pass: emailpassword,
    },
  } as any);
  sendMail = async (to: string, subject: string, html: string) => {
    const info = await this.transporter.sendMail({
      from: '"Fred Foo 👻" < ',
        to, 
        subject,
        html,
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
}