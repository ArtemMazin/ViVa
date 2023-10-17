import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: 'starrail.honkai@yandex.ru',
      to: 'starrail.honkai@yandex.ru',
      subject: `Сообщение от ${name}`,
      html: `
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      `,
    });
  } catch (error) {
    return Response.json({ error: error.message || error.toString() });
    // return res.status(500).json({ error: error.message || error.toString() });
  }
  return Response.json({ error: '' });
  // return res.status(200).json({ error: '' });
}
