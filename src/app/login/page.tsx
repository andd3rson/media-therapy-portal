"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Login attempt:", formData);
      // Here you would typically make an API call to authenticate
      // For now, we'll just redirect to dashboard
      window.location.href = "/dashboard";
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-neutral-light flex items-center justify-center py-20">
      <div className="max-w-md w-full mx-auto px-4">
        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-neutral-dark mb-2">
              Bem-vindo de volta
            </h1>
            <p className="text-neutral-dark/70">
              Faça login para acessar sua área do paciente
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-sm font-medium text-neutral-dark mb-2">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                required
                value={formData.senha}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-medium rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Sua senha"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-neutral-medium rounded focus:ring-primary focus:ring-2"
                />
                <span className="ml-2 text-sm text-neutral-dark/70">Lembrar de mim</span>
              </label>
              <Link
                href="/esqueci-senha"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Entrando...
                </div>
              ) : (
                "Entrar"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-neutral-dark/70 mb-4">
              Não tem uma conta?
            </p>
            <Link
              href="/cadastro"
              className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Criar conta
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-dark/60">
            Precisa de ajuda?{" "}
            <Link href="/contato" className="text-primary hover:text-primary/80 transition-colors">
              Entre em contato conosco
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
