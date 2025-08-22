export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-primary mb-2">MediaTherapy</h3>
          <p className="text-neutral-light text-sm">
            Cuidando da sua saúde mental com compaixão e profissionalismo
          </p>
        </div>
        <div className="border-t border-neutral-medium pt-4">
          <p className="text-neutral-light text-sm">
            © {new Date().getFullYear()} MediaTherapy. Desenvolvido por Anderson Conceição.
          </p>          
        </div>
      </div>
    </footer>
  );
}
