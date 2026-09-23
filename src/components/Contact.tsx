import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject ? `Inquiry regarding: ${initialSubject}` : '');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <div className="section-header">
        <h2 className="section-title">Contact & Order Inquiries</h2>
        <p className="section-desc">
          Ready to purchase an item or request a custom 3D model order? Send us a message below.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-card">
          <h3 style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MessageSquare color="#4f9ad4" size={22} />
            Send an Order Request
          </h3>

          {isSubmitted ? (
            <div style={{ background: 'rgba(255, 255, 255, 0.6)', border: '1px solid #047857', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
              <CheckCircle2 size={42} color="#047857" style={{ margin: '0 auto 12px' }} />
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#047857', marginBottom: '8px' }}>
                Inquiry Received!
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Thank you, {name}! We have received your order request and will get back to you via email shortly.
              </p>
              <button
                className="btn-secondary"
                style={{ marginTop: '20px' }}
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setEmail('');
                  setSubject('');
                  setMessage('');
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="e.g. john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject / Item Requested</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Purchase Inquiry: Sample Product Item 1"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message & Order Details</label>
                <textarea
                  className="form-textarea"
                  placeholder="Include preferred color, quantity, shipping zip code, or any custom specifications..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={18} />
                Submit Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Direct Links */}
        <div>
          <div className="contact-card">
            <h3 style={{ fontFamily: 'Outfit', fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px' }}>
              Direct Information
            </h3>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={20} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>Email</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>contact@forge3d.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>Response Time</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Within 24 Hours</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem' }}>Location</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>United States</p>
              </div>
            </div>
          </div>

          {/* Purchasing FAQs */}
          <div className="contact-card" style={{ marginTop: '24px' }}>
            <h4 style={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: '#000000' }}>
              Purchasing FAQ
            </h4>

            <div style={{ marginBottom: '16px' }}>
              <h5 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>How long does production take?</h5>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Standard items ship within 2-4 business days. Custom orders depend on model complexity.</p>
            </div>

            <div>
              <h5 style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>Do you accept custom 3D files?</h5>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Yes! You can attach or link your .STL or .OBJ files in your message inquiry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
