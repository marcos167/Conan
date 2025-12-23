'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';

export default function IdentityPage() {
    const [step, setStep] = useState<'select' | 'nfc' | 'ocr' | 'facial' | 'complete'>('select');
    const [isVerifying, setIsVerifying] = useState(false);

    const startVerification = (method: 'nfc' | 'ocr') => {
        setStep(method);
    };

    const proceedToFacial = () => {
        setIsVerifying(true);
        setTimeout(() => {
            setIsVerifying(false);
            setStep('facial');
        }, 2000);
    };

    const completeFacial = () => {
        setIsVerifying(true);
        setTimeout(() => {
            setIsVerifying(false);
            setStep('complete');
        }, 3000);
    };

    return (
        <MainLayout>
            <div className="identity-page">
                <div className="page-header">
                    <h1 className="heading-2">🔐 Identity Verification</h1>
                    <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                        Zero-trust security with biometric authentication
                    </p>
                </div>

                <div className="verification-container">
                    {step === 'select' && (
                        <div className="verification-step animate-scale-in">
                            <div className="step-card glass-card">
                                <div className="step-header">
                                    <h2 className="heading-4">Choose Verification Method</h2>
                                    <p className="body-base" style={{ color: 'var(--text-secondary)' }}>
                                        Select how you want to verify your identity
                                    </p>
                                </div>

                                <div className="method-options">
                                    <button
                                        className="method-card glass-card hover-lift"
                                        onClick={() => startVerification('nfc')}
                                    >
                                        <div className="method-icon">📱</div>
                                        <h3 className="heading-5">NFC Chip Reading</h3>
                                        <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                                            Scan your e-passport or national ID chip for instant verification
                                        </p>
                                        <span className="badge badge-primary">Recommended</span>
                                    </button>

                                    <button
                                        className="method-card glass-card hover-lift"
                                        onClick={() => startVerification('ocr')}
                                    >
                                        <div className="method-icon">📷</div>
                                        <h3 className="heading-5">Document Scan (OCR)</h3>
                                        <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                                            Take a photo of your physical ID with AI-powered verification
                                        </p>
                                        <span className="badge badge-success">Alternative</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 'nfc' && (
                        <div className="verification-step animate-scale-in">
                            <div className="step-card glass-card">
                                <div className="step-header">
                                    <h2 className="heading-4">📱 NFC Chip Reading</h2>
                                    <p className="body-base" style={{ color: 'var(--text-secondary)' }}>
                                        Place your document on the back of your phone
                                    </p>
                                </div>

                                <div className="nfc-scanner">
                                    <div className="scanner-animation">
                                        <div className="pulse-ring"></div>
                                        <div className="pulse-ring delay-1"></div>
                                        <div className="pulse-ring delay-2"></div>
                                        <div className="scanner-icon">📱</div>
                                    </div>
                                    <p className="body-lg" style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}>
                                        {isVerifying ? 'Reading chip data...' : 'Waiting for document...'}
                                    </p>
                                </div>

                                <div className="step-actions">
                                    <button className="btn btn-secondary" onClick={() => setStep('select')}>
                                        ← Back
                                    </button>
                                    <button className="btn btn-primary" onClick={proceedToFacial} disabled={isVerifying}>
                                        {isVerifying ? 'Reading...' : 'Simulate Success →'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 'ocr' && (
                        <div className="verification-step animate-scale-in">
                            <div className="step-card glass-card">
                                <div className="step-header">
                                    <h2 className="heading-4">📷 Document Scan</h2>
                                    <p className="body-base" style={{ color: 'var(--text-secondary)' }}>
                                        Position your ID within the frame
                                    </p>
                                </div>

                                <div className="ocr-scanner">
                                    <div className="camera-frame">
                                        <div className="frame-corner top-left"></div>
                                        <div className="frame-corner top-right"></div>
                                        <div className="frame-corner bottom-left"></div>
                                        <div className="frame-corner bottom-right"></div>
                                        <div className="camera-placeholder">
                                            <span style={{ fontSize: '4rem' }}>🪪</span>
                                            <p className="body-base" style={{ color: 'var(--text-secondary)' }}>
                                                Position your ID here
                                            </p>
                                        </div>
                                    </div>
                                    <div className="scan-tips">
                                        <div className="tip">✓ Good lighting</div>
                                        <div className="tip">✓ No glare</div>
                                        <div className="tip">✓ All corners visible</div>
                                    </div>
                                </div>

                                <div className="step-actions">
                                    <button className="btn btn-secondary" onClick={() => setStep('select')}>
                                        ← Back
                                    </button>
                                    <button className="btn btn-primary" onClick={proceedToFacial} disabled={isVerifying}>
                                        {isVerifying ? 'Scanning...' : 'Capture Photo →'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 'facial' && (
                        <div className="verification-step animate-scale-in">
                            <div className="step-card glass-card">
                                <div className="step-header">
                                    <h2 className="heading-4">👤 Facial Recognition</h2>
                                    <p className="body-base" style={{ color: 'var(--text-secondary)' }}>
                                        Complete liveness detection
                                    </p>
                                </div>

                                <div className="facial-scanner">
                                    <div className="face-frame">
                                        <div className="face-outline"></div>
                                        <div className="face-placeholder">
                                            <span style={{ fontSize: '6rem' }}>😊</span>
                                        </div>
                                    </div>
                                    <div className="liveness-instructions">
                                        <div className="instruction">
                                            <span className="instruction-icon">👁️</span>
                                            <span>Please blink</span>
                                        </div>
                                        <div className="instruction">
                                            <span className="instruction-icon">😊</span>
                                            <span>Now smile</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="step-actions">
                                    <button className="btn btn-secondary" onClick={() => setStep('select')}>
                                        ← Start Over
                                    </button>
                                    <button className="btn btn-primary" onClick={completeFacial} disabled={isVerifying}>
                                        {isVerifying ? 'Verifying...' : 'Complete Verification →'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 'complete' && (
                        <div className="verification-step animate-scale-in">
                            <div className="step-card glass-card">
                                <div className="success-animation">
                                    <div className="success-icon">✅</div>
                                    <h2 className="heading-3" style={{ marginTop: 'var(--space-6)' }}>
                                        Verification Complete!
                                    </h2>
                                    <p className="body-lg" style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-3)' }}>
                                        Your identity has been successfully verified
                                    </p>
                                </div>

                                <div className="verification-details">
                                    <div className="detail-item">
                                        <span className="detail-label">Name:</span>
                                        <span className="detail-value">Conan</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Document Type:</span>
                                        <span className="detail-value">E-Passport</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Verification Method:</span>
                                        <span className="detail-value">NFC + Facial Recognition</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Confidence Score:</span>
                                        <span className="detail-value">98.5%</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Status:</span>
                                        <span className="badge badge-success">Verified</span>
                                    </div>
                                </div>

                                <div className="step-actions">
                                    <button className="btn btn-primary" onClick={() => setStep('select')}>
                                        ← Verify Another
                                    </button>
                                    <button className="btn btn-secondary">
                                        Go to Dashboard →
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Panel */}
                <div className="info-panel glass-card">
                    <h3 className="heading-5">🔒 Security Features</h3>
                    <ul className="feature-list">
                        <li>✓ Zero-trust authentication</li>
                        <li>✓ End-to-end encryption</li>
                        <li>✓ 7-year data archival</li>
                        <li>✓ Anti-forgery detection</li>
                        <li>✓ Liveness verification</li>
                        <li>✓ GDPR compliant</li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
        .identity-page {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: var(--space-8);
          padding: var(--space-6) 0;
        }

        .page-header {
          grid-column: 1 / -1;
          margin-bottom: var(--space-4);
        }

        .verification-container {
          min-height: 600px;
        }

        .verification-step {
          animation: scaleIn var(--transition-base) ease-out;
        }

        .step-card {
          padding: var(--space-8);
        }

        .step-header {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .method-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-6);
        }

        .method-card {
          padding: var(--space-6);
          text-align: center;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all var(--transition-base);
        }

        .method-card:hover {
          border-color: var(--color-primary);
        }

        .method-icon {
          font-size: 4rem;
          margin-bottom: var(--space-4);
        }

        .nfc-scanner,
        .ocr-scanner,
        .facial-scanner {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--space-8);
        }

        .scanner-animation {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pulse-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid var(--color-primary);
          border-radius: 50%;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .pulse-ring.delay-1 {
          animation-delay: 0.5s;
        }

        .pulse-ring.delay-2 {
          animation-delay: 1s;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .scanner-icon {
          font-size: 5rem;
          z-index: 1;
        }

        .camera-frame {
          position: relative;
          width: 400px;
          height: 250px;
          border: 2px dashed var(--border-color);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .frame-corner {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 3px solid var(--color-primary);
        }

        .frame-corner.top-left {
          top: -2px;
          left: -2px;
          border-right: none;
          border-bottom: none;
          border-radius: var(--radius-md) 0 0 0;
        }

        .frame-corner.top-right {
          top: -2px;
          right: -2px;
          border-left: none;
          border-bottom: none;
          border-radius: 0 var(--radius-md) 0 0;
        }

        .frame-corner.bottom-left {
          bottom: -2px;
          left: -2px;
          border-right: none;
          border-top: none;
          border-radius: 0 0 0 var(--radius-md);
        }

        .frame-corner.bottom-right {
          bottom: -2px;
          right: -2px;
          border-left: none;
          border-top: none;
          border-radius: 0 0 var(--radius-md) 0;
        }

        .camera-placeholder {
          text-align: center;
        }

        .scan-tips {
          display: flex;
          gap: var(--space-4);
          margin-top: var(--space-6);
        }

        .tip {
          padding: var(--space-2) var(--space-4);
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          color: var(--color-success);
        }

        .face-frame {
          position: relative;
          width: 300px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .face-outline {
          position: absolute;
          width: 250px;
          height: 320px;
          border: 3px solid var(--color-primary);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: pulse 2s ease-in-out infinite;
        }

        .face-placeholder {
          z-index: 1;
        }

        .liveness-instructions {
          margin-top: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .instruction {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-3) var(--space-4);
          background: var(--bg-elevated);
          border-radius: var(--radius-md);
          font-size: var(--text-lg);
        }

        .instruction-icon {
          font-size: var(--text-2xl);
        }

        .success-animation {
          text-align: center;
          padding: var(--space-8);
        }

        .success-icon {
          font-size: 6rem;
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .verification-details {
          margin-top: var(--space-8);
          padding: var(--space-6);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: var(--space-3);
          border-bottom: 1px solid var(--divider-color);
        }

        .detail-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .detail-label {
          color: var(--text-secondary);
          font-size: var(--text-sm);
        }

        .detail-value {
          color: var(--text-primary);
          font-weight: 600;
        }

        .step-actions {
          display: flex;
          gap: var(--space-4);
          margin-top: var(--space-8);
          justify-content: center;
        }

        .info-panel {
          padding: var(--space-6);
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .feature-list {
          list-style: none;
          margin-top: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .feature-list li {
          color: var(--text-secondary);
          font-size: var(--text-sm);
        }

        @media (max-width: 1024px) {
          .identity-page {
            grid-template-columns: 1fr;
          }

          .info-panel {
            position: static;
          }

          .method-options {
            grid-template-columns: 1fr;
          }

          .camera-frame {
            width: 100%;
            max-width: 400px;
          }
        }
      `}</style>
        </MainLayout>
    );
}
