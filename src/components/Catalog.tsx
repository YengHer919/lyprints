import React, { useState } from 'react';
import { initialProducts, catalogCategories, type Product } from '../data/products';
import { Search, ShoppingCart, X, CheckCircle } from 'lucide-react';

interface CatalogProps {
  onInquireItem: (productName: string) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onInquireItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'alphabetical-asc' | 'alphabetical-desc' | 'recent-desc' | 'recent-asc'>('default');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Handle clicking category pill buttons (including Alphabetical & Recent shortcut pills)
  const handleCategoryClick = (cat: string) => {
    if (cat === 'Alphabetical') {
      setSelectedCategory('All');
      setSortBy('alphabetical-asc');
    } else if (cat === 'Recent') {
      setSelectedCategory('All');
      setSortBy('recent-desc');
    } else {
      setSelectedCategory(cat);
    }
  };

  // 1. Filter products by search and category
  let displayedProducts = initialProducts.filter((product) => {
    const isSpecialCategory = selectedCategory === 'Alphabetical' || selectedCategory === 'Recent' || selectedCategory === 'All';
    const matchesCategory = isSpecialCategory || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Sort products based on selected sort rule
  const effectiveSortMode = selectedCategory === 'Alphabetical' ? 'alphabetical-asc'
    : selectedCategory === 'Recent' ? 'recent-desc'
      : sortBy;

  if (effectiveSortMode === 'alphabetical-asc') {
    displayedProducts = [...displayedProducts].sort((a, b) => a.name.localeCompare(b.name));
  } else if (effectiveSortMode === 'alphabetical-desc') {
    displayedProducts = [...displayedProducts].sort((a, b) => b.name.localeCompare(a.name));
  } else if (effectiveSortMode === 'recent-desc') {
    displayedProducts = [...displayedProducts].sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
  } else if (effectiveSortMode === 'recent-asc') {
    displayedProducts = [...displayedProducts].sort((a, b) => (a.time ?? 0) - (b.time ?? 0));
  }

  return (
    <div className="catalog-container">
      {/* Header */}
      <div className="section-header">
        <h2 className="section-title">Product Gallery</h2>
        <p className="section-desc">
          Browse our gallery of handcrafted items and 3D printed products. Select any item to view details or place an inquiry order.
        </p>
      </div>

      {/* Catalog Search & Category Filters */}
      <div className="catalog-controls">
        <div className="category-filter">
          {catalogCategories.map((cat) => {
            const isActive = selectedCategory === cat ||
              (cat === 'Alphabetical' && sortBy.startsWith('alphabetical')) ||
              (cat === 'Recent' && sortBy.startsWith('recent'));

            return (
              <button
                key={cat}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="search-box">
            <Search className="search-icon" size={18} />
            <input
              type="text"
              className="search-input"
              placeholder="Search items by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <select
              className="search-input"
              style={{ minWidth: '180px', paddingRight: '28px', cursor: 'pointer' }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="default">Sort: Default</option>
              <option value="alphabetical-asc">Sort: A to Z</option>
              <option value="alphabetical-desc">Sort: Z to A</option>
              <option value="recent-desc">Sort: Most Recent</option>
              <option value="recent-asc">Sort: Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid Gallery */}
      {displayedProducts.length > 0 ? (
        <div className="products-grid">
          {displayedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    // Fallback image if custom image URL fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span className="product-badge">{product.category}</span>
              </div>

              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.description}</p>

                <div className="product-footer">
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <button
                    className="btn-view-item"
                    onClick={() => setActiveModalProduct(product)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="about-card" style={{ textAlign: 'center', padding: '48px 24px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            No products found matching "{searchQuery}".
          </p>
        </div>
      )}

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="modal-overlay" onClick={() => setActiveModalProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModalProduct(null)}>
              <X size={20} />
            </button>

            <div style={{ borderRadius: '12px', overflow: 'hidden', height: '240px', marginBottom: '20px' }}>
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <span className="product-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '8px' }}>
                  {activeModalProduct.category}
                </span>
                <h2 style={{ fontFamily: 'Outfit', fontSize: '1.8rem', fontWeight: 700 }}>
                  {activeModalProduct.name}
                </h2>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'Outfit' }}>
                ${activeModalProduct.price.toFixed(2)}
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
              {activeModalProduct.description}
            </p>

            {activeModalProduct.features && (
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px', color: '#000000' }}>
                  Product Features:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {activeModalProduct.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '6px' }}>
                      <CheckCircle size={15} color="#047857" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
              <button
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  const itemTitle = activeModalProduct.name;
                  setActiveModalProduct(null);
                  onInquireItem(itemTitle);
                }}
              >
                <ShoppingCart size={18} />
                Inquire to Buy (${activeModalProduct.price.toFixed(2)})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
