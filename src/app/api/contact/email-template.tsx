import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Row,
  Column,
  Img,
} from '@react-email/components';

interface ContactEmailProps {
  nome: string;
  email: string;
  telefone?: string;
  assunto: string;
  mensagem: string;
}

export const ContactEmail = ({
  nome,
  email,
  telefone,
  assunto,
  mensagem,
}: ContactEmailProps) => {
  const currentDate = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>MediaTherapy</Heading>
            <Text style={headerSubtitle}>Nova Mensagem de Contato</Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            {/* Contact Details */}
            <Section style={detailsSection}>
              <Heading style={sectionTitle}>📋 Detalhes da Mensagem</Heading>
              
              <Row style={detailRow}>
                <Column style={detailLabel}>👤 Nome:</Column>
                <Column style={detailValue}>{nome}</Column>
              </Row>
              
              <Row style={detailRow}>
                <Column style={detailLabel}>📧 Email:</Column>
                <Column style={detailValue}>{email}</Column>
              </Row>
              
              {telefone && (
                <Row style={detailRow}>
                  <Column style={detailLabel}>📱 Telefone:</Column>
                  <Column style={detailValue}>{telefone}</Column>
                </Row>
              )}
              
              <Row style={detailRow}>
                <Column style={detailLabel}>📝 Assunto:</Column>
                <Column style={detailValue}>{assunto}</Column>
              </Row>
            </Section>

            {/* Message */}
            <Section style={messageSection}>
              <Heading style={sectionTitle}>💬 Mensagem</Heading>
              <Text style={messageText}>{mensagem}</Text>
            </Section>

            {/* Footer */}
            <Section style={footerSection}>
              <Text style={footerText}>
                ✨ Esta mensagem foi enviada através do formulário de contato do MediaTherapy
              </Text>
              <Text style={footerDate}>
                📅 Data: {currentDate}
              </Text>
            </Section>
          </Section>

          {/* Bottom Footer */}
          <Section style={bottomFooter}>
            <Text style={bottomFooterText}>
              © {new Date().getFullYear()} MediaTherapy. Todos os direitos reservados.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const header = {
  background: 'linear-gradient(135deg, #A3C4F3 0%, #A8D5BA 100%)',
  padding: '30px',
  textAlign: 'center' as const,
  borderRadius: '10px 10px 0 0',
};

const headerTitle = {
  color: '#ffffff',
  margin: '0',
  fontSize: '28px',
  fontWeight: 'bold',
};

const headerSubtitle = {
  color: '#ffffff',
  margin: '10px 0 0 0',
  fontSize: '16px',
};

const content = {
  padding: '30px',
  backgroundColor: '#ffffff',
};

const detailsSection = {
  backgroundColor: '#f8f9fa',
  padding: '25px',
  borderRadius: '10px',
  marginBottom: '25px',
  borderLeft: '4px solid #A3C4F3',
};

const sectionTitle = {
  color: '#333333',
  marginTop: '0',
  marginBottom: '20px',
  fontSize: '20px',
};

const detailRow = {
  borderBottom: '1px solid #e9ecef',
  padding: '12px 0',
};

const detailLabel = {
  fontWeight: 'bold',
  color: '#555555',
  width: '120px',
  fontSize: '14px',
};

const detailValue = {
  color: '#333333',
  fontSize: '14px',
};

const messageSection = {
  backgroundColor: '#ffffff',
  padding: '25px',
  borderRadius: '10px',
  border: '2px solid #A8D5BA',
  marginBottom: '25px',
};

const messageText = {
  color: '#333333',
  lineHeight: '1.6',
  margin: '0',
  fontSize: '16px',
};

const footerSection = {
  background: 'linear-gradient(135deg, #D7CBE9 0%, #F7D1BA 100%)',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#333333',
  margin: '0',
  fontSize: '14px',
  fontWeight: '500',
};

const footerDate = {
  color: '#666666',
  margin: '8px 0 0 0',
  fontSize: '13px',
};

const bottomFooter = {
  backgroundColor: '#333333',
  padding: '20px',
  textAlign: 'center' as const,
  borderRadius: '0 0 10px 10px',
};

const bottomFooterText = {
  color: '#ffffff',
  margin: '0',
  fontSize: '14px',
};

export default ContactEmail;
