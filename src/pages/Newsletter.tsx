import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import Modal from '../components/Modal';
import { Mail, Gift, Star, Users } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, errors, handleChange, validateAll, reset } = useFormValidation(
    {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      cargo: '',
      segmento: '',
      interesses: '',
      comoConheceu: '',
      receberWhatsApp: ''
    },
    {
      nome: { required: true, minLength: 2 },
      email: { required: true, email: true },
      interesses: { required: true }
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-pink-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
            <Mail className="h-12 w-12 text-pink-600 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Newsletter Myelin
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Receba dicas exclusivas sobre formulários, cases de sucesso e novidades 
            do mundo do desenvolvimento web
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-pink-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
              <Gift className="h-10 w-10 text-pink-600 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Conteúdo Exclusivo</h3>
            <p className="text-gray-600">Templates gratuitos e dicas que não compartilhamos em lugar nenhum</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-pink-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
              <Star className="h-10 w-10 text-pink-600 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cases Reais</h3>
            <p className="text-gray-600">Estudos de caso detalhados dos nossos projetos mais interessantes</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="bg-pink-100 rounded-full p-3 w-16 h-16 mx-auto mb-4">
              <Users className="h-10 w-10 text-pink-600 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Comunidade</h3>
            <p className="text-gray-600">Faça parte de uma rede de profissionais que se importam com UX</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Junte-se a mais de 500 profissionais
            </h2>
            <p className="text-gray-600">
              Cadastre-se gratuitamente e comece a receber nosso conteúdo
            </p>
          </div>

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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  placeholder="(19) 99999-9999"
                />
                <p className="text-xs text-gray-500 mt-1">Para conteúdos exclusivos pelo WhatsApp</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa/Projeto
                </label>
                <input
                  type="text"
                  value={data.empresa}
                  onChange={(e) => handleChange('empresa', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  placeholder="Nome da empresa ou projeto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cargo/Função
                </label>
                <select
                  value={data.cargo}
                  onChange={(e) => handleChange('cargo', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="desenvolvedor">Desenvolvedor</option>
                  <option value="designer">Designer</option>
                  <option value="empreendedor">Empreendedor</option>
                  <option value="marketing">Marketing</option>
                  <option value="gerente">Gerente/Diretor</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="estudante">Estudante</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Segmento
                </label>
                <select
                  value={data.segmento}
                  onChange={(e) => handleChange('segmento', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecione</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saude">Saúde</option>
                  <option value="educacao">Educação</option>
                  <option value="servicos">Serviços</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="startup">Startup</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                O que mais te interessa? *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'formularios', label: 'Dicas sobre formulários e conversão' },
                  { value: 'design', label: 'Design e UX para formulários' },
                  { value: 'tecnologia', label: 'Tecnologias e ferramentas' },
                  { value: 'cases', label: 'Cases de sucesso e estudos' },
                  { value: 'templates', label: 'Templates e recursos gratuitos' },
                  { value: 'tendencias', label: 'Tendências do mercado' }
                ].map((interesse) => (
                  <label key={interesse.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={data.interesses.includes(interesse.value)}
                      onChange={(e) => {
                        const currentInteresses = data.interesses.split(',').filter(i => i);
                        let newInteresses;
                        if (e.target.checked) {
                          newInteresses = [...currentInteresses, interesse.value];
                        } else {
                          newInteresses = currentInteresses.filter(i => i !== interesse.value);
                        }
                        handleChange('interesses', newInteresses.join(','));
                      }}
                      className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500 mr-3"
                    />
                    <span className="text-sm text-gray-700">{interesse.label}</span>
                  </label>
                ))}
              </div>
              {errors.interesses && (
                <p className="mt-2 text-sm text-red-600">{errors.interesses}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Como conheceu nosso trabalho?
              </label>
              <select
                value={data.comoConheceu}
                onChange={(e) => handleChange('comoConheceu', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
              >
                <option value="">Selecione</option>
                <option value="google">Google / Busca</option>
                <option value="indicacao">Indicação de amigo/colega</option>
                <option value="redes-sociais">Redes Sociais</option>
                <option value="portfolio">Viu nosso portfólio</option>
                <option value="cliente">Cliente anterior</option>
                <option value="evento">Evento/Palestra</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={data.receberWhatsApp === 'sim'}
                  onChange={(e) => handleChange('receberWhatsApp', e.target.checked ? 'sim' : '')}
                  className="mt-1 h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                />
                <div>
                  <span className="text-sm font-medium text-pink-900">
                    Quero receber conteúdos exclusivos no WhatsApp
                  </span>
                  <p className="text-sm text-pink-700 mt-1">
                    Dicas rápidas, templates gratuitos e oportunidades especiais enviadas 
                    diretamente no seu WhatsApp (máximo 2 mensagens por semana)
                  </p>
                </div>
              </label>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">O que você vai receber:</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Newsletter semanal</strong> com dicas práticas</li>
                <li>• <strong>Templates gratuitos</strong> de formulários</li>
                <li>• <strong>Cases detalhados</strong> dos nossos projetos</li>
                <li>• <strong>Primeira mão</strong> sobre novos serviços</li>
                <li>• <strong>Desconto exclusivo</strong> em projetos futuros</li>
              </ul>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-600 text-white px-8 py-4 rounded-lg hover:bg-pink-700 transition-colors font-medium text-lg"
              >
                Quero Fazer Parte! 🚀
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Você pode cancelar a qualquer momento. Respeitamos sua privacidade.
              </p>
            </div>
          </form>
        </div>

        {/* Testimonials */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            O que nossos assinantes dizem
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "As dicas da newsletter me ajudaram a aumentar a conversão dos meus 
                formulários em 40%. Conteúdo de qualidade e sempre aplicável!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <p className="font-semibold">Mariana Silva</p>
                  <p className="text-sm text-gray-600">UX Designer</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "Templates gratuitos incríveis e cases super detalhados. 
                É como ter uma consultoria gratuita toda semana!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  R
                </div>
                <div>
                  <p className="font-semibold">Rafael Costa</p>
                  <p className="text-sm text-gray-600">Desenvolvedor</p>
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

export default Newsletter;