import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent-purple/20">
        <div className="absolute inset-0 bg-neutral-light/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6">
            Bem-vindo ao{" "}
            <span className="text-primary">MediaTherapy</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-dark/80 mb-8 max-w-3xl mx-auto">
            Um espaço seguro e acolhedor para cuidar da sua saúde mental.
            Oferecemos terapia personalizada com horarios flexiveis .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contato"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Agendar Consulta
            </Link>
            <Link
              hidden
              href="/login"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Área do Paciente
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-neutral-dark mb-12">
            Por que escolher o MediaTherapy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-neutral-light hover:bg-secondary/20 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">Cuidado Personalizado</h3>
              <p className="text-neutral-dark/70">
                Cada paciente recebe atenção individualizada e um plano de tratamento personalizado.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-neutral-light hover:bg-secondary/20 transition-colors">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">Profissional Qualificado</h3>
              <p className="text-neutral-dark/70">
                Terapeuta experiente e certificado para oferecer o melhor cuidado.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-neutral-light hover:bg-secondary/20 transition-colors">
              <div className="w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">Flexibilidade de Horários</h3>
              <p className="text-neutral-dark/70">
                Agende consultas em horários que se adaptem à sua rotina e necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-dark mb-6">
            Pronto para começar sua jornada de cura?
          </h2>
          <p className="text-xl text-neutral-dark/70 mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar o bem-estar emocional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Fale Conosco
            </Link>
            <Link
              href="/sobre"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 hover:text-white transition-colors"
            >
              Conheça Nossa Equipe
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
