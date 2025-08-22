export default function Sobre() {
  return (
    <main className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Sobre o MediaTherapy
          </h1>
          <p className="text-xl text-neutral-dark/80">
            Conheça nossa história, missão e a equipe dedicada ao seu bem-estar emocional
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-neutral-dark mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-neutral-dark/80 mb-4">
                A MediaTherapy nasceu do coração de um homem que encontrou no serviço a Deus o propósito de sua missão. 
                Movido pela fé e guiado pelos ensinamentos da Sagrada Família, ele dedicou-se por anos ao aconselhamento 
                de casais, ajudando-os a restaurar vínculos, reencontrar o amor e fortalecer os laços familiares.
              </p>
              <p className="text-lg text-neutral-dark/80 mb-4">
                Seu trabalho missionário não foi apenas uma passagem, foi uma entrega completa. Atuando junto a comunidades 
                e famílias em situações de fragilidade, ele percebeu que o cuidado emocional, quando aliado à espiritualidade, 
                pode transformar vidas.
              </p>
              <p className="text-lg text-neutral-dark/80">
                Apaixonado por esse chamado, ele fundou a MediaTherapy com o desejo de oferecer um espaço seguro, acolhedor 
                e cheio de propósito, onde cada pessoa ou casal possa ser ouvido com empatia, respeito e discernimento. 
                Aqui, a fé e a ciência caminham juntas, com o compromisso de promover cura, reconciliação e esperança.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg> */}
                <img className="rounded-full" src="/perfil.jpeg" alt="" />
              </div>
              <h3 className="text-2xl font-semibold text-center text-neutral-dark mb-4">
                Manuel Sousa
              </h3>
              <p className="text-center text-neutral-dark/70 mb-4">
              Psicanalista clínico, Terapeuta comportamental, Teólogo e Palestrante.
              </p>
              <div className="space-y-2 text-sm text-neutral-dark/70">
                <p>• Especialista em Terapia de Casal</p>
                <p>• [ADICIONAR AS FORMAÇÕES DO MANUEL AQUI]</p>
                <p>• 8+ anos de experiência</p>
                <p>• [ADICIONAR AS FORMAÇÕES DO MANUEL AQUI]</p>
              </div>
            </div>
          </div>

          {/* Mission and Values */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-dark mb-4">Nossa Missão</h3>
              <p className="text-neutral-dark/80">
                Oferecer cuidado terapêutico de excelência, integrando conhecimento científico com valores espirituais, 
                para promover saúde mental, bem-estar emocional e fortalecimento das relações familiares.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-dark mb-4">Nossos Valores</h3>
              <ul className="space-y-2 text-neutral-dark/80">
                <li>• Compaixão e empatia</li>
                <li>• Excelência profissional</li>
                <li>• Respeito à diversidade</li>
                <li>• Confidencialidade</li>
                <li>• Integridade ética</li>
              </ul>
            </div>
          </div>

          {/* Specialties */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-center text-neutral-dark mb-12">
              Nossas Especialidades
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-neutral-light hover:bg-secondary/20 transition-colors">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-neutral-dark mb-2">Terapia de Casal</h4>
                <p className="text-neutral-dark/70">
                  Ajudamos casais a fortalecer seus relacionamentos e resolver conflitos.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-neutral-light hover:bg-secondary/20 transition-colors">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-neutral-dark mb-2">Terapia Familiar</h4>
                <p className="text-neutral-dark/70">
                  Trabalhamos com famílias para melhorar a comunicação e resolver dinâmicas complexas.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-neutral-light hover:bg-secondary/20 transition-colors">
                <div className="w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-neutral-dark mb-2">Aconselhamento Individual</h4>
                <p className="text-neutral-dark/70">
                  Oferecemos suporte personalizado para questões emocionais e de desenvolvimento pessoal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
