const nodemailer = require('nodemailer');

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
  }
};

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
