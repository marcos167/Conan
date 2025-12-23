'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';

export default function TelecomPage() {
    const [activeTab, setActiveTab] = useState<'inventory' | 'activate'>('inventory');

    const simCards = [
        { id: 'SIM-001', number: '+964 770 123 4567', provider: 'Asia Cell', status: 'active', activatedDate: '2024-01-15', icon: '📱' },
        { id: 'SIM-002', number: '+964 750 987 6543', provider: 'Zain Iraq', status: 'active', activatedDate: '2024-03-20', icon: '📱' },
        { id: 'SIM-003', number: '+964 780 555 1234', provider: 'Asia Cell', status: 'suspended', activatedDate: '2023-11-10', icon: '⚠️' },
    ];

    const [selectedSim, setSelectedSim] = useState<string | null>(null);

    const deactivateSim = (simId: string) => {
        if (confirm('Are you sure you want to deactivate this SIM card?')) {
            alert(`SIM ${simId} has been deactivated successfully`);
        }
    };

    return (
        <MainLayout>
            <div className="telecom-page">
                <div className="page-header">
                    <h1 className="heading-2">📱 Telecom Services</h1>
                    <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                        Manage your SIM cards and telecommunications services
                    </p>
                </div>

                {/* Stats */}
                <section className="stats-section">
                    <div className="stat-card glass-card">
                        <div className="stat-icon">📱</div>
                        <div className="stat-content">
                            <div className="stat-label">Active SIMs</div>
                            <div className="stat-value">2</div>
                        </div>
                    </div>
                    <div className="stat-card glass-card">
                        <div className="stat-icon">⚠️</div>
                        <div className="stat-content">
                            <div className="stat-label">Suspended</div>
                            <div className="stat-value">1</div>
                        </div>
                    </div>
                    <div className="stat-card glass-card">
                        <div className="stat-icon">📊</div>
                        <div className="stat-content">
                            <div className="stat-label">Total Lines</div>
                            <div className="stat-value">3</div>
                        </div>
                    </div>
                </section>

                {/* Tabs */}
                <section className="telecom-tabs">
                    <div className="tab-buttons glass-card">
                        <button
                            className={`tab-btn ${activeTab === 'inventory' ? 'active' : ''}`}
                            onClick={() => setActiveTab('inventory')}
                        >
                            📋 My SIM Cards
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'activate' ? 'active' : ''}`}
                            onClick={() => setActiveTab('activate')}
                        >
                            ➕ Activate New SIM
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'inventory' && (
                            <div className="inventory-tab animate-fade-in">
                                <div className="sim-grid">
                                    {simCards.map((sim) => (
                                        <div key={sim.id} className="sim-card glass-card">
                                            <div className="sim-header">
                                                <div className="sim-icon">{sim.icon}</div>
                                                <span className={`badge ${sim.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
                                                    {sim.status}
                                                </span>
                                            </div>
                                            <div className="sim-details">
                                                <div className="sim-id">{sim.id}</div>
                                                <div className="sim-number">{sim.number}</div>
                                                <div className="sim-provider">
                                                    <span className="provider-icon">
                                                        {sim.provider === 'Asia Cell' ? '🟡' : '🔵'}
                                                    </span>
                                                    {sim.provider}
                                                </div>
                                                <div className="sim-date">
                                                    Activated: {sim.activatedDate}
                                                </div>
                                            </div>
                                            <div className="sim-actions">
                                                <button className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
                                                    View Details
                                                </button>
                                                {sim.status === 'active' && (
                                                    <button
                                                        className="btn btn-ghost btn-sm"
                                                        onClick={() => deactivateSim(sim.id)}
                                                        style={{ color: 'var(--color-error)' }}
                                                    >
                                                        🗑️ Deactivate
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="info-panel glass-card">
                                    <h3 className="heading-6">ℹ️ Important Information</h3>
                                    <ul className="info-list">
                                        <li>All SIM cards registered to your verified identity are shown here</li>
                                        <li>You can instantly deactivate any suspicious or unknown lines</li>
                                        <li>Deactivation is permanent and cannot be undone</li>
                                        <li>Contact support if you see unauthorized SIM cards</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'activate' && (
                            <div className="activate-tab animate-fade-in">
                                <div className="activation-notice glass-card">
                                    <div className="notice-icon">🔒</div>
                                    <div className="notice-content">
                                        <h3 className="heading-5">Secure Activation Process</h3>
                                        <p className="body-base" style={{ color: 'var(--text-secondary)' }}>
                                            New SIM cards can only be activated through our verified agent network.
                                            Visit an authorized agent location with your verified ID.
                                        </p>
                                    </div>
                                </div>

                                <div className="agent-panel glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        🏢 Agent Activation Panel
                                    </h3>
                                    <p className="body-sm" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                                        This section is only accessible by authorized agents
                                    </p>

                                    <form className="activation-form">
                                        <div className="form-group">
                                            <label className="form-label">Customer Verification</label>
                                            <div className="verification-box">
                                                <div className="verification-icon">🔐</div>
                                                <div>
                                                    <div className="body-base" style={{ fontWeight: 600 }}>
                                                        NFC/OCR Document Reading Required
                                                    </div>
                                                    <div className="caption">
                                                        Agents must use the provided NFC/OCR reader
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-primary">
                                                    Start Scan
                                                </button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Facial Verification</label>
                                            <div className="verification-box">
                                                <div className="verification-icon">👤</div>
                                                <div>
                                                    <div className="body-base" style={{ fontWeight: 600 }}>
                                                        Live Facial Recognition
                                                    </div>
                                                    <div className="caption">
                                                        Customer must complete liveness check
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-secondary" disabled>
                                                    Pending Scan
                                                </button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Provider</label>
                                            <select className="input" disabled>
                                                <option>Select provider...</option>
                                                <option>Asia Cell</option>
                                                <option>Zain Iraq</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">SIM Card Number</label>
                                            <input
                                                type="text"
                                                className="input"
                                                placeholder="Enter SIM card ICCID"
                                                disabled
                                            />
                                        </div>

                                        <div className="security-notice">
                                            <span>⚠️</span>
                                            <span>Manual data entry is disabled. All information must be captured via NFC/OCR.</span>
                                        </div>

                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled>
                                            Activate SIM Card
                                        </button>
                                    </form>
                                </div>

                                <div className="agent-locations glass-card">
                                    <h3 className="heading-6" style={{ marginBottom: 'var(--space-4)' }}>
                                        📍 Authorized Agent Locations
                                    </h3>
                                    <div className="locations-list">
                                        <div className="location-item">
                                            <div className="location-icon">🏢</div>
                                            <div className="location-details">
                                                <div className="location-name">Show Center - Baghdad</div>
                                                <div className="location-address">Al-Karrada, Baghdad, Iraq</div>
                                            </div>
                                            <button className="btn btn-ghost btn-sm">Get Directions →</button>
                                        </div>
                                        <div className="location-item">
                                            <div className="location-icon">🏢</div>
                                            <div className="location-details">
                                                <div className="location-name">Show Center - Erbil</div>
                                                <div className="location-address">Downtown, Erbil, Iraq</div>
                                            </div>
                                            <button className="btn btn-ghost btn-sm">Get Directions →</button>
                                        </div>
                                        <div className="location-item">
                                            <div className="location-icon">🏢</div>
                                            <div className="location-details">
                                                <div className="location-name">Show Center - Basra</div>
                                                <div className="location-address">Al-Ashar, Basra, Iraq</div>
                                            </div>
                                            <button className="btn btn-ghost btn-sm">Get Directions →</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <style jsx>{`
        .telecom-page {
          padding: var(--space-6) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-6);
        }

        .stat-icon {
          font-size: var(--text-4xl);
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: var(--radius-xl);
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          margin-bottom: var(--space-1);
        }

        .stat-value {
          font-size: var(--text-3xl);
          font-weight: 700;
          font-family: var(--font-display);
        }

        .telecom-tabs {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .tab-buttons {
          display: flex;
          gap: var(--space-2);
          padding: var(--space-2);
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

        .sim-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-6);
          margin-bottom: var(--space-6);
        }

        .sim-card {
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .sim-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sim-icon {
          font-size: var(--text-3xl);
        }

        .sim-details {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .sim-id {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        .sim-number {
          font-size: var(--text-xl);
          font-weight: 700;
          font-family: var(--font-display);
        }

        .sim-provider {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-weight: 600;
          color: var(--text-secondary);
        }

        .provider-icon {
          font-size: var(--text-lg);
        }

        .sim-date {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        .sim-actions {
          display: flex;
          gap: var(--space-2);
          margin-top: auto;
        }

        .info-panel {
          padding: var(--space-6);
        }

        .info-list {
          list-style: none;
          margin-top: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .info-list li {
          padding-left: var(--space-6);
          position: relative;
          color: var(--text-secondary);
          font-size: var(--text-sm);
        }

        .info-list li::before {
          content: '•';
          position: absolute;
          left: var(--space-2);
          color: var(--color-primary);
          font-weight: bold;
        }

        .activation-notice {
          padding: var(--space-8);
          display: flex;
          gap: var(--space-6);
          align-items: center;
          margin-bottom: var(--space-6);
        }

        .notice-icon {
          font-size: 4rem;
        }

        .notice-content {
          flex: 1;
        }

        .agent-panel {
          padding: var(--space-8);
          margin-bottom: var(--space-6);
        }

        .activation-form {
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

        .verification-box {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
        }

        .verification-icon {
          font-size: var(--text-3xl);
        }

        .verification-box > div {
          flex: 1;
        }

        .security-notice {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-4);
          background: rgba(251, 191, 36, 0.1);
          border: 1px solid var(--color-warning);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .agent-locations {
          padding: var(--space-6);
        }

        .locations-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .location-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          transition: all var(--transition-base);
        }

        .location-item:hover {
          background: var(--bg-tertiary);
        }

        .location-icon {
          font-size: var(--text-2xl);
        }

        .location-details {
          flex: 1;
        }

        .location-name {
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .location-address {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        @media (max-width: 640px) {
          .sim-grid {
            grid-template-columns: 1fr;
          }

          .activation-notice {
            flex-direction: column;
            text-align: center;
          }

          .verification-box {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
        </MainLayout>
    );
}
