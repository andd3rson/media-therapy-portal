import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Como lidar com a ansiedade no dia a dia",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    category: "Saúde Mental",
    date: "15 de Março, 2024",
    readTime: "5 min de leitura",
    image: "bg-gradient-to-br from-primary/20 to-secondary/20",
  },
  {
    id: 2,
    title: "Comunicação efetiva nos relacionamentos",
    excerpt: "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hasa.",
    category: "Relacionamentos",
    date: "10 de Março, 2024",
    readTime: "7 min de leitura",
    image: "bg-gradient-to-br from-secondary/20 to-accent-purple/20",
  },
  {
    id: 3,
    title: "O impacto da gratidão na saúde mental",
    excerpt: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    category: "Bem-estar",
    date: "5 de Março, 2024",
    readTime: "4 min de leitura",
    image: "bg-gradient-to-br from-accent-purple/20 to-accent-orange/20",
  },
  {
    id: 4,
    title: "Técnicas de respiração para momentos de estresse",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    category: "Técnicas",
    date: "28 de Fevereiro, 2024",
    readTime: "6 min de leitura",
    image: "bg-gradient-to-br from-accent-orange/20 to-primary/20",
  },
  {
    id: 5,
    title: "Construindo resiliência emocional",
    excerpt: "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It hasa.",
    category: "Desenvolvimento Pessoal",
    date: "20 de Fevereiro, 2024",
    readTime: "8 min de leitura",
    image: "bg-gradient-to-br from-primary/20 to-accent-purple/20",
  },
  {
    id: 6,
    title: "O poder do perdão na cura emocional",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    category: "Cura Emocional",
    date: "15 de Fevereiro, 2024",
    readTime: "6 min de leitura",
    image: "bg-gradient-to-br from-secondary/20 to-accent-orange/20",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Blog MediaTherapy
          </h1>
          <p className="text-xl text-neutral-dark/80">
            Artigos, dicas e insights sobre saúde mental, relacionamentos e bem-estar emocional
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-neutral-dark mb-8">Post em Destaque</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="lg:grid lg:grid-cols-2">
                <div className={`h-64 lg:h-full ${blogPosts[0].image} flex items-center justify-center`}>
                  <div className="text-center p-8">
                    <svg className="w-24 h-24 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-neutral-dark/60 text-sm">{blogPosts[0].date}</span>
                    <span className="text-neutral-dark/60 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-neutral-dark/70 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Ler mais
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* All Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-dark mb-8">Todos os Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-48 ${post.image} flex items-center justify-center`}>
                    <div className="text-center p-6">
                      <svg className="w-16 h-16 text-white/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-2 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-neutral-dark/60 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-dark mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-neutral-dark/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-dark/60 text-sm">{post.date}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary font-semibold hover:text-primary/80 transition-colors text-sm"
                      >
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-white rounded-lg shadow-lg p-8 text-center">
            [ADICIONAR UMA Newsletter TALVEZ? ]
            {/* <h3 className="text-2xl font-bold text-neutral-dark mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-neutral-dark/70 mb-6 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter para receber artigos exclusivos, dicas de bem-estar 
              e novidades sobre nossos serviços diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button disabled className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Inscrever-se
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
