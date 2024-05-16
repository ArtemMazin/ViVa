import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, tel, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: 'info@gidmash.ru',
      to: 'info@gidmash.ru',
      subject: `Сообщение от ${name}`,
      html: `
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Tel: </strong> ${tel}</p>
        <p><strong>Message: </strong> ${message}</p>
      `,
    });
  } catch (error) {
    return Response.json({ message: 'Произошла ошибка, повторите попытку' });
  }
  return Response.json({ message: 'Заявка успешно отправлена' });
}
