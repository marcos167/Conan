'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: '🏠' },
    { name: 'Identity', href: '/identity', icon: '🔐' },
    { name: 'Wallet', href: '/wallet', icon: '💳' },
    { name: 'Telecom', href: '/telecom', icon: '📱' },
    { name: 'Marketplace', href: '/marketplace', icon: '🛍️' },
    { name: 'Travel', href: '/travel', icon: '✈️' },
    { name: 'Social', href: '/social', icon: '👥' },
    { name: 'Admin', href: '/admin', icon: '⚙️' },
  ];

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon gradient-text">⚡</span>
            {isSidebarOpen && <span className="logo-text gradient-text">Show</span>}
          </div>
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item ${pathname === item.href ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {isSidebarOpen && <span className="nav-text">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <button
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? '◀' : '▶'}
        </button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <header className="top-bar glass-card">
          <div className="top-bar-content">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search anything..."
                className="search-input"
              />
            </div>

            <div className="top-bar-actions">
              <button className="icon-btn">
                <span className="badge-dot"></span>
                🔔
              </button>
              <button className="icon-btn">💬</button>
              <button className="icon-btn">🌐</button>
              <div className="user-menu">
                <div className="user-avatar">
                  <span>CN</span>
                </div>
                <div className="user-info">
                  <div className="user-name">Conan</div>
                  <div className="user-role">Owner</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          {children}
        </main>
      </div>

      <style jsx>{`
        .app-layout {
          display: flex;
          min-height: 100vh;
          background: var(--bg-primary);
        }

        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          transition: width var(--transition-base);
          z-index: var(--z-fixed);
          display: flex;
          flex-direction: column;
        }

        .sidebar.open {
          width: 260px;
        }

        .sidebar.closed {
          width: 80px;
        }

        .sidebar-header {
          padding: var(--space-6);
          border-bottom: 1px solid var(--divider-color);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .logo-icon {
          font-size: var(--text-3xl);
        }

        .logo-text {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: 800;
          white-space: nowrap;
        }

        .sidebar-nav {
          flex: 1;
          padding: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          overflow-y: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-4);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
          font-weight: 500;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: var(--gradient-primary);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .nav-icon {
          font-size: var(--text-xl);
          min-width: 24px;
          text-align: center;
        }

        .nav-text {
          white-space: nowrap;
        }

        .sidebar-toggle {
          margin: var(--space-4);
          padding: var(--space-2);
          background: var(--bg-elevated);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .sidebar-toggle:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .main-content {
          flex: 1;
          margin-left: 260px;
          transition: margin-left var(--transition-base);
          display: flex;
          flex-direction: column;
        }

        .sidebar.closed + .main-content {
          margin-left: 80px;
        }

        .top-bar {
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
          margin: var(--space-6);
          padding: var(--space-4);
        }

        .top-bar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-6);
        }

        .search-bar {
          flex: 1;
          max-width: 500px;
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
        }

        .search-bar:focus-within {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }

        .search-icon {
          font-size: var(--text-lg);
          color: var(--text-tertiary);
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: var(--text-base);
        }

        .search-input::placeholder {
          color: var(--text-tertiary);
        }

        .top-bar-actions {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .icon-btn {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          font-size: var(--text-lg);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .icon-btn:hover {
          background: var(--bg-tertiary);
          border-color: var(--border-color-hover);
        }

        .badge-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: var(--color-error);
          border-radius: 50%;
          border: 2px solid var(--bg-secondary);
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-2) var(--space-3);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .user-menu:hover {
          background: var(--bg-tertiary);
          border-color: var(--border-color-hover);
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: 50%;
          font-weight: 700;
          font-size: var(--text-sm);
          color: white;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 600;
          font-size: var(--text-sm);
          color: var(--text-primary);
        }

        .user-role {
          font-size: var(--text-xs);
          color: var(--text-tertiary);
        }

        .page-content {
          flex: 1;
          padding: 0 var(--space-6) var(--space-6);
        }

        @media (max-width: 1024px) {
          .sidebar.open {
            width: 80px;
          }

          .nav-text,
          .logo-text {
            display: none;
          }

          .main-content {
            margin-left: 80px;
          }

          .search-bar {
            max-width: 300px;
          }
        }

        @media (max-width: 640px) {
          .sidebar {
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .main-content {
            margin-left: 0;
          }

          .user-info {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
