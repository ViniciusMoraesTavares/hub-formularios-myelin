import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FormularioSimples from './pages/FormularioSimples';
import FormularioMultiEtapas from './pages/FormularioMultiEtapas';
import PreAtendimento from './pages/PreAtendimento';
import Orcamento from './pages/Orcamento';
import Contato from './pages/Contato';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario-simples" element={<FormularioSimples />} />
          <Route path="/formulario-multi-etapas" element={<FormularioMultiEtapas />} />
          <Route path="/pre-atendimento" element={<PreAtendimento />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;