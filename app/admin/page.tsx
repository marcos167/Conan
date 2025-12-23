'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'shipments' | 'finance' | 'telecom' | 'employees'>('overview');

    const stats = [
        { label: 'Total Revenue', value: '$45.2M', change: '+12.5%', icon: '💰', color: 'from-green-500 to-emerald-500' },
        { label: 'Active Users', value: '2.4M', change: '+8.3%', icon: '👥', color: 'from-blue-500 to-cyan-500' },
        { label: 'Orders Today', value: '1,234', change: '+15.2%', icon: '📦', color: 'from-purple-500 to-pink-500' },
        { label: 'Active SIMs', value: '1.8M', change: '+5.7%', icon: '📱', color: 'from-orange-500 to-yellow-500' },
    ];

    const recentShipments = [
        { id: 'SHP-12345', from: 'London', to: 'Baghdad', status: 'in-transit', progress: 65 },
        { id: 'SHP-12344', from: 'Singapore', to: 'Erbil', status: 'in-transit', progress: 40 },
        { id: 'SHP-12343', from: 'London', to: 'Basra', status: 'delivered', progress: 100 },
    ];

    const financialData = [
        { category: 'E-commerce', amount: '$25.4M', percentage: 56 },
        { category: 'Fintech', amount: '$12.8M', percentage: 28 },
        { category: 'Telecom', amount: '$5.2M', percentage: 12 },
        { category: 'Travel', amount: '$1.8M', percentage: 4 },
    ];

    const employees = [
        { name: 'Ahmed K.', role: 'Warehouse Manager', location: 'London', performance: 95 },
        { name: 'Sarah M.', role: 'Customer Support', location: 'Singapore', performance: 92 },
        { name: 'Ali R.', role: 'Telecom Agent', location: 'Baghdad', performance: 88 },
        { name: 'Fatima H.', role: 'Logistics Coordinator', location: 'Basra', performance: 90 },
    ];

    return (
        <MainLayout>
            <div className="admin-page">
                <div className="page-header">
                    <h1 className="heading-2">⚙️ Admin Control Panel</h1>
                    <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                        Master dashboard for monitoring global operations
                    </p>
                </div>

                {/* Stats Grid */}
                <section className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card glass-card">
                            <div className={`stat-icon-large bg-gradient-to-br ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div className="stat-details">
                                <div className="stat-label">{stat.label}</div>
                                <div className="stat-value-large">{stat.value}</div>
                                <div className="stat-change positive">{stat.change}</div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Tabs */}
                <section className="admin-tabs">
                    <div className="tab-buttons glass-card">
                        <button
                            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            📊 Overview
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'shipments' ? 'active' : ''}`}
                            onClick={() => setActiveTab('shipments')}
                        >
                            🚚 Shipments
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'finance' ? 'active' : ''}`}
                            onClick={() => setActiveTab('finance')}
                        >
                            💰 Finance
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'telecom' ? 'active' : ''}`}
                            onClick={() => setActiveTab('telecom')}
                        >
                            📱 Telecom
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'employees' ? 'active' : ''}`}
                            onClick={() => setActiveTab('employees')}
                        >
                            👥 Employees
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'overview' && (
                            <div className="overview-tab animate-fade-in">
                                <div className="overview-grid">
                                    <div className="overview-card glass-card">
                                        <h3 className="heading-6" style={{ marginBottom: 'var(--space-4)' }}>
                                            📈 Revenue Trend (Last 7 Days)
                                        </h3>
                                        <div className="chart-placeholder">
                                            <div className="chart-bars">
                                                <div className="bar" style={{ height: '60%' }}></div>
                                                <div className="bar" style={{ height: '75%' }}></div>
                                                <div className="bar" style={{ height: '55%' }}></div>
                                                <div className="bar" style={{ height: '85%' }}></div>
                                                <div className="bar" style={{ height: '70%' }}></div>
                                                <div className="bar" style={{ height: '90%' }}></div>
                                                <div className="bar" style={{ height: '95%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overview-card glass-card">
                                        <h3 className="heading-6" style={{ marginBottom: 'var(--space-4)' }}>
                                            🌍 Global Activity Map
                                        </h3>
                                        <div className="map-placeholder">
                                            <div className="location-dot" style={{ top: '30%', left: '20%' }}>
                                                <span className="dot"></span>
                                                <span className="label">London</span>
                                            </div>
                                            <div className="location-dot" style={{ top: '45%', left: '55%' }}>
                                                <span className="dot"></span>
                                                <span className="label">Baghdad</span>
                                            </div>
                                            <div className="location-dot" style={{ top: '60%', left: '80%' }}>
                                                <span className="dot"></span>
                                                <span className="label">Singapore</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'shipments' && (
                            <div className="shipments-tab animate-fade-in">
                                <div className="shipments-list glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        Active Shipments
                                    </h3>
                                    {recentShipments.map((shipment) => (
                                        <div key={shipment.id} className="shipment-item">
                                            <div className="shipment-header">
                                                <div className="shipment-id">{shipment.id}</div>
                                                <span className={`badge ${shipment.status === 'delivered' ? 'badge-success' : 'badge-warning'}`}>
                                                    {shipment.status}
                                                </span>
                                            </div>
                                            <div className="shipment-route">
                                                <span>📍 {shipment.from}</span>
                                                <span>→</span>
                                                <span>📍 {shipment.to}</span>
                                            </div>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{ width: `${shipment.progress}%` }}></div>
                                            </div>
                                            <div className="progress-label">{shipment.progress}% Complete</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'finance' && (
                            <div className="finance-tab animate-fade-in">
                                <div className="finance-breakdown glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        Revenue Breakdown
                                    </h3>
                                    {financialData.map((item, index) => (
                                        <div key={index} className="finance-item">
                                            <div className="finance-header">
                                                <span className="finance-category">{item.category}</span>
                                                <span className="finance-amount">{item.amount}</span>
                                            </div>
                                            <div className="finance-bar">
                                                <div className="finance-fill" style={{ width: `${item.percentage}%` }}></div>
                                            </div>
                                            <div className="finance-percentage">{item.percentage}%</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'telecom' && (
                            <div className="telecom-tab animate-fade-in">
                                <div className="telecom-stats glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        Telecom Network Status
                                    </h3>
                                    <div className="network-grid">
                                        <div className="network-card">
                                            <div className="network-icon">🟡</div>
                                            <div className="network-name">Asia Cell</div>
                                            <div className="network-stat">1.2M Active</div>
                                            <div className="network-status">✓ Operational</div>
                                        </div>
                                        <div className="network-card">
                                            <div className="network-icon">🔵</div>
                                            <div className="network-name">Zain Iraq</div>
                                            <div className="network-stat">600K Active</div>
                                            <div className="network-status">✓ Operational</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'employees' && (
                            <div className="employees-tab animate-fade-in">
                                <div className="employees-list glass-card">
                                    <div className="section-header">
                                        <h3 className="heading-5">Team Performance</h3>
                                        <button className="btn btn-primary btn-sm">+ Hire New</button>
                                    </div>
                                    <div className="employees-grid">
                                        {employees.map((employee, index) => (
                                            <div key={index} className="employee-card">
                                                <div className="employee-avatar">
                                                    {employee.name.charAt(0)}
                                                </div>
                                                <div className="employee-info">
                                                    <div className="employee-name">{employee.name}</div>
                                                    <div className="employee-role">{employee.role}</div>
                                                    <div className="employee-location">📍 {employee.location}</div>
                                                </div>
                                                <div className="performance-score">
                                                    <div className="score-circle">
                                                        <span className="score-value">{employee.performance}</span>
                                                    </div>
                                                    <div className="score-label">Performance</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <style jsx>{`
        .admin-page {
          padding: var(--space-6) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: var(--space-6);
          padding: var(--space-6);
        }

        .stat-icon-large {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          border-radius: var(--radius-xl);
          flex-shrink: 0;
        }

        .stat-details {
          flex: 1;
        }

        .stat-value-large {
          font-size: var(--text-4xl);
          font-weight: 700;
          font-family: var(--font-display);
          margin: var(--space-2) 0;
        }

        .admin-tabs {
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

        .overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-6);
        }

        .overview-card {
          padding: var(--space-6);
        }

        .chart-placeholder {
          height: 300px;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          padding: var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          width: 100%;
          height: 100%;
          gap: var(--space-2);
        }

        .bar {
          flex: 1;
          background: var(--gradient-primary);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          transition: all var(--transition-base);
        }

        .bar:hover {
          opacity: 0.8;
        }

        .map-placeholder {
          position: relative;
          height: 300px;
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
        }

        .location-dot {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
        }

        .dot {
          width: 16px;
          height: 16px;
          background: var(--color-primary);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .label {
          font-size: var(--text-sm);
          font-weight: 600;
          background: var(--bg-elevated);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-md);
        }

        .shipments-list {
          padding: var(--space-6);
        }

        .shipment-item {
          padding: var(--space-6);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-4);
        }

        .shipment-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3);
        }

        .shipment-id {
          font-weight: 700;
          font-family: var(--font-display);
        }

        .shipment-route {
          display: flex;
          gap: var(--space-3);
          align-items: center;
          margin-bottom: var(--space-4);
          color: var(--text-secondary);
        }

        .progress-bar {
          height: 8px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: var(--space-2);
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          transition: width var(--transition-base);
        }

        .progress-label {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          text-align: right;
        }

        .finance-breakdown {
          padding: var(--space-6);
        }

        .finance-item {
          padding: var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          margin-bottom: var(--space-4);
        }

        .finance-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--space-3);
        }

        .finance-category {
          font-weight: 600;
        }

        .finance-amount {
          font-weight: 700;
          font-family: var(--font-display);
          color: var(--color-success);
        }

        .finance-bar {
          height: 12px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          overflow: hidden;
          margin-bottom: var(--space-2);
        }

        .finance-fill {
          height: 100%;
          background: var(--gradient-primary);
          transition: width var(--transition-base);
        }

        .finance-percentage {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
          text-align: right;
        }

        .telecom-stats {
          padding: var(--space-6);
        }

        .network-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
        }

        .network-card {
          padding: var(--space-6);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          text-align: center;
        }

        .network-icon {
          font-size: 3rem;
          margin-bottom: var(--space-3);
        }

        .network-name {
          font-weight: 700;
          font-size: var(--text-xl);
          margin-bottom: var(--space-2);
        }

        .network-stat {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          margin-bottom: var(--space-2);
        }

        .network-status {
          color: var(--color-success);
          font-weight: 600;
        }

        .employees-list {
          padding: var(--space-6);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-6);
        }

        .employees-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-6);
        }

        .employee-card {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-6);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
        }

        .employee-avatar {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: 50%;
          font-size: var(--text-2xl);
          font-weight: 700;
          color: white;
        }

        .employee-info {
          flex: 1;
        }

        .employee-name {
          font-weight: 700;
          margin-bottom: var(--space-1);
        }

        .employee-role {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          margin-bottom: var(--space-1);
        }

        .employee-location {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        .performance-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
        }

        .score-circle {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: 50%;
        }

        .score-value {
          font-size: var(--text-xl);
          font-weight: 700;
          color: white;
        }

        .score-label {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
        }

        @media (max-width: 640px) {
          .overview-grid,
          .employees-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </MainLayout>
    );
}
