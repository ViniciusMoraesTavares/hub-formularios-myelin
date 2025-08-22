import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import Modal from '../components/Modal';
import { Clock, User, Phone } from 'lucide-react';

const PreAtendimento: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, errors, handleChange, validateAll, reset } = useFormValidation(
    {
      nome: '',
      email: '',
      telefone: '',
      tipoAtendimento: '',
      urgencia: '',
      melhorHorario: '',
      jaECliente: '',
      assunto: '',
      descricao: ''
    },
    {
      nome: { required: true, minLength: 2 },
      email: { required: true, email: true },
      telefone: { required: true, phone: true },
      tipoAtendimento: { required: true },
      urgencia: { required: true },
      assunto: { required: true },
      descricao: { required: true, minLength: 15 }
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-purple-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
            <User className="h-12 w-12 text-purple-600 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pré-atendimento
          </h1>
          <p className="text-xl text-gray-600">
            Nos ajude a entender melhor sua necessidade para um atendimento mais eficiente
          </p>
          <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-800">
              <strong>Este formulário nos permite preparar um atendimento personalizado</strong> baseado em suas informações.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Seção: Dados de Contato */}
            <div className="pb-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Phone className="mr-3 text-purple-600" size={24} />
                Dados de Contato
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    value={data.nome}
                    onChange={(e) => handleChange('nome', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.nome ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Como devemos te chamar?"
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  value={data.telefone}
                  onChange={(e) => handleChange('telefone', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                    errors.telefone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="(19) 99999-9999"
                />
                {errors.telefone && (
                  <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>
                )}
              </div>
            </div>

            {/* Seção: Tipo de Atendimento */}
            <div className="pb-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Clock className="mr-3 text-purple-600" size={24} />
                Informações do Atendimento
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Atendimento *
                  </label>
                  <select
                    value={data.tipoAtendimento}
                    onChange={(e) => handleChange('tipoAtendimento', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.tipoAtendimento ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="novo-projeto">Novo Projeto</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="consultoria">Consultoria</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="outros">Outros</option>
                  </select>
                  {errors.tipoAtendimento && (
                    <p className="mt-1 text-sm text-red-600">{errors.tipoAtendimento}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Urgência *
                  </label>
                  <select
                    value={data.urgencia}
                    onChange={(e) => handleChange('urgencia', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                      errors.urgencia ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione a urgência</option>
                    <option value="baixa">Baixa - Sem pressa</option>
                    <option value="media">Média - Algumas semanas</option>
                    <option value="alta">Alta - Alguns dias</option>
                    <option value="urgente">Urgente - Hoje/Amanhã</option>
                  </select>
                  {errors.urgencia && (
                    <p className="mt-1 text-sm text-red-600">{errors.urgencia}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Melhor Horário para Contato
                  </label>
                  <select
                    value={data.melhorHorario}
                    onChange={(e) => handleChange('melhorHorario', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione um horário</option>
                    <option value="manha">Manhã (8h às 12h)</option>
                    <option value="tarde">Tarde (12h às 18h)</option>
                    <option value="noite">Noite (18h às 22h)</option>
                    <option value="qualquer">Qualquer horário</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Já é nosso cliente?
                  </label>
                  <select
                    value={data.jaECliente}
                    onChange={(e) => handleChange('jaECliente', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="sim">Sim, já sou cliente</option>
                    <option value="nao">Não, é o primeiro contato</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Seção: Detalhes */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Detalhes da Solicitação
              </h2>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  value={data.assunto}
                  onChange={(e) => handleChange('assunto', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors ${
                    errors.assunto ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Ex: Criação de formulário de orçamento"
                />
                {errors.assunto && (
                  <p className="mt-1 text-sm text-red-600">{errors.assunto}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição da Necessidade *
                </label>
                <textarea
                  rows={5}
                  value={data.descricao}
                  onChange={(e) => handleChange('descricao', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none ${
                    errors.descricao ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Detalhe sua necessidade para que possamos preparar um atendimento mais eficiente..."
                />
                {errors.descricao && (
                  <p className="mt-1 text-sm text-red-600">{errors.descricao}</p>
                )}
              </div>
            </div>

            <div className="pt-6 border-t">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg"
              >
                Solicitar Pré-atendimento
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">
            Como funciona nosso pré-atendimento:
          </h3>
          <ul className="text-purple-800 space-y-1">
            <li>• Análise prévia da sua solicitação</li>
            <li>• Preparação de materiais específicos</li>
            <li>• Agendamento de reunião personalizada</li>
            <li>• Atendimento mais focado e eficiente</li>
            <li>• Proposta alinhada com suas necessidades</li>
          </ul>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default PreAtendimento;