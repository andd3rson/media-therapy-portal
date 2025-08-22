"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const upcomingAppointments = [
    {
      id: 1,
      date: "25 de Março, 2024",
      time: "14:00",
      type: "Terapia Individual",
      therapist: "Dr. João Silva",
    },
    {
      id: 2,
      date: "28 de Março, 2024",
      time: "16:00",
      type: "Terapia de Casal",
      therapist: "Dr. João Silva",
    },
  ];

  const recentNotes = [
    {
      id: 1,
      title: "Sessão de 18 de Março",
      content: "Trabalhamos técnicas de respiração para ansiedade. Praticar diariamente por 10 minutos.",
      date: "18 de Março, 2024",
    },
    {
      id: 2,
      title: "Sessão de 11 de Março",
      content: "Foco na comunicação assertiva. Exercícios de escuta ativa para aplicar em casa.",
      date: "11 de Março, 2024",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-light">
      {/* Header */}
      <section className="bg-white border-b border-neutral-medium">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-dark mb-2">
                Bem-vindo, Maria
              </h1>
              <p className="text-neutral-dark/70">
                Aqui está um resumo da sua jornada terapêutica
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/agendar"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Agendar Consulta
              </Link>
              <button className="p-3 text-neutral-dark/70 hover:text-neutral-dark transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-neutral-medium">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Visão Geral" },
              { id: "appointments", label: "Consultas" },
              { id: "notes", label: "Anotações" },
              { id: "progress", label: "Progresso" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-neutral-dark/70 hover:text-neutral-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Stats Cards */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-neutral-dark/70 text-sm">Total de Sessões</p>
                    <p className="text-3xl font-bold text-neutral-dark">24</p>
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-neutral-dark/70 text-sm">Próxima Consulta</p>
                    <p className="text-3xl font-bold text-neutral-dark">25 Mar</p>
                  </div>
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-neutral-dark/70 text-sm">Dias de Terapia</p>
                    <p className="text-3xl font-bold text-neutral-dark">156</p>
                  </div>
                  <div className="w-12 h-12 bg-accent-purple/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">Próximas Consultas</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-neutral-medium rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-neutral-dark">{appointment.type}</h3>
                        <p className="text-neutral-dark/70">{appointment.therapist}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-neutral-dark">{appointment.date}</p>
                        <p className="text-neutral-dark/70">{appointment.time}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors">
                        Reagendar
                      </button>
                      <button className="px-4 py-2 border border-neutral-medium text-neutral-dark text-sm rounded-lg hover:bg-neutral-light transition-colors">
                        Cancelar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "notes" && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">Anotações das Sessões</h2>
              <div className="space-y-4">
                {recentNotes.map((note) => (
                  <div key={note.id} className="border border-neutral-medium rounded-lg p-4">
                    <h3 className="font-semibold text-neutral-dark mb-2">{note.title}</h3>
                    <p className="text-neutral-dark/70 mb-3">{note.content}</p>
                    <p className="text-sm text-neutral-dark/50">{note.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "progress" && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">Seu Progresso</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-neutral-dark mb-3">Objetivos Alcançados</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-secondary rounded-full"></div>
                      <span className="text-neutral-dark/70">Melhorar comunicação com parceiro</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-secondary rounded-full"></div>
                      <span className="text-neutral-dark/70">Reduzir sintomas de ansiedade</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-neutral-medium rounded-full"></div>
                      <span className="text-neutral-dark/70">Desenvolver técnicas de mindfulness</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-dark mb-3">Próximos Passos</h3>
                  <p className="text-neutral-dark/70">
                    Continue praticando as técnicas de respiração diariamente e mantenha o diário de gratidão. 
                    Na próxima sessão, vamos trabalhar com exercícios de comunicação assertiva.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
