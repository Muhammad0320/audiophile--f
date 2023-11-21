const pug = require('pug');
const nodemailer = require('nodemailer');
const { htmlToText } = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.url = url;
    this.firstname = user.name.split(' ')[0];
    this.from = `Muhammad Awwal <${process.env.EMAIL_FROM}> `;
    this.to = user.email;
  }

  createTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: true,
        auth: {
          pass: process.env.BREVO_PASSWORD,
          user: process.env.BREVO_API_KEY
        }
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      logger: true,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  async sendMail(template, subject) {
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstname: this.firstname,
      url: this.url
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html)
    };

    await this.createTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.sendMail('welcome', 'Hello, welcome to audiophile family 👋 ');
  }

  async sendResetPassword() {
    await this.sendMail(
      'resetPassword',
      'Your password reset token valid for 10 mins ⏳'
    );
  }
};

// 9640253013

const sendMail = async function(mailOption) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    logger: true,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const options = {
    from: ` Muhammad Awwal <audiophile@gmail.com> `,

    to: mailOption.email,
    subject: mailOption.subject,
    text: mailOption.message
  };

  await transporter.sendMail(options);
};

module.exports = sendMail;
