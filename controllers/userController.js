import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sparxoneman@gmail.com",
    pass: "vmvzduanwxrdcjfm",
  },
});

export const contact = async (req, res) => {
  const {
    name,
    email,
    budget,
    companySize,
    preferredDeadline,
    projectDescription,
  } = req.body;

  const mailOptions = {
    from: '"Contact Us Form" <sparxoneman@gmail.com>',
    to: "rp99773898@gmail.com",
    subject: `New message from ${name}`,
    text: `Name: ${name} \nEmail: ${email} \nbudget: ${budget} \ncompanySize: ${companySize} \npreferredDeadline: ${preferredDeadline} \nprojectDescription: ${projectDescription}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error: Unable to send email");
    } else {
      // console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
};

