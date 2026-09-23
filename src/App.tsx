import { useState } from 'react';
import './index.css';
import Home from './components/Home';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import logo from './components/Images/LogoT.png';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'catalog' | 'about' | 'contact'>('home');
  const [selectedProductInquiry, setSelectedProductInquiry] = useState<string>('');

  const handleInquireProduct = (productName: string) => {
    setSelectedProductInquiry(productName);
    setActiveTab('contact');
  };

  return (
    <div className="App">
      <div className="site-header">
        <header className="toolbar">
          <img src={logo} alt="Forge3D logo" style={{ maxHeight: '20vh' }} />
        </header>

        <nav className="navbar">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeTab === 'catalog' ? 'active' : ''}`}
            onClick={() => setActiveTab('catalog')}
          >
            Catalog
          </button>
          <button
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </nav>
      </div>

      <main className="content">
        {activeTab === 'home' && (
          <Home
            onNavigateToCatalog={() => setActiveTab('catalog')}
            onNavigateToContact={() => setActiveTab('contact')}
          />
        )}
        {activeTab === 'catalog' && (
          <Catalog onInquireItem={handleInquireProduct} />
        )}
        {activeTab === 'about' && <About />}
        {activeTab === 'contact' && (
          <Contact initialSubject={selectedProductInquiry} />
        )}
      </main>

      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          padding: "30px 0",
          marginTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "#b9dfff"
        }}
      >
        <button
          onClick={() => {
            setActiveTab('catalog');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            background: 'none',
            border: 'none',
            fontWeight: "bold",
            fontSize: "18px",
            color: "var(--text-main)",
            cursor: "pointer",
            paddingRight: "50px",
            paddingLeft: "50px",
            fontFamily: "inherit"
          }}
        >
          Browse Catalog
        </button>
        <button
          onClick={() => {
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            background: 'none',
            border: 'none',
            fontWeight: "bold",
            fontSize: "18px",
            color: "var(--text-main)",
            cursor: "pointer",
            paddingRight: "50px",
            paddingLeft: "50px",
            fontFamily: "inherit"
          }}
        >
          Contact & Orders
        </button>
      </footer>
    </div>
  );
}

export default App;
