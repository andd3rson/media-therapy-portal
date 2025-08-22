# Configuração do Resend para MediaTherapy Portal

## Visão Geral
Este guia explica como configurar o Resend para o envio de emails através do formulário de contato do MediaTherapy.

## Por que o Resend?

✅ **Mais confiável** - Taxa de entrega de 99.9%  
✅ **Mais rápido** - API moderna e otimizada  
✅ **Mais simples** - Sem configuração de SMTP complexa  
✅ **Melhor monitoramento** - Dashboard com analytics  
✅ **Preços competitivos** - $20 por 50k emails/mês  

## Pré-requisitos
- Conta no Resend (https://resend.com)
- Domínio verificado no Resend (opcional, mas recomendado)

## Passo 1: Criar Conta no Resend

1. Acesse [https://resend.com](https://resend.com)
2. Clique em "Get Started" ou "Sign Up"
3. Crie sua conta usando GitHub, Google ou email
4. Verifique seu email de confirmação

## Passo 2: Obter API Key

1. Faça login no dashboard do Resend
2. Vá para a aba "API Keys"
3. Clique em "Create API Key"
4. Dê um nome para sua chave (ex: "MediaTherapy Production")
5. Copie a chave API gerada (começa com `re_`)

## Passo 3: Configurar Variáveis de Ambiente

1. No diretório raiz do seu projeto, crie um arquivo chamado `.env.local`
2. Adicione o seguinte conteúdo:

```env
RESEND_API_KEY=re_sua_chave_api_aqui
```

**Importante:** Substitua `re_sua_chave_api_aqui` pela chave API real que você copiou do Resend.

## Passo 4: Verificar Domínio (Opcional mas Recomendado)

Para usar um domínio personalizado como remetente:

1. No dashboard do Resend, vá para "Domains"
2. Clique em "Add Domain"
3. Adicione seu domínio (ex: `mediatherapy.com`)
4. Siga as instruções para verificar o domínio via DNS
5. Aguarde a verificação (pode levar algumas horas)

## Passo 5: Reiniciar o Servidor

Após criar o arquivo `.env.local`, reinicie seu servidor Next.js:

```bash
npm run dev
```

## Como Funciona

- Quando um usuário envia o formulário, os dados são enviados para `/api/contact`
- A API usa o Resend para enviar um email para `andersonconceiicao@gmail.com`
- O email inclui todos os dados do formulário em um template HTML profissional
- Os usuários recebem feedback imediato sobre o sucesso/falha do envio

## Vantagens do Resend

🚀 **Performance**: Emails entregues em segundos  
📊 **Analytics**: Rastreamento de abertura, cliques e bounces  
🔒 **Segurança**: API keys seguras e domínios verificados  
🌐 **Global**: Servidores em múltiplas regiões  
💰 **Preços**: $20 por 50k emails/mês (muito competitivo)  

## Testando a Configuração

1. **Verificar configuração**: Acesse `/api/contact/test`
2. **Testar formulário**: Preencha e envie o formulário de contato
3. **Verificar email**: Confira se o email chegou em `andersonconceiicao@gmail.com`

## Solução de Problemas

### Problemas Comuns:

1. **"Resend API key missing"**: Verifique se criou o arquivo `.env.local` corretamente
2. **"Unauthorized"**: Verifique se a API key está correta
3. **"Domain not verified"**: Use `noreply@mediatherapy.com` temporariamente ou verifique seu domínio

### Logs e Debug:

- Verifique o console do navegador para erros
- Verifique os logs do servidor Next.js
- Use o endpoint `/api/contact/test` para verificar a configuração

## Próximos Passos

1. **Monitoramento**: Use o dashboard do Resend para acompanhar entregas
2. **Templates**: Personalize ainda mais os templates de email
3. **Webhooks**: Configure webhooks para notificações em tempo real
4. **Analytics**: Acompanhe métricas de engajamento dos emails

## Suporte

- **Resend Docs**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Support**: [https://resend.com/support](https://resend.com/support)
- **GitHub Issues**: Para problemas específicos do projeto

---

🎉 **Parabéns!** Seu sistema de email está agora usando uma das melhores plataformas de email transacional do mercado!
