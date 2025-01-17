import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Idola Website <noreply@idola.it>',
      to: ['info@idola.it'],
      subject: `Nuovo messaggio da ${name}: ${subject}`,
      reply_to: email,
      text: `
Nome: ${name}
Email: ${email}
Oggetto: ${subject}

Messaggio:
${message}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Errore nell\'invio dell\'email' }, { status: 500 });
  }
}