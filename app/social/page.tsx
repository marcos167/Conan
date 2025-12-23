'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';

export default function SocialPage() {
    const [postContent, setPostContent] = useState('');
    const [showTranslation, setShowTranslation] = useState<{ [key: number]: boolean }>({});

    const posts = [
        {
            id: 1,
            author: 'Ahmed K.',
            verified: true,
            avatar: '👨',
            time: '2 hours ago',
            content: 'Just received my order from London! Amazing quality and fast shipping. Thank you Show! 🎉',
            originalLang: 'en',
            translatedContent: 'لقد استلمت طلبي من لندن! جودة مذهلة وشحن سريع. شكراً Show! 🎉',
            likes: 45,
            comments: 12,
            shares: 3
        },
        {
            id: 2,
            author: 'Sarah M.',
            verified: true,
            avatar: '👩',
            time: '5 hours ago',
            content: 'The new wallet feature is incredible! Sent money to my family in seconds with facial recognition. So secure! 💳',
            originalLang: 'en',
            translatedContent: 'ميزة المحفظة الجديدة رائعة! أرسلت المال لعائلتي في ثوانٍ مع التعرف على الوجه. آمن جداً! 💳',
            likes: 78,
            comments: 23,
            shares: 8
        },
        {
            id: 3,
            author: 'Ali R.',
            verified: true,
            avatar: '👨‍💼',
            time: '1 day ago',
            content: 'Successfully activated my new SIM card at the Show Center. The agent was professional and the process was quick! 📱',
            originalLang: 'en',
            translatedContent: 'نجحت في تفعيل بطاقة SIM الجديدة في مركز Show. كان الوكيل محترفاً والعملية سريعة! 📱',
            likes: 34,
            comments: 8,
            shares: 2
        },
    ];

    const toggleTranslation = (postId: number) => {
        setShowTranslation(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    };

    return (
        <MainLayout>
            <div className="social-page">
                <div className="page-header">
                    <h1 className="heading-2">👥 Social Network</h1>
                    <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                        Connect with verified users and share your experiences
                    </p>
                </div>

                <div className="social-layout">
                    {/* Main Feed */}
                    <div className="main-feed">
                        {/* Create Post */}
                        <div className="create-post glass-card">
                            <div className="post-header">
                                <div className="user-avatar">CN</div>
                                <input
                                    type="text"
                                    className="post-input"
                                    placeholder="What's on your mind, Conan?"
                                    value={postContent}
                                    onChange={(e) => setPostContent(e.target.value)}
                                />
                            </div>
                            <div className="post-actions">
                                <button className="action-btn">
                                    <span>📷</span>
                                    Photo
                                </button>
                                <button className="action-btn">
                                    <span>🎥</span>
                                    Video
                                </button>
                                <button className="action-btn">
                                    <span>😊</span>
                                    Feeling
                                </button>
                                <button className="btn btn-primary btn-sm" style={{ marginLeft: 'auto' }}>
                                    Post
                                </button>
                            </div>
                            <div className="verification-notice">
                                <span>✅</span>
                                <span>Only verified users can post content</span>
                            </div>
                        </div>

                        {/* Posts Feed */}
                        <div className="posts-feed">
                            {posts.map((post) => (
                                <div key={post.id} className="post-card glass-card">
                                    <div className="post-header">
                                        <div className="post-author">
                                            <div className="author-avatar">{post.avatar}</div>
                                            <div className="author-info">
                                                <div className="author-name">
                                                    {post.author}
                                                    {post.verified && <span className="verified-badge">✓</span>}
                                                </div>
                                                <div className="post-time">{post.time}</div>
                                            </div>
                                        </div>
                                        <button className="more-btn">⋯</button>
                                    </div>

                                    <div className="post-content">
                                        <p className="body-base">
                                            {showTranslation[post.id] ? post.translatedContent : post.content}
                                        </p>
                                    </div>

                                    <div className="post-translation">
                                        <button
                                            className="translate-btn"
                                            onClick={() => toggleTranslation(post.id)}
                                        >
                                            <span>🌐</span>
                                            {showTranslation[post.id] ? 'Show Original' : 'Translate to Arabic'}
                                        </button>
                                    </div>

                                    <div className="post-stats">
                                        <span>{post.likes} likes</span>
                                        <span>{post.comments} comments</span>
                                        <span>{post.shares} shares</span>
                                    </div>

                                    <div className="post-interactions">
                                        <button className="interaction-btn">
                                            <span>👍</span>
                                            Like
                                        </button>
                                        <button className="interaction-btn">
                                            <span>💬</span>
                                            Comment
                                        </button>
                                        <button className="interaction-btn">
                                            <span>🔄</span>
                                            Share
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="social-sidebar">
                        {/* AI Features */}
                        <div className="sidebar-card glass-card">
                            <h3 className="heading-6" style={{ marginBottom: 'var(--space-4)' }}>
                                🤖 AI Features
                            </h3>
                            <div className="features-list">
                                <div className="feature-item">
                                    <span className="feature-icon">✅</span>
                                    <span className="feature-text">Verified users only</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">🛡️</span>
                                    <span className="feature-text">AI anti-spam protection</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">🌐</span>
                                    <span className="feature-text">Real-time translation</span>
                                </div>
                                <div className="feature-item">
                                    <span className="feature-icon">🚫</span>
                                    <span className="feature-text">Duplicate content detection</span>
                                </div>
                            </div>
                        </div>

                        {/* Trending Topics */}
                        <div className="sidebar-card glass-card">
                            <h3 className="heading-6" style={{ marginBottom: 'var(--space-4)' }}>
                                🔥 Trending Topics
                            </h3>
                            <div className="trending-list">
                                <div className="trending-item">
                                    <div className="trending-tag">#ShowApp</div>
                                    <div className="trending-count">2.4K posts</div>
                                </div>
                                <div className="trending-item">
                                    <div className="trending-tag">#GlobalShopping</div>
                                    <div className="trending-count">1.8K posts</div>
                                </div>
                                <div className="trending-item">
                                    <div className="trending-tag">#SecurePayments</div>
                                    <div className="trending-count">1.2K posts</div>
                                </div>
                                <div className="trending-item">
                                    <div className="trending-tag">#TelecomServices</div>
                                    <div className="trending-count">890 posts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .social-page {
          padding: var(--space-6) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .social-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--space-6);
        }

        .main-feed {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .create-post {
          padding: var(--space-6);
        }

        .post-header {
          display: flex;
          gap: var(--space-3);
          margin-bottom: var(--space-4);
        }

        .user-avatar {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient-primary);
          border-radius: 50%;
          font-weight: 700;
          color: white;
        }

        .post-input {
          flex: 1;
          padding: var(--space-3) var(--space-4);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          font-size: var(--text-base);
        }

        .post-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .post-actions {
          display: flex;
          gap: var(--space-3);
          padding-top: var(--space-4);
          border-top: 1px solid var(--divider-color);
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .action-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .verification-notice {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-top: var(--space-4);
          padding: var(--space-3);
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid var(--color-success);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .posts-feed {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .post-card {
          padding: var(--space-6);
        }

        .post-author {
          display: flex;
          gap: var(--space-3);
          flex: 1;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-elevated);
          border-radius: 50%;
          font-size: var(--text-2xl);
        }

        .author-info {
          flex: 1;
        }

        .author-name {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: var(--color-success);
          color: white;
          border-radius: 50%;
          font-size: 12px;
        }

        .post-time {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        .more-btn {
          padding: var(--space-2);
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: var(--text-xl);
        }

        .post-content {
          margin: var(--space-4) 0;
          line-height: 1.6;
        }

        .post-translation {
          margin-bottom: var(--space-4);
        }

        .translate-btn {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-3);
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid var(--color-info);
          border-radius: var(--radius-md);
          color: var(--color-info);
          font-size: var(--text-sm);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .translate-btn:hover {
          background: rgba(59, 130, 246, 0.2);
        }

        .post-stats {
          display: flex;
          gap: var(--space-4);
          padding: var(--space-3) 0;
          border-top: 1px solid var(--divider-color);
          border-bottom: 1px solid var(--divider-color);
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .post-interactions {
          display: flex;
          gap: var(--space-2);
          margin-top: var(--space-3);
        }

        .interaction-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-3);
          background: transparent;
          border: none;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .interaction-btn:hover {
          background: var(--bg-secondary);
          color: var(--text-primary);
        }

        .social-sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .sidebar-card {
          padding: var(--space-6);
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .feature-icon {
          font-size: var(--text-lg);
        }

        .feature-text {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .trending-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .trending-item {
          padding: var(--space-3);
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .trending-item:hover {
          background: var(--bg-tertiary);
        }

        .trending-tag {
          font-weight: 600;
          color: var(--color-primary);
          margin-bottom: var(--space-1);
        }

        .trending-count {
          font-size: var(--text-sm);
          color: var(--text-tertiary);
        }

        @media (max-width: 1024px) {
          .social-layout {
            grid-template-columns: 1fr;
          }

          .social-sidebar {
            order: -1;
          }
        }
      `}</style>
        </MainLayout>
    );
}
