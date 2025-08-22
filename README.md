# MediaTherapy Portal

Um portal profissional para terapeutas, construído com Next.js 14, Tailwind CSS e Resend para envio de emails.

## 🚀 Tecnologias

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Email**: Resend (API moderna para emails transacionais)
- **Templates**: React Email para emails profissionais
- **Deploy**: Vercel (recomendado)

## ✨ Funcionalidades

- 🏠 **Home**: Banner principal com CTAs para contato e login
- 👨‍⚕️ **Sobre**: Informações sobre o terapeuta e especialidades
- 📝 **Blog**: Listagem de posts sobre saúde mental
- 📞 **Contato**: Formulário funcional com envio de emails
- 🔐 **Login**: Sistema de autenticação
- 📊 **Dashboard**: Área do paciente com estatísticas e consultas

## 🎨 Paleta de Cores

```css
--primary: #A3C4F3      /* Azul suave */
--secondary: #A8D5BA    /* Verde suave */
--neutral-light: #F6F5F3 /* Branco acinzentado */
--neutral-medium: #E0E0E0 /* Cinza claro */
--neutral-dark: #333333   /* Cinza escuro */
--accent-purple: #D7CBE9 /* Roxo suave */
--accent-orange: #F7D1BA /* Laranja suave */
```

## 📧 Sistema de Email

### Resend Integration

O portal usa o **Resend** para envio de emails transacionais:

- ✅ **Alta confiabilidade** (99.9% de entrega)
- ✅ **API moderna** e fácil de usar
- ✅ **Templates React Email** para emails profissionais
- ✅ **Dashboard com analytics** completo
- ✅ **Preços competitivos** ($20 por 50k emails/mês)

### Configuração

1. Crie uma conta em [resend.com](https://resend.com)
2. Obtenha sua API key
3. Crie um arquivo `.env.local`:

```env
RESEND_API_KEY=re_sua_chave_api_aqui
```

4. Reinicie o servidor: `npm run dev`

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]
cd media-therapy-portal

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp env.example .env.local
# Edite .env.local com suas chaves

# Execute o projeto
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/
│   │   └── contact/          # API de envio de emails
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Navbar.tsx        # Navegação principal
│   │   └── Footer.tsx        # Rodapé
│   ├── sobre/                 # Página Sobre
│   ├── blog/                  # Página Blog
│   ├── contato/               # Página Contato
│   ├── login/                 # Página Login
│   ├── dashboard/             # Área do paciente
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout principal
│   └── page.tsx               # Página inicial
├── public/                    # Arquivos estáticos
└── types/                     # Tipos TypeScript
```

## 🔧 Configurações

### Variáveis de Ambiente

```env
# Email (Resend)
RESEND_API_KEY=re_sua_chave_api_aqui

# Opcional: Domínio personalizado
RESEND_DOMAIN=mediatherapy.com
```

### Personalização

- **Cores**: Edite `src/app/globals.css`
- **Templates de Email**: Modifique `src/app/api/contact/email-template.tsx`
- **Conteúdo**: Atualize as páginas em `src/app/`

## 📱 Responsividade

O portal é totalmente responsivo e funciona perfeitamente em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Suporte completo a Next.js
- **Railway**: Deploy simples e rápido
- **AWS/GCP**: Para projetos enterprise

## 📊 Monitoramento

### Resend Dashboard

- 📈 Taxa de entrega
- 📊 Analytics de abertura
- 🚫 Bounces e spam reports
- 📧 Histórico de emails

### Logs

- Console do navegador
- Logs do servidor Next.js
- Endpoint de teste: `/api/contact/test`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

- **Issues**: GitHub Issues
- **Documentação**: Este README
- **Resend**: [docs.resend.com](https://docs.resend.com)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

🎉 **MediaTherapy Portal** - Cuidando da sua saúde mental com tecnologia de ponta!
