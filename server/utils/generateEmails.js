import nodeMailer from "nodemailer";

const transporter = nodeMailer.createTransport({
    service : "gmail",
    auth :{
         user: process.env.EMAIL,
         password: process.env.PASSWORD
    },
});

const sendEmail = async(recieverEmail , subject , body ) =>{
   await transporter.sendMail({
    from: process.env.EMAIL,
    to: recieverEmail,
    subject: subject,
    html: body,
   })
};

export default sendEmail;