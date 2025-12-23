'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';

export default function MarketplacePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Products', icon: '🛍️' },
        { id: 'electronics', name: 'Electronics', icon: '📱' },
        { id: 'fashion', name: 'Fashion', icon: '👕' },
        { id: 'home', name: 'Home & Garden', icon: '🏠' },
        { id: 'beauty', name: 'Beauty', icon: '💄' },
        { id: 'sports', name: 'Sports', icon: '⚽' },
    ];

    const products = [
        {
            id: 1,
            name: 'iPhone 15 Pro Max',
            price: 1299.99,
            currency: 'USD',
            seller: 'Tech Store London',
            verified: true,
            rating: 4.8,
            reviews: 234,
            image: '📱',
            location: 'London, UK',
            shipping: 'Global'
        },
        {
            id: 2,
            name: 'Designer Handbag',
            price: 450.00,
            currency: 'USD',
            seller: 'Luxury Fashion SG',
            verified: true,
            rating: 4.9,
            reviews: 156,
            image: '👜',
            location: 'Singapore',
            shipping: 'Global'
        },
        {
            id: 3,
            name: 'Smart Watch Ultra',
            price: 799.99,
            currency: 'USD',
            seller: 'Tech Store London',
            verified: true,
            rating: 4.7,
            reviews: 189,
            image: '⌚',
            location: 'London, UK',
            shipping: 'Global'
        },
        {
            id: 4,
            name: 'Wireless Headphones',
            price: 299.99,
            currency: 'USD',
            seller: 'Audio Pro',
            verified: true,
            rating: 4.6,
            reviews: 412,
            image: '🎧',
            location: 'Singapore',
            shipping: 'Global'
        },
    ];

    return (
        <MainLayout>
            <div className="marketplace-page">
                <div className="page-header">
                    <h1 className="heading-2">🛍️ Global Marketplace</h1>
                    <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                        Shop from verified sellers worldwide with global shipping
                    </p>
                </div>

                {/* Search and Filters */}
                <section className="search-section glass-card">
                    <div className="search-container">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="btn btn-primary">Search</button>
                    </div>
                </section>

                {/* Categories */}
                <section className="categories-section">
                    <div className="categories-scroll">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`category-btn glass-card ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Products Grid */}
                <section className="products-section">
                    <div className="section-header">
                        <h2 className="heading-5">Featured Products</h2>
                        <div className="sort-controls">
                            <select className="sort-select">
                                <option>Sort by: Relevance</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Rating</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>

                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card glass-card hover-lift">
                                <div className="product-image">
                                    <span style={{ fontSize: '5rem' }}>{product.image}</span>
                                    {product.verified && (
                                        <span className="verified-badge">✓ Verified</span>
                                    )}
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-seller">
                                        <span className="seller-icon">🏪</span>
                                        {product.seller}
                                    </div>
                                    <div className="product-rating">
                                        <span className="rating-stars">⭐ {product.rating}</span>
                                        <span className="rating-count">({product.reviews})</span>
                                    </div>
                                    <div className="product-location">
                                        <span>📍</span>
                                        {product.location} • {product.shipping}
                                    </div>
                                    <div className="product-footer">
                                        <div className="product-price">
                                            ${product.price.toFixed(2)}
                                        </div>
                                        <button className="btn btn-primary btn-sm">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Shipping Info */}
                <section className="shipping-info glass-card">
                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-4)' }}>
                        🚚 Global Shipping Network
                    </h3>
                    <div className="shipping-features">
                        <div className="feature">
                            <span className="feature-icon">🌍</span>
                            <div>
                                <div className="feature-title">Worldwide Delivery</div>
                                <div className="feature-desc">From London & Singapore to Iraq</div>
                            </div>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">📦</span>
                            <div>
                                <div className="feature-title">Real-time Tracking</div>
                                <div className="feature-desc">Track your order every step</div>
                            </div>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">✅</span>
                            <div>
                                <div className="feature-title">Verified Sellers</div>
                                <div className="feature-desc">All sellers identity-verified</div>
                            </div>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🔒</span>
                            <div>
                                <div className="feature-title">Secure Payments</div>
                                <div className="feature-desc">Protected transactions</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .marketplace-page {
          padding: var(--space-6) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .search-section {
          padding: var(--space-6);
        }

        .search-container {
          display: flex;
          gap: var(--space-3);
          align-items: center;
        }

        .search-icon {
          font-size: var(--text-xl);
          color: var(--text-tertiary);
        }

        .search-input {
          flex: 1;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: var(--text-base);
        }

        .search-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .categories-section {
          overflow-x: auto;
        }

        .categories-scroll {
          display: flex;
          gap: var(--space-3);
          padding-bottom: var(--space-2);
        }

        .category-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-4);
          min-width: 120px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all var(--transition-base);
        }

        .category-btn:hover {
          border-color: var(--color-primary);
        }

        .category-btn.active {
          border-color: var(--color-primary);
          background: rgba(124, 58, 237, 0.1);
        }

        .category-icon {
          font-size: var(--text-3xl);
        }

        .category-name {
          font-size: var(--text-sm);
          font-weight: 600;
          white-space: nowrap;
        }

        .products-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sort-select {
          padding: var(--space-2) var(--space-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--space-6);
        }

        .product-card {
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .product-image {
          position: relative;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
        }

        .verified-badge {
          position: absolute;
          top: var(--space-3);
          right: var(--space-3);
          padding: var(--space-1) var(--space-3);
          background: var(--color-success);
          color: white;
          font-size: var(--text-xs);
          font-weight: 600;
          border-radius: var(--radius-full);
        }

        .product-info {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .product-name {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--text-primary);
        }

        .product-seller {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .seller-icon {
          font-size: var(--text-base);
        }

        .product-rating {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
        }

        .rating-stars {
          color: var(--color-warning);
          font-weight: 600;
        }

        .rating-count {
          color: var(--text-tertiary);
        }

        .product-location {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: var(--space-4);
          border-top: 1px solid var(--divider-color);
        }

        .product-price {
          font-size: var(--text-2xl);
          font-weight: 700;
          font-family: var(--font-display);
          color: var(--color-primary);
        }

        .shipping-info {
          padding: var(--space-8);
        }

        .shipping-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
        }

        .feature {
          display: flex;
          gap: var(--space-4);
          align-items: center;
        }

        .feature-icon {
          font-size: var(--text-3xl);
        }

        .feature-title {
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .feature-desc {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr;
          }

          .search-container {
            flex-direction: column;
          }

          .search-input {
            width: 100%;
          }
        }
      `}</style>
        </MainLayout>
    );
}
