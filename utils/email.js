const nodemailer = require('nodemailer');

const sendMail = async function(mailOption) {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    logger: true,
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
