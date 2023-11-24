const pug = require('pug');
const nodemailer = require('nodemailer');
const { htmlToText } = require('html-to-text');

class Email {
  constructor(user, url) {
    this.url = url;
    this.firstname = user.name.split(' ')[0];
    this.from = `Muhammad Awwal <${process.env.EMAIL_FROM}> `;
    this.to = user.email;
  }

  createTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        host: process.env.ELASTIC_EMAIL_HOST,
        port: process.env.ELASTIC_EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.ELASTIC_EMAIL_USERNAME,
          pass: process.env.ELASTIC_EMAIL_PASSWORD
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
      url: this.url,
      subject
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
      'passwordReset',
      'Your password reset token valid for 10 mins ⏳'
    );
  }
}

// eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDM3Yjk5ZmQ4YmVhNjFiOTRlZGEwN2U0MzM2NjBiNWNiOWRhYzhiNmJhYWY4NzQ3YjE1OTE5NTYzOTBkNWFiZmFkMDUxNWI5YWY2NmJjZGUiLCJpYXQiOjE3MDA2NjgxMTUuNjgyODk5LCJuYmYiOjE3MDA2NjgxMTUuNjgyOTAyLCJleHAiOjQ4NTYzNDE3MTUuNjc5MzE4LCJzdWIiOiI3MjQ2MTgiLCJzY29wZXMiOltdfQ.M202bxtZ3bzk-P-YWmX2TNzwKCyoSAnDxzXJQHSjhwxmApiiUJMYIY4LUJfIaf2fRwiLghjLlneDk9gVH50ekJ2CDGQlnXrnNGD-ToOmzmdEw4G7aO98KecQWCl0n5vn7lzq_B730KEuVuMq9CyRXjZ2oxYVi0wCWEDkgGiN_81T-gh6u23VSvJ1l6OQ9C2g1-kJxGFnjiOv_nKe0P7mzxIOr6DkfvvpgpWsRJMPOL0nNaV0cQ5P5O8OjofyRVcpmb07iMGrzVYMtiZ6hNTbSRzS9nskPH5OGzqUU0wMQdfeqw1SRG6zLk697LRc8XICCBNqVkBTl7MVDf8q0jtx4l-lVqCWK3ochJup9H1JUsrZQUTtRo47n9T1_lz-N1YvjXtpgAedDPNWDXls5Gls0CuPK0HX0AsqlzyrnWw_47Ui-6EqQB--sh0yoghm3iWGBXCJrqXqqz1VgskjPH8FeRmUzc_5MbRhtjB1LRpHntBhKrzC10vVQOjH_Oe-8kshWL0s29-IzOiDlo9uufcrFEx8ygO8g3BKPu6hpD6rsTJ16qbAMD2TILoXg907srNWUgjLaDJsJ_uU2-6NwLHkBl7hcZCW1CQS9Upiar6WIug9ZlLTTauIFzLAENNp8aaKApxXlsfv_QqVgWxqjNEYxKpeOnoONYwF_z-kO3FLkdQ

// muhammawwal@005

// E891A9BD9D2E7D80B12D2F9A6BCD01DCB08B

// smtp.elasticemail.com

// 2525

// codemastreo7@gmail.com

// Muhammawwal@005

// // 9640253013

// const sendMail = async function(mailOption) {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     logger: true,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD
//     }
//   });

//   const options = {
//     from: ` Muhammad Awwal <audiophile@gmail.com> `,

//     to: mailOption.email,
//     subject: mailOption.subject,
//     text: mailOption.message
//   };

//   await transporter.sendMail(options);
// };

module.exports = Email;
