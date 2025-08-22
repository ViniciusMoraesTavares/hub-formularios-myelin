import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import Modal from '../components/Modal';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

const Contato: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, errors, handleChange, validateAll, reset } = useFormValidation(
    {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      assunto: '',
      mensagem: '',
      comoConheceu: '',
      newsletter: ''
    },
    {
      nome: { required: true, minLength: 2 },
      email: { required: true, email: true },
      assunto: { required: true },
      mensagem: { required: true, minLength: 10 }
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      setShowModal(true);
      reset();
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-teal-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
            <Mail className="h-12 w-12 text-teal-600 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tem uma ideia de formulário ou precisa de ajuda com seu projeto? 
            Estamos aqui para transformar sua visão em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Vamos Conversar
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-lg p-3 mr-4">
                    <MessageCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Resposta rápida e atendimento personalizado
                    </p>
                    <a
                      href="https://wa.me/5519996165594"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-800 font-medium"
                    >
                      (19) 99616-5594
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-lg p-3 mr-4">
                    <Mail className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      E-mail
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Para projetos mais detalhados
                    </p>
                    <a
                      href="mailto:contato@myelin.dev"
                      className="text-teal-600 hover:text-teal-800 font-medium"
                    >
                      contato@myelin.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-lg p-3 mr-4">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Localização
                    </h3>
                    <p className="text-gray-600">
                      Campinas - SP<br />
                      Atendimento remoto em todo Brasil
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-teal-50 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-teal-900 mb-2">
                  Horário de Atendimento
                </h3>
                <div className="text-sm text-teal-800 space-y-1">
                  <p><strong>Segunda à Sexta:</strong> 9h às 18h</p>
                  <p><strong>Sábados:</strong> 9h às 12h</p>
                  <p><strong>Emergências:</strong> WhatsApp 24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Envie sua Mensagem
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e retornaremos em breve
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={data.nome}
                      onChange={(e) => handleChange('nome', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                        errors.nome ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-sm text-red-600">{errors.nome}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={data.telefone}
                      onChange={(e) => handleChange('telefone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="(19) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={data.empresa}
                      onChange={(e) => handleChange('empresa', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    value={data.assunto}
                    onChange={(e) => handleChange('assunto', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                      errors.assunto ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o assunto</option>
                    <option value="novo-projeto">Novo Projeto</option>
                    <option value="orcamento">Solicitação de Orçamento</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="parceria">Parceria</option>
                    <option value="duvida">Dúvida</option>
                    <option value="outros">Outros</option>
                  </select>
                  {errors.assunto && (
                    <p className="mt-1 text-sm text-red-600">{errors.assunto}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    rows={5}
                    value={data.mensagem}
                    onChange={(e) => handleChange('mensagem', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none ${
                      errors.mensagem ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  />
                  {errors.mensagem && (
                    <p className="mt-1 text-sm text-red-600">{errors.mensagem}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Como conheceu nosso trabalho?
                  </label>
                  <select
                    value={data.comoConheceu}
                    onChange={(e) => handleChange('comoConheceu', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="google">Google / Busca</option>
                    <option value="indicacao">Indicação</option>
                    <option value="redes-sociais">Redes Sociais</option>
                    <option value="portfolio">Portfólio Online</option>
                    <option value="cliente">Cliente anterior</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={data.newsletter === 'sim'}
                      onChange={(e) => handleChange('newsletter', e.target.checked ? 'sim' : '')}
                      className="mt-1 h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Quero receber novidades por e-mail
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Dicas sobre formulários, cases de sucesso e novidades da Myelin
                      </p>
                    </div>
                  </label>
                </div>

                <div className="pt-6 border-t">
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>

            {/* FAQ */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Perguntas Frequentes
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Qual é o prazo médio para desenvolvimento?
                  </h4>
                  <p className="text-gray-600">
                    Formulários simples: 3-5 dias úteis. Projetos complexos: 1-3 semanas. 
                    Sempre definimos prazos claros antes do início.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Vocês fazem integração com WhatsApp?
                  </h4>
                  <p className="text-gray-600">
                    Sim! É nossa especialidade. Criamos integrações desde básicas até 
                    automações avançadas com API oficial do WhatsApp.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Como funciona o suporte pós-entrega?
                  </h4>
                  <p className="text-gray-600">
                    Oferecemos 30 dias de suporte gratuito para ajustes e dúvidas. 
                    Depois, temos planos de manutenção acessíveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Contato;