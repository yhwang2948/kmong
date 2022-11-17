const nodeMailer=require('nodeMailer');


exports.sendMail=(res, res)=>{
    console.log("req body", req.body)
    let userMail=req.body.userEmail;
    let userMessage=req.body.message;

    let transporter=nodeMailer.createTransport({
        service:'Naver',
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })

    var message = {
        from:process.env.EMAIL,
        to: userMail,
        subject: "this is test",
        text: userMessage,
    };



    transporter.sendMail(message,(err,info)=>{
        if(err){
            console.log("error in sending mail", err)
            return res.status(400).json({
                message:`error in sending mail ${err}`
            })
        } else {
            // 모달창 띄우면 될듯<모달 /> 이런느낌?
            console.log("sucessfully send the mail", info)
            return res.json({
                message:info
            })
        }
    })

}