const nodeMailer = require('nodemailer');

const mailPoster = nodeMailer.createTransport({
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 587,
    auth: {
        user: 'yhwang2948@naver.com',
        pass: 'yongha5178'
    }
});



// 메일 전송
const sendMail = (mailOption) => {
    mailPoster.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log('에러 ' + error);
        }
        else {
            console.log('전송 완료 ' + info.response);
        }
    });
}

const mailOption = mailOpt(result[0].dataValues, title, contents());
sendMail(mailOption)