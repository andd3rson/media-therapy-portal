import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { nome, email, telefone, assunto, mensagem } = await request.json();

    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Configuração de email não encontrada' },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',//'MediaTherapy <onboarding@resend.dev>', // 
      to: ['andersonconceiicao@gmail.com'],
      subject: `Nova mensagem do MediaTherapy: ${assunto}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        ${telefone ? `<p><b>Telefone:</b> ${telefone}</p>` : ""}
        <p><b>Assunto:</b> ${assunto}</p>
        <p><b>Mensagem:</b><br/>${mensagem}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno ao enviar email' },
      { status: 500 }
    );
  }
}
