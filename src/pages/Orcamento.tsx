import React, { useState } from 'react';
import { useFormValidation } from '../hooks/useFormValidation';
import Modal from '../components/Modal';
import { Calculator, DollarSign, Package } from 'lucide-react';

const Orcamento: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, errors, handleChange, validateAll, reset } = useFormValidation(
    {
      // Dados básicos
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      
      // Tipo de projeto
      tipoFormulario: '',
      funcionalidades: '',
      integracao: '',
      design: '',
      
      // Detalhes técnicos
      prazo: '',
      orcamento: '',
      hospedagem: '',
      
      // Descrição
      descricaoProjeto: '',
      referenciasSites: '',
      observacoes: ''
    },
    {
      nome: { required: true, minLength: 2 },
      email: { required: true, email: true },
      telefone: { required: true, phone: true },
      tipoFormulario: { required: true },
      prazo: { required: true },
      orcamento: { required: true },
      descricaoProjeto: { required: true, minLength: 30 }
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
        <div className="text-center mb-12">
          <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto mb-6">
            <Calculator className="h-12 w-12 text-orange-600 mx-auto" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solicitar Orçamento
          </h1>
          <p className="text-xl text-gray-600">
            Preencha os detalhes do seu projeto para receber uma proposta personalizada
          </p>
          <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-800">
              <strong>Orçamento gratuito!</strong> Analise todos os detalhes e receba uma proposta sem compromisso.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Seção: Dados Básicos */}
            <div className="pb-8 border-b">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Package className="mr-3 text-orange-600" size={24} />
                Dados Básicos
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={data.telefone}
                    onChange={(e) => handleChange('telefone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                      errors.telefone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="(19) 99999-9999"
                  />
                  {errors.telefone && (
                    <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={data.empresa}
                    onChange={(e) => handleChange('empresa', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>
            </div>

            {/* Seção: Tipo de Projeto */}
            <div className="pb-8 border-b">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <DollarSign className="mr-3 text-orange-600" size={24} />
                Especificações do Projeto
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Formulário *
                  </label>
                  <select
                    value={data.tipoFormulario}
                    onChange={(e) => handleChange('tipoFormulario', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                      errors.tipoFormulario ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="simples">Formulário Simples</option>
                    <option value="multi-etapas">Formulário Multi-etapas</option>
                    <option value="agendamento">Sistema de Agendamento</option>
                    <option value="orcamento">Formulário de Orçamento</option>
                    <option value="cadastro">Cadastro/Newsletter</option>
                    <option value="personalizado">Personalizado</option>
                  </select>
                  {errors.tipoFormulario && (
                    <p className="mt-1 text-sm text-red-600">{errors.tipoFormulario}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Funcionalidades Desejadas
                    </label>
                    <select
                      multiple
                      value={data.funcionalidades.split(',')}
                      onChange={(e) => {
                        const values = Array.from(e.target.selectedOptions, option => option.value);
                        handleChange('funcionalidades', values.join(','));
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      size={4}
                    >
                      <option value="validacao">Validação Avançada</option>
                      <option value="upload">Upload de Arquivos</option>
                      <option value="progress">Barra de Progresso</option>
                      <option value="condicional">Campos Condicionais</option>
                      <option value="calendario">Integração Calendário</option>
                      <option value="pagamento">Gateway de Pagamento</option>
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Segure Ctrl/Cmd para selecionar múltiplas opções</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Integração com WhatsApp
                    </label>
                    <select
                      value={data.integracao}
                      onChange={(e) => handleChange('integracao', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione</option>
                      <option value="basica">Básica - Link simples</option>
                      <option value="avancada">Avançada - Mensagem formatada</option>
                      <option value="automatica">Automática - API WhatsApp</option>
                      <option value="nao">Não precisa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Design
                  </label>
                  <select
                    value={data.design}
                    onChange={(e) => handleChange('design', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione o nível</option>
                    <option value="basico">Básico - Template padrão</option>
                    <option value="personalizado">Personalizado - Sua identidade</option>
                    <option value="premium">Premium - Design único</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Seção: Orçamento e Prazo */}
            <div className="pb-8 border-b">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Orçamento e Prazo
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prazo Desejado *
                  </label>
                  <select
                    value={data.prazo}
                    onChange={(e) => handleChange('prazo', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                      errors.prazo ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione</option>
                    <option value="urgente">Urgente (1 semana)</option>
                    <option value="rapido">Rápido (2 semanas)</option>
                    <option value="normal">Normal (3-4 semanas)</option>
                    <option value="flexivel">Flexível (1-2 meses)</option>
                  </select>
                  {errors.prazo && (
                    <p className="mt-1 text-sm text-red-600">{errors.prazo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Orçamento Disponível *
                  </label>
                  <select
                    value={data.orcamento}
                    onChange={(e) => handleChange('orcamento', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors ${
                      errors.orcamento ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione</option>
                    <option value="ate-500">Até R$ 500</option>
                    <option value="500-1500">R$ 500 - R$ 1.500</option>
                    <option value="1500-3000">R$ 1.500 - R$ 3.000</option>
                    <option value="3000-5000">R$ 3.000 - R$ 5.000</option>
                    <option value="acima-5000">Acima de R$ 5.000</option>
                    <option value="a-negociar">A negociar</option>
                  </select>
                  {errors.orcamento && (
                    <p className="mt-1 text-sm text-red-600">{errors.orcamento}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hospedagem
                  </label>
                  <select
                    value={data.hospedagem}
                    onChange={(e) => handleChange('hospedagem', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option value="inclusa">Incluir hospedagem</option>
                    <option value="propria">Tenho hospedagem</option>
                    <option value="orientacao">Preciso de orientação</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Seção: Descrição */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Detalhes do Projeto
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Projeto *
                  </label>
                  <textarea
                    rows={5}
                    value={data.descricaoProjeto}
                    onChange={(e) => handleChange('descricaoProjeto', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none ${
                      errors.descricaoProjeto ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Descreva detalhadamente o que você precisa. Quanto mais informações, melhor será nossa proposta..."
                  />
                  {errors.descricaoProjeto && (
                    <p className="mt-1 text-sm text-red-600">{errors.descricaoProjeto}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sites de Referência
                  </label>
                  <textarea
                    rows={3}
                    value={data.referenciasSites}
                    onChange={(e) => handleChange('referenciasSites', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Compartilhe links de sites ou formulários que você gosta do design/funcionamento..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Observações Adicionais
                  </label>
                  <textarea
                    rows={3}
                    value={data.observacoes}
                    onChange={(e) => handleChange('observacoes', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Alguma informação extra que considera importante?"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium text-lg"
              >
                Solicitar Orçamento Gratuito
              </button>
            </div>
          </form>
        </div>

        {/* Pricing Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">
              O que está incluído:
            </h3>
            <ul className="text-orange-800 space-y-1">
              <li>• Análise detalhada do projeto</li>
              <li>• Proposta técnica completa</li>
              <li>• Cronograma de desenvolvimento</li>
              <li>• Orçamento detalhado por etapa</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              Próximos passos:
            </h3>
            <ul className="text-green-800 space-y-1">
              <li>• Análise da solicitação em 24h</li>
              <li>• Reunião via WhatsApp/Meet</li>
              <li>• Proposta personalizada</li>
              <li>• Início do desenvolvimento</li>
            </ul>
          </div>
        </div>
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Orcamento;