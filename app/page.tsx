'use client';

import MainLayout from '@/components/MainLayout';

export default function HomePage() {
  const stats = [
    { label: 'Total Users', value: '2.4M', change: '+12.5%', icon: '👥' },
    { label: 'Transactions', value: '$45.2M', change: '+8.3%', icon: '💰' },
    { label: 'Active SIMs', value: '1.8M', change: '+5.7%', icon: '📱' },
    { label: 'Orders', value: '156K', change: '+15.2%', icon: '📦' },
  ];

  const modules = [
    {
      name: 'Identity Verification',
      description: 'Biometric authentication with NFC and facial recognition',
      icon: '🔐',
      color: 'from-purple-500 to-blue-500',
      href: '/identity',
      stats: '98.5% accuracy'
    },
    {
      name: 'Global Wallet',
      description: 'Multi-currency wallet with P2P transfers and remittances',
      icon: '💳',
      color: 'from-blue-500 to-cyan-500',
      href: '/wallet',
      stats: '$45.2M volume'
    },
    {
      name: 'Telecom Services',
      description: 'SIM management and activation with verified agents',
      icon: '📱',
      color: 'from-cyan-500 to-teal-500',
      href: '/telecom',
      stats: '1.8M active lines'
    },
    {
      name: 'Marketplace',
      description: 'Verified sellers with global shipping logistics',
      icon: '🛍️',
      color: 'from-teal-500 to-green-500',
      href: '/marketplace',
      stats: '156K orders'
    },
    {
      name: 'Travel Hub',
      description: 'Flight, hotel bookings and health appointments',
      icon: '✈️',
      color: 'from-green-500 to-yellow-500',
      href: '/travel',
      stats: '12K bookings'
    },
    {
      name: 'Social Network',
      description: 'Verified-only content with AI translation',
      icon: '👥',
      color: 'from-yellow-500 to-orange-500',
      href: '/social',
      stats: '2.4M users'
    },
  ];

  const recentActivity = [
    { type: 'payment', user: 'Ahmed K.', action: 'Sent $250 via remittance', time: '2 min ago', icon: '💸' },
    { type: 'identity', user: 'Sarah M.', action: 'Completed identity verification', time: '5 min ago', icon: '✅' },
    { type: 'telecom', user: 'Ali R.', action: 'Activated new SIM card', time: '8 min ago', icon: '📱' },
    { type: 'order', user: 'Fatima H.', action: 'Placed order #45821', time: '12 min ago', icon: '🛒' },
    { type: 'social', user: 'Omar S.', action: 'Posted new content', time: '15 min ago', icon: '📝' },
  ];

  return (
    <MainLayout>
      <div className="dashboard">
        {/* Welcome Section */}
        <section className="welcome-section animate-slide-up">
          <div className="welcome-content">
            <h1 className="heading-2">Welcome back, <span className="gradient-text">Conan</span> 👋</h1>
            <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
              Here's what's happening with your superapp today
            </p>
          </div>
          <div className="quick-actions">
            <button className="btn btn-primary">
              <span>➕</span>
              New Transaction
            </button>
            <button className="btn btn-secondary">
              <span>📊</span>
              View Reports
            </button>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass-card animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-change positive">{stat.change}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Modules Grid */}
        <section className="modules-section">
          <h2 className="heading-4" style={{ marginBottom: 'var(--space-6)' }}>Core Modules</h2>
          <div className="modules-grid">
            {modules.map((module, index) => (
              <a
                key={index}
                href={module.href}
                className="module-card glass-card hover-lift"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className={`module-icon bg-gradient-to-br ${module.color}`}>
                  {module.icon}
                </div>
                <div className="module-content">
                  <h3 className="heading-6">{module.name}</h3>
                  <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                    {module.description}
                  </p>
                  <div className="module-stats">
                    <span className="badge badge-primary">{module.stats}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="activity-section">
          <div className="section-header">
            <h2 className="heading-4">Recent Activity</h2>
            <button className="btn btn-ghost btn-sm">View All →</button>
          </div>
          <div className="activity-list glass-card">
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-content">
                  <div className="activity-user">{activity.user}</div>
                  <div className="activity-action">{activity.action}</div>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
          padding: var(--space-6) 0;
        }

        .welcome-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-6);
          flex-wrap: wrap;
        }

        .welcome-content {
          flex: 1;
        }

        .quick-actions {
          display: flex;
          gap: var(--space-3);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .stat-change {
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .stat-change.positive {
          color: var(--color-success);
        }

        .modules-section {
          margin-top: var(--space-4);
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: var(--space-6);
        }

        .module-card {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-6);
          text-decoration: none;
          animation: slideUp var(--transition-base) ease-out;
          animation-fill-mode: both;
        }

        .module-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-3xl);
          border-radius: var(--radius-lg);
          flex-shrink: 0;
        }

        .module-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .module-stats {
          margin-top: auto;
        }

        .activity-section {
          margin-top: var(--space-4);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-6);
        }

        .activity-list {
          padding: var(--space-4);
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-4);
          border-bottom: 1px solid var(--divider-color);
          transition: background var(--transition-base);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-item:hover {
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-md);
        }

        .activity-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          font-size: var(--text-xl);
        }

        .activity-content {
          flex: 1;
        }

        .activity-user {
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: var(--space-1);
        }

        .activity-action {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .activity-time {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        @media (max-width: 640px) {
          .welcome-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .quick-actions {
            width: 100%;
            flex-direction: column;
          }

          .quick-actions button {
            width: 100%;
          }

          .modules-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </MainLayout>
  );
}
