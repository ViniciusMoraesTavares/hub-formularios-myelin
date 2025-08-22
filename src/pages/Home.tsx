import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Globe
} from 'lucide-react';

const Home: React.FC = () => {
  const formModels = [
    {
      title: 'Formulário Simples',
      description: 'Formulário de página única com validação básica',
      path: '/formulario-simples',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      title: 'Formulário Multi-etapas',
      description: 'Processo guiado com barra de progresso',
      path: '/formulario-multi-etapas',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      title: 'Pré-atendimento',
      description: 'Coleta inicial de informações do cliente',
      path: '/pre-atendimento',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      title: 'Orçamento',
      description: 'Formulário detalhado para solicitação de orçamento',
      path: '/orcamento',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    },
    {
      title: 'Contato Genérico',
      description: 'Formulário padrão de contato empresarial',
      path: '/contato',
      color: 'bg-teal-50 border-teal-200 hover:bg-teal-100'
    },
    {
      title: 'Newsletter/Cadastro',
      description: 'Captura de leads e newsletter',
      path: '/newsletter',
      color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
    }
  ];

  const externalExamples = [
    {
      title: 'Algodoce & Salgado',
      description: 'Formulário de orçamento para eventos',
      url: 'https://algodoceesalgado.com.br/formulario',
      color: 'bg-gradient-to-r from-pink-500 to-rose-500'
    },
    {
      title: 'Amanda Novais - Sobrancelhas',
      description: 'Sistema de agendamento personalizado',
      url: 'https://amandanovais-sobracelhasecilios.netlify.app/',
      color: 'bg-gradient-to-r from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-700 to-green-500 overflow-hidden">
        {/* Fundo animado com partículas */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <circle cx="100" cy="150" r="100" fill="rgba(255,255,255,0.05)">
              <animate attributeName="r" values="100;130;100" dur="12s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="400" r="150" fill="rgba(255,255,255,0.04)">
              <animate attributeName="r" values="150;180;150" dur="15s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center justify-between">
          {/* Texto principal */}
          <div className="text-center md:text-left md:max-w-xl space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Formulários <span className="text-green-300">Inteligentes</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 drop-shadow-sm">
              Crie formulários personalizados para pré-atendimento, capture leads qualificados, filtre informações e envie direto para o WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mt-4">
              <a
                href="https://wa.me/5519996165594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 font-semibold text-base shadow-md transform hover:-translate-y-1"
              >
                Fale com Especialista
                <ExternalLink className="ml-2" size={18} />
              </a>
              <button
                onClick={() => document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold text-base shadow-md transform hover:-translate-y-1"
              >
                Ver Modelos
                <ArrowRight className="ml-2" size={18} />
              </button>
            </div>
          </div>

          {/* Área direita com ilustração e card */}
          <div className="mt-12 md:mt-0 md:ml-12 relative w-full max-w-lg h-96 flex justify-center items-center">
            {/* Blobs neon animados */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-green-400 via-green-300 to-green-200 animate-blob mix-blend-multiply filter blur-3xl opacity-60"></div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-300 via-green-200 to-white animate-blob animation-delay-2000 mix-blend-multiply filter blur-3xl opacity-50"></div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-white via-green-100 to-green-200 animate-blob animation-delay-4000 mix-blend-multiply filter blur-2xl opacity-40"></div>

            {/* Linhas conectando pontos */}
            <svg className="w-full h-full absolute" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="200" y2="200" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
              <line x1="0" y1="200" x2="200" y2="0" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
              <circle cx="50" cy="150" r="3" fill="white" className="animate-ping-slow" />
              <circle cx="150" cy="50" r="3" fill="white" className="animate-ping-slow animation-delay-2000" />
              <circle cx="100" cy="100" r="4" fill="white" className="animate-ping-slower" />
            </svg>

            {/* Cubos/elementos 3D abstratos */}
            <div className="absolute w-16 h-16 bg-green-400/50 rounded-lg animate-float top-10 left-10 shadow-lg"></div>
            <div className="absolute w-12 h-12 bg-green-300/60 rounded-lg animate-float animation-delay-1500 top-24 right-16 shadow-md"></div>
            <div className="absolute w-20 h-20 bg-green-200/40 rounded-lg animate-float animation-delay-3000 bottom-10 left-20 shadow-lg"></div>

            {/* Card futurista com CTA detalhado */}
            <div className="absolute top-8 right-4 bg-black/80 backdrop-blur-md border border-green-400 rounded-xl p-6 max-w-xs text-white shadow-xl animate-fade-in">
              <h3 className="text-xl font-bold text-green-400 mb-2">Impulsione seu Pré-Atendimento</h3>
              <p className="text-sm text-white/90 mb-3">
                Aumente a eficiência do seu atendimento automatizando formulários, filtrando leads e integrando tudo diretamente ao WhatsApp.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" />
                  Capture leads qualificados automaticamente
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" />
                  Filtre informações de forma inteligente
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" />
                  Envio direto e rápido para o WhatsApp
                </li>
              </ul>
              <button
                onClick={() => document.getElementById("servico")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-4 inline-block px-4 py-2 bg-green-400 text-black rounded-full font-semibold hover:bg-green-300 transition transform hover:scale-105 duration-300"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Service Section */}
      <section id="servico" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviço de Pré-Atendimento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Criamos formulários de pré-atendimento para empresas e prestadores de serviço,
              permitindo que os clientes preencham suas informações iniciais de forma rápida e prática.
              Receba os dados direto no WhatsApp e agilize o atendimento.
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agilidade no Atendimento</h3>
              <p className="text-gray-600">
                Receba os dados do cliente completos antes do contato, economizando tempo e evitando retrabalho.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Filtragem de Clientes</h3>
              <p className="text-gray-600">
                Apenas clientes realmente interessados preenchem o formulário, ajudando em campanhas e leads qualificados.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integração WhatsApp</h3>
              <p className="text-gray-600">
                Todas as informações coletadas chegam prontas no WhatsApp da empresa, prontas para ação imediata.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5519996165594"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
            >
              <span>Fale com um Especialista</span>
              <ExternalLink className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>


      {/* External Examples */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projetos em Produção
            </h2>
            <p className="text-xl text-gray-600">
              Veja alguns de nossos formulários funcionando em sites reais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {externalExamples.map((example, index) => (
              <a
                key={index}
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`${example.color} p-8 rounded-xl text-white hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{example.title}</h3>
                      <p className="text-white/90">{example.description}</p>
                    </div>
                    <ExternalLink
                      className="opacity-70 group-hover:opacity-100 transition-opacity"
                      size={24}
                    />
                  </div>
                  <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                    <span className="font-medium">Ver projeto ao vivo</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Models Grid */}
      <section id="modelos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modelos de Formulários
            </h2>
            <p className="text-xl text-gray-600">
              Explore diferentes tipos de formulários que criamos para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formModels.map((model, index) => (
              <Link
                key={index}
                to={model.path}
                className={`block p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${model.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <FileText size={32} className="text-gray-700" />
                  <ArrowRight className="text-gray-500 group-hover:text-gray-700 transition-colors" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {model.title}
                </h3>
                <p className="text-gray-700">
                  {model.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  <span>Ver demonstração</span>
                  <ArrowRight className="ml-1" size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para criar seu formulário personalizado?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e vamos criar a solução perfeita para seu negócio
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2" size={20} />
              <span>Design Personalizado</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2" size={20} />
              <span>Integração WhatsApp</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="mr-2" size={20} />
              <span>Suporte Completo</span>
            </div>
          </div>

          <a
            href="https://wa.me/5519996165594"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
          >
            <span>Solicitar Orçamento</span>
            <ExternalLink className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;