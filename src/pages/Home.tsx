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
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Formulários que
              <span className="block text-blue-300">Convertem</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Criamos soluções personalizadas de formulários que transformam visitantes em clientes. 
              Explore nossa galeria de modelos e veja o que podemos fazer pelo seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5519996165594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
              >
                <span>Falar com Especialista</span>
                <ExternalLink className="ml-2" size={20} />
              </a>
              <button
                onClick={() => document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-700 transition-colors font-medium text-lg"
              >
                <span>Ver Modelos</span>
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a Myelin?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Especialistas em criar experiências de formulário que engajam e convertem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversão Otimizada</h3>
              <p className="text-gray-600">
                Formulários projetados para maximizar taxa de conversão e reduzir abandono
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UX Personalizada</h3>
              <p className="text-gray-600">
                Interface intuitiva adaptada ao seu público e marca
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsivo Total</h3>
              <p className="text-gray-600">
                Funciona perfeitamente em todos os dispositivos e telas
              </p>
            </div>
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