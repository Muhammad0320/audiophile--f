const nodemailer = require('nodemailer');

const sendMail = async function(user, mailOption) {
  const transporter = nodemailer.createTransport();

  const options = {
    from: ` Muhammad Awwal <audiophile@gmail.com> `,

    to: user.email,
    subject: mailOption.subject
  };
};

module.exports = sendMail;
