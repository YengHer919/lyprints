import React from 'react';
import { User, Shield, Award, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Header */}
      <div className="section-header">
        <h2 className="section-title">About Me & Forge3D</h2>
        <p className="section-desc">
          Passionate designer, software engineer, and 3D printing craftsman launching a new business.
        </p>
      </div>

      {/* Main Profile Card */}
      <div className="about-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div className="info-icon" style={{ width: '56px', height: '56px', borderRadius: '16px' }}>
            <User size={28} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.6rem', fontWeight: 700 }}>Yeng Her</h3>
            <p style={{ color: '#376f99', fontWeight: 700, fontSize: '0.95rem' }}>
              Creator & Lead Engineer @ Forge3D
            </p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Welcome to Forge3D! I’m a new 3D modeler sharing my work, experimenting with new ideas, and creating cool and unique things for others to enjoy.
          I have experience creating models in TinkerCad and Blender and applying them practically in real life projects.
        </p>
      </div>

      {/* Secondary Profile Card */}
      <div className="about-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div className="info-icon" style={{ width: '56px', height: '56px', borderRadius: '16px' }}>
            <User size={28} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.6rem', fontWeight: 700 }}>Lila Tern</h3>
            <p style={{ color: '#376f99', fontWeight: 700, fontSize: '0.95rem' }}>
              Co-Creator & Business Manager @ Forge3D
            </p>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
          Welcome to Forge3D! I handle the business side of things—partnerships, operations, and making sure our ideas turn into reality.
          I'm passionate about helping bring great 3D work to the people who'll enjoy it most.
        </p>
      </div>

      <div className="section-header">
        <h2 className="section-title">Core Company Values</h2>
      </div>

      {/* Craftsmanship & Equipment */}
      <div className="steps-grid" style={{ marginBottom: '32px' }}>
        <div className="step-card">
          <Award size={24} color="#4f9ad4" style={{ marginBottom: '12px' }} />
          <h3>Quality Guarantee</h3>
          <p>Each model undergoes quality control inspection before shipping to ensure clean layer lines and perfect fit.</p>
        </div>

        <div className="step-card">
          <Shield size={24} color="#047857" style={{ marginBottom: '12px' }} />
          <h3>Safe & Secure Packaging</h3>
          <p>Products are carefully padded and packaged securely to prevent damage during transit.</p>
        </div>

        <div className="step-card">
          <Code size={24} color="#4f9ad4" style={{ marginBottom: '12px' }} />
          <h3>Custom Commissions</h3>
          <p>Have a unique idea? We work directly with clients to turn 3D concepts into physical reality.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
