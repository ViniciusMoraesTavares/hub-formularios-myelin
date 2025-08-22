import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Home } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Myelin</span>
              <span className="text-sm text-gray-600 hidden sm:inline">Forms Hub</span>
            </Link>
            
            {location.pathname !== '/' && (
              <Link
                to="/"
                className="flex items-center space-x-1 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Home size={20} />
                <span>Voltar ao Início</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">© 2025 Myelin - Especialistas em Formulários Personalizados</p>
            <p className="text-sm">Este é um showcase demonstrativo de nossos serviços</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;