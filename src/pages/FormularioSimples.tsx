import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import Modal from '../components/Modal';

const FormularioSimples: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, errors, handleChange, validateAll, reset } = useFormValidation(
    {
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      mensagem: ''
    },
    {
      nome: { required: true, minLength: 2 },
      email: { required: true, email: true },
      telefone: { required: true, phone: true },
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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Formulário Simples
          </h1>
          <p className="text-xl text-gray-600">
            Exemplo de formulário de contato básico com validação
          </p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Este é um formulário demonstrativo.</strong> Os dados não são enviados para lugar algum.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
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

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  value={data.empresa}
                  onChange={(e) => handleChange('empresa', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem *
              </label>
              <textarea
                id="mensagem"
                rows={4}
                value={data.mensagem}
                onChange={(e) => handleChange('mensagem', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                  errors.mensagem ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Conte-nos sobre seu projeto ou necessidade..."
              />
              {errors.mensagem && (
                <p className="mt-1 text-sm text-red-600">{errors.mensagem}</p>
              )}
            </div>

            <div className="pt-6 border-t">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
              >
                Enviar Formulário
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Características deste modelo:
          </h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Validação em tempo real</li>
            <li>• Design responsivo</li>
            <li>• Estados visuais para erros</li>
            <li>• Feedback imediato ao usuário</li>
            <li>• Integração com WhatsApp</li>
          </ul>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default FormularioSimples;