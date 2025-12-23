'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';

export default function WalletPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'transfer' | 'remittance' | 'cards'>('overview');

    const balances = [
        { currency: 'USD', amount: '12,450.00', flag: '🇺🇸', change: '+5.2%' },
        { currency: 'EUR', amount: '8,320.50', flag: '🇪🇺', change: '+2.8%' },
        { currency: 'GBP', amount: '6,150.75', flag: '🇬🇧', change: '+3.1%' },
        { currency: 'IQD', amount: '15,800,000', flag: '🇮🇶', change: '+1.5%' },
    ];

    const transactions = [
        { id: '#TXN-12345', type: 'received', from: 'Ahmed K.', amount: '+$250.00', time: '2 hours ago', status: 'completed' },
        { id: '#TXN-12344', type: 'sent', to: 'Sarah M.', amount: '-$180.00', time: '5 hours ago', status: 'completed' },
        { id: '#TXN-12343', type: 'remittance', to: 'Ali R.', amount: '-$500.00', time: '1 day ago', status: 'pending' },
        { id: '#TXN-12342', type: 'received', from: 'Fatima H.', amount: '+$320.00', time: '2 days ago', status: 'completed' },
    ];

    const cards = [
        { type: 'Virtual', last4: '4532', expiry: '12/26', status: 'active', color: 'from-purple-500 to-blue-500' },
        { type: 'Physical', last4: '8765', expiry: '08/27', status: 'active', color: 'from-blue-500 to-cyan-500' },
    ];

    return (
        <MainLayout>
            <div className="wallet-page">
                <div className="page-header">
                    <h1 className="heading-2">💳 Global Wallet</h1>
                    <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                        Multi-currency wallet with instant transfers and remittances
                    </p>
                </div>

                {/* Balance Overview */}
                <section className="balance-section">
                    <div className="total-balance glass-card">
                        <div className="balance-header">
                            <div>
                                <div className="caption">Total Balance (USD Equivalent)</div>
                                <div className="heading-2 gradient-text">$45,234.50</div>
                            </div>
                            <button className="btn btn-primary">
                                <span>➕</span>
                                Add Funds
                            </button>
                        </div>
                    </div>

                    <div className="currency-grid">
                        {balances.map((balance, index) => (
                            <div key={index} className="currency-card glass-card hover-lift">
                                <div className="currency-header">
                                    <span className="currency-flag">{balance.flag}</span>
                                    <span className="currency-code">{balance.currency}</span>
                                </div>
                                <div className="currency-amount">{balance.amount}</div>
                                <div className="currency-change positive">{balance.change}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tabs */}
                <section className="wallet-tabs">
                    <div className="tab-buttons glass-card">
                        <button
                            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            📊 Overview
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'transfer' ? 'active' : ''}`}
                            onClick={() => setActiveTab('transfer')}
                        >
                            💸 P2P Transfer
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'remittance' ? 'active' : ''}`}
                            onClick={() => setActiveTab('remittance')}
                        >
                            🌍 Remittance
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'cards' ? 'active' : ''}`}
                            onClick={() => setActiveTab('cards')}
                        >
                            💳 Cards
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'overview' && (
                            <div className="overview-tab animate-fade-in">
                                <div className="transactions-section glass-card">
                                    <div className="section-header">
                                        <h3 className="heading-5">Recent Transactions</h3>
                                        <button className="btn btn-ghost btn-sm">View All →</button>
                                    </div>
                                    <div className="transactions-list">
                                        {transactions.map((tx, index) => (
                                            <div key={index} className="transaction-item">
                                                <div className="tx-icon">
                                                    {tx.type === 'received' ? '📥' : tx.type === 'sent' ? '📤' : '🌍'}
                                                </div>
                                                <div className="tx-details">
                                                    <div className="tx-id">{tx.id}</div>
                                                    <div className="tx-party">
                                                        {tx.type === 'received' ? `From ${tx.from}` : `To ${tx.to || tx.from}`}
                                                    </div>
                                                </div>
                                                <div className="tx-amount" style={{ color: tx.type === 'received' ? 'var(--color-success)' : 'var(--text-primary)' }}>
                                                    {tx.amount}
                                                </div>
                                                <div className="tx-status">
                                                    <span className={`badge ${tx.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
                                                        {tx.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'transfer' && (
                            <div className="transfer-tab animate-fade-in">
                                <div className="transfer-form glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>Send Money Instantly</h3>
                                    <form className="form">
                                        <div className="form-group">
                                            <label className="form-label">Recipient</label>
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Username or scan QR code"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Amount</label>
                                            <div className="amount-input">
                                                <input
                                                    type="number"
                                                    className="input"
                                                    placeholder="0.00"
                                                />
                                                <select className="currency-select">
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>GBP</option>
                                                    <option>IQD</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Note (Optional)</label>
                                            <textarea
                                                className="input"
                                                rows={3}
                                                placeholder="Add a message..."
                                            ></textarea>
                                        </div>
                                        <div className="security-notice">
                                            <span>🔐</span>
                                            <span>Facial recognition required to confirm transfer</span>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                            Continue to Verification →
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {activeTab === 'remittance' && (
                            <div className="remittance-tab animate-fade-in">
                                <div className="remittance-form glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        International Remittance
                                    </h3>
                                    <div className="info-box">
                                        <span>ℹ️</span>
                                        <p className="body-sm">
                                            Send money to non-registered users. Recipient must verify identity at partner bank.
                                        </p>
                                    </div>
                                    <form className="form">
                                        <div className="form-group">
                                            <label className="form-label">Recipient Name</label>
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Full name as on ID"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Recipient ID Document</label>
                                            <div className="file-upload">
                                                <button type="button" className="btn btn-secondary">
                                                    📎 Upload Document
                                                </button>
                                                <span className="caption">PDF, JPG, or PNG</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Recipient Photo</label>
                                            <div className="file-upload">
                                                <button type="button" className="btn btn-secondary">
                                                    📷 Upload Photo
                                                </button>
                                                <span className="caption">Recent photo for verification</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Amount</label>
                                            <div className="amount-input">
                                                <input
                                                    type="number"
                                                    className="input"
                                                    placeholder="0.00"
                                                />
                                                <select className="currency-select">
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>GBP</option>
                                                    <option>IQD</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Pickup Location</label>
                                            <select className="input">
                                                <option>Select bank...</option>
                                                <option>Bank of Baghdad - Main Branch</option>
                                                <option>Rasheed Bank - Karrada</option>
                                                <option>Iraqi Trade Bank - Mansour</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                            Send Remittance →
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cards' && (
                            <div className="cards-tab animate-fade-in">
                                <div className="cards-grid">
                                    {cards.map((card, index) => (
                                        <div key={index} className={`credit-card bg-gradient-to-br ${card.color}`}>
                                            <div className="card-header">
                                                <span className="card-type">{card.type}</span>
                                                <span className="card-logo">SHOW</span>
                                            </div>
                                            <div className="card-chip">💳</div>
                                            <div className="card-number">•••• •••• •••• {card.last4}</div>
                                            <div className="card-footer">
                                                <div>
                                                    <div className="card-label">Expires</div>
                                                    <div className="card-value">{card.expiry}</div>
                                                </div>
                                                <div>
                                                    <div className="card-label">Status</div>
                                                    <div className="card-value">{card.status}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button className="add-card-btn glass-card hover-lift">
                                        <span style={{ fontSize: '3rem' }}>➕</span>
                                        <span className="heading-6">Request New Card</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <style jsx>{`
        .wallet-page {
          padding: var(--space-6) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .balance-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .total-balance {
          padding: var(--space-8);
        }

        .balance-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .currency-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
        }

        .currency-card {
          padding: var(--space-6);
        }

        .currency-header {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-3);
        }

        .currency-flag {
          font-size: var(--text-2xl);
        }

        .currency-code {
          font-weight: 700;
          font-size: var(--text-lg);
        }

        .currency-amount {
          font-size: var(--text-2xl);
          font-weight: 700;
          font-family: var(--font-display);
          margin-bottom: var(--space-2);
        }

        .currency-change {
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .currency-change.positive {
          color: var(--color-success);
        }

        .wallet-tabs {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .tab-buttons {
          display: flex;
          gap: var(--space-2);
          padding: var(--space-2);
          overflow-x: auto;
        }

        .tab-btn {
          padding: var(--space-3) var(--space-6);
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
          white-space: nowrap;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .tab-btn.active {
          background: var(--gradient-primary);
          color: white;
        }

        .tab-content {
          min-height: 400px;
        }

        .transactions-section {
          padding: var(--space-6);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-6);
        }

        .transactions-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .transaction-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
        }

        .transaction-item:hover {
          background: var(--bg-tertiary);
        }

        .tx-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          font-size: var(--text-2xl);
        }

        .tx-details {
          flex: 1;
        }

        .tx-id {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .tx-party {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .tx-amount {
          font-size: var(--text-xl);
          font-weight: 700;
          font-family: var(--font-display);
        }

        .transfer-form,
        .remittance-form {
          padding: var(--space-8);
          max-width: 600px;
          margin: 0 auto;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .form-label {
          font-weight: 600;
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .amount-input {
          display: flex;
          gap: var(--space-2);
        }

        .amount-input input {
          flex: 1;
        }

        .currency-select {
          width: 120px;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-weight: 600;
          cursor: pointer;
        }

        .security-notice {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .info-box {
          display: flex;
          gap: var(--space-3);
          padding: var(--space-4);
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid var(--color-info);
          border-radius: var(--radius-md);
          margin-bottom: var(--space-6);
        }

        .file-upload {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--space-6);
        }

        .credit-card {
          aspect-ratio: 1.586;
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-xl);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-type {
          font-size: var(--text-sm);
          font-weight: 600;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .card-logo {
          font-size: var(--text-xl);
          font-weight: 800;
          font-family: var(--font-display);
        }

        .card-chip {
          font-size: var(--text-4xl);
        }

        .card-number {
          font-size: var(--text-2xl);
          font-weight: 600;
          letter-spacing: 0.1em;
          font-family: 'Courier New', monospace;
        }

        .card-footer {
          display: flex;
          gap: var(--space-8);
        }

        .card-label {
          font-size: var(--text-xs);
          opacity: 0.8;
          margin-bottom: var(--space-1);
        }

        .card-value {
          font-weight: 600;
          text-transform: capitalize;
        }

        .add-card-btn {
          aspect-ratio: 1.586;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-3);
          cursor: pointer;
          border: 2px dashed var(--border-color);
        }

        .add-card-btn:hover {
          border-color: var(--color-primary);
        }

        @media (max-width: 640px) {
          .balance-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-4);
          }

          .tab-buttons {
            flex-wrap: nowrap;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </MainLayout>
    );
}
