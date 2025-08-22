import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import ProgressBar from '../components/ProgressBar';
import Modal from '../components/Modal';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FormularioMultiEtapas: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const steps = ['Dados Pessoais', 'Informações do Projeto', 'Finalização'];
  const totalSteps = 3;

  const { data, errors, handleChange, validateAll, reset } = useFormValidation(
    {
      // Etapa 1
      nome: '',
      email: '',
      telefone: '',
      // Etapa 2
      tipoServico: '',
      orcamento: '',
      prazo: '',
      descricao: '',
      // Etapa 3
      comoConheceu: '',
      newsletter: ''
    },
    {
      nome: { required: true, minLength: 2 },
      email: { required: true, email: true },
      telefone: { required: true, phone: true },
      tipoServico: { required: true },
      orcamento: { required: true },
      descricao: { required: true, minLength: 20 }
    }
  );

  const validateCurrentStep = (): boolean => {
    const stepFields = {
      1: ['nome', 'email', 'telefone'],
      2: ['tipoServico', 'orcamento', 'descricao'],
      3: []
    };

    const fieldsToValidate = stepFields[currentStep as keyof typeof stepFields];
    
    if (fieldsToValidate.length === 0) return true;

    let isValid = true;
    fieldsToValidate.forEach(field => {
      const value = data[field];
      const rules = {
        nome: { required: true, minLength: 2 },
        email: { required: true, email: true },
        telefone: { required: true, phone: true },
        tipoServico: { required: true },
        orcamento: { required: true },
        descricao: { required: true, minLength: 20 }
      };

      if (rules[field as keyof typeof rules] && !value.trim()) {
        isValid = false;
      }
    });

    return isValid;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      setShowModal(true);
      reset();
      setCurrentStep(1);
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Formulário Multi-etapas
          </h1>
          <p className="text-xl text-gray-600">
            Processo guiado com barra de progresso para melhor experiência
          </p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Este é um formulário demonstrativo.</strong> Navigate pelas etapas para ver a funcionalidade completa.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <ProgressBar 
            currentStep={currentStep}
            totalSteps={totalSteps}
            steps={steps}
          />

          <form onSubmit={handleSubmit}>
            {/* Etapa 1: Dados Pessoais */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Dados Pessoais
                  </h2>
                  <p className="text-gray-600">
                    Vamos começar com suas informações básicas
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={data.nome}
                      onChange={(e) => handleChange('nome', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    value={data.telefone}
                    onChange={(e) => handleChange('telefone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.telefone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="(19) 99999-9999"
                  />
                  {errors.telefone && (
                    <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>
                  )}
                </div>
              </div>
            )}

            {/* Etapa 2: Informações do Projeto */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Informações do Projeto
                  </h2>
                  <p className="text-gray-600">
                    Conte-nos sobre o que você precisa
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço *
                    </label>
                    <select
                      value={data.tipoServico}
                      onChange={(e) => handleChange('tipoServico', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.tipoServico ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="formulario-simples">Formulário Simples</option>
                      <option value="formulario-multi-etapas">Formulário Multi-etapas</option>
                      <option value="sistema-agendamento">Sistema de Agendamento</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="outro">Outro</option>
                    </select>
                    {errors.tipoServico && (
                      <p className="mt-1 text-sm text-red-600">{errors.tipoServico}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Orçamento Estimado *
                    </label>
                    <select
                      value={data.orcamento}
                      onChange={(e) => handleChange('orcamento', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.orcamento ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione uma faixa</option>
                      <option value="ate-1000">Até R$ 1.000</option>
                      <option value="1000-3000">R$ 1.000 - R$ 3.000</option>
                      <option value="3000-5000">R$ 3.000 - R$ 5.000</option>
                      <option value="acima-5000">Acima de R$ 5.000</option>
                    </select>
                    {errors.orcamento && (
                      <p className="mt-1 text-sm text-red-600">{errors.orcamento}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prazo Desejado
                  </label>
                  <select
                    value={data.prazo}
                    onChange={(e) => handleChange('prazo', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione um prazo</option>
                    <option value="urgente">Urgente (1-2 semanas)</option>
                    <option value="normal">Normal (3-4 semanas)</option>
                    <option value="flexivel">Flexível (1-2 meses)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Projeto *
                  </label>
                  <textarea
                    rows={4}
                    value={data.descricao}
                    onChange={(e) => handleChange('descricao', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                      errors.descricao ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Descreva detalhadamente o que você precisa..."
                  />
                  {errors.descricao && (
                    <p className="mt-1 text-sm text-red-600">{errors.descricao}</p>
                  )}
                </div>
              </div>
            )}

            {/* Etapa 3: Finalização */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Finalização
                  </h2>
                  <p className="text-gray-600">
                    Últimas informações para completarmos seu pedido
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Como conheceu nosso trabalho?
                  </label>
                  <select
                    value={data.comoConheceu}
                    onChange={(e) => handleChange('comoConheceu', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="google">Google / Busca</option>
                    <option value="indicacao">Indicação de amigo</option>
                    <option value="redes-sociais">Redes Sociais</option>
                    <option value="portfolio">Viu nosso portfólio</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={data.newsletter === 'sim'}
                      onChange={(e) => handleChange('newsletter', e.target.checked ? 'sim' : '')}
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Gostaria de receber nossa newsletter?
                      </span>
                      <p className="text-sm text-gray-500 mt-1">
                        Enviamos dicas sobre formulários e novidades sobre nossos serviços
                      </p>
                    </div>
                  </label>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Resumo do seu projeto:</h3>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p><strong>Nome:</strong> {data.nome}</p>
                    <p><strong>E-mail:</strong> {data.email}</p>
                    <p><strong>Serviço:</strong> {data.tipoServico}</p>
                    <p><strong>Orçamento:</strong> {data.orcamento}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Voltar
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Próximo
                  <ArrowRight className="ml-2" size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Finalizar
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">
            Características deste modelo:
          </h3>
          <ul className="text-green-800 space-y-1">
            <li>• Processo guiado em etapas</li>
            <li>• Barra de progresso visual</li>
            <li>• Validação por etapa</li>
            <li>• Resumo final do pedido</li>
            <li>• Navegação intuitiva</li>
          </ul>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default FormularioMultiEtapas;