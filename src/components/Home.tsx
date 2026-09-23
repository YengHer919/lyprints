import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Package, Send } from 'lucide-react';

interface HomeProps {
  onNavigateToCatalog: () => void;
  onNavigateToContact: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToCatalog, onNavigateToContact }) => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">

        <h1 className="hero-title">
          Welcome to Forge3D
        </h1>

        <p className="hero-subtitle">
          Explore our collection of custom 3D models, mechanical art pieces, and handcrafted functional items.
        </p>

        <div className="hero-cta-buttons">
          <button className="btn-primary" onClick={onNavigateToCatalog}>
            <ShoppingBag size={18} />
            Browse Products
          </button>
          <button className="btn-secondary" onClick={onNavigateToContact}>
            <Send size={18} />
            Custom Orders & Inquiries
          </button>
        </div>
      </section>

      {/* How to Buy Instructions Section */}
      <section style={{ marginTop: '48px' }}>
        <div className="section-header">
          <h2 className="section-title">How to Buy Products</h2>
          <p className="section-desc">
            Follow these easy steps to order items from our product gallery or request a custom 3D model build.
          </p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <ShoppingBag size={20} color="#4f9ad4" />
              <h3>Browse the Product Gallery</h3>
            </div>
            <p>
              Navigate to the <strong>Product Gallery</strong> tab to explore available items, check dimensions, and prices.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Package size={20} color="#4f9ad4" />
              <h3>Select Item & Details</h3>
            </div>
            <p>
              Click on any product to view detailed specifications, color options, or custom dimensions for your item.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Send size={20} color="#4f9ad4" />
              <h3>Submit Inquiry Order</h3>
            </div>
            <p>
              Click <strong>"Inquire to Buy"</strong> or visit the <strong>Contact</strong> tab to submit your order details and shipping address.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <ShieldCheck size={20} color="#4f9ad4" />
              <h3>Confirmation & Delivery</h3>
            </div>
            <p>
              We'll confirm your order specs, process payment securely, and ship out your custom package with full tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Call to Action Banner */}
      <div className="about-card" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.6rem', fontFamily: 'Outfit', fontWeight: 700, marginBottom: '12px' }}>
          Ready to Explore the Gallery?
        </h3>
        <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '0 auto 24px' }}>
          Check out our <strong>Product Gallery</strong> or contact us directly to request custom 3D model commissions.
        </p>
        <button className="btn-primary" onClick={onNavigateToCatalog}>
          Open Product Gallery
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Home;
