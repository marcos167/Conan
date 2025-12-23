'use client';

import { useState } from 'react';
import MainLayout from '@/components/MainLayout';

export default function TravelPage() {
    const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'health' | 'luxury'>('flights');

    return (
        <MainLayout>
            <div className="travel-page">
                <div className="page-header">
                    <h1 className="heading-2">✈️ Travel & Services Hub</h1>
                    <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                        Book flights, hotels, health appointments, and luxury experiences
                    </p>
                </div>

                {/* Tabs */}
                <section className="travel-tabs">
                    <div className="tab-buttons glass-card">
                        <button
                            className={`tab-btn ${activeTab === 'flights' ? 'active' : ''}`}
                            onClick={() => setActiveTab('flights')}
                        >
                            ✈️ Flights
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'hotels' ? 'active' : ''}`}
                            onClick={() => setActiveTab('hotels')}
                        >
                            🏨 Hotels
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'health' ? 'active' : ''}`}
                            onClick={() => setActiveTab('health')}
                        >
                            🏥 Health
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'luxury' ? 'active' : ''}`}
                            onClick={() => setActiveTab('luxury')}
                        >
                            💎 Luxury
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'flights' && (
                            <div className="flights-tab animate-fade-in">
                                <div className="booking-form glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        Search Flights
                                    </h3>
                                    <form className="form">
                                        <div className="trip-type">
                                            <label className="radio-label">
                                                <input type="radio" name="trip" defaultChecked />
                                                <span>Round Trip</span>
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="trip" />
                                                <span>One Way</span>
                                            </label>
                                            <label className="radio-label">
                                                <input type="radio" name="trip" />
                                                <span>Multi-city</span>
                                            </label>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">From</label>
                                                <input type="text" className="input" placeholder="Baghdad (BGW)" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">To</label>
                                                <input type="text" className="input" placeholder="London (LHR)" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Departure</label>
                                                <input type="date" className="input" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Return</label>
                                                <input type="date" className="input" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Passengers</label>
                                            <select className="input">
                                                <option>1 Adult</option>
                                                <option>2 Adults</option>
                                                <option>3 Adults</option>
                                                <option>4+ Adults</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                            Search Flights →
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {activeTab === 'hotels' && (
                            <div className="hotels-tab animate-fade-in">
                                <div className="booking-form glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        Find Hotels
                                    </h3>
                                    <form className="form">
                                        <div className="form-group">
                                            <label className="form-label">Destination</label>
                                            <input type="text" className="input" placeholder="City or hotel name" />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Check-in</label>
                                                <input type="date" className="input" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Check-out</label>
                                                <input type="date" className="input" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label className="form-label">Rooms</label>
                                                <select className="input">
                                                    <option>1 Room</option>
                                                    <option>2 Rooms</option>
                                                    <option>3+ Rooms</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Guests</label>
                                                <select className="input">
                                                    <option>1 Guest</option>
                                                    <option>2 Guests</option>
                                                    <option>3+ Guests</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                            Search Hotels →
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {activeTab === 'health' && (
                            <div className="health-tab animate-fade-in">
                                <div className="booking-form glass-card">
                                    <h3 className="heading-5" style={{ marginBottom: 'var(--space-6)' }}>
                                        Book Health Appointment
                                    </h3>
                                    <form className="form">
                                        <div className="form-group">
                                            <label className="form-label">Specialty</label>
                                            <select className="input">
                                                <option>General Practitioner</option>
                                                <option>Dentist</option>
                                                <option>Cardiologist</option>
                                                <option>Dermatologist</option>
                                                <option>Orthopedic</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Location</label>
                                            <select className="input">
                                                <option>Baghdad, Iraq</option>
                                                <option>London, UK</option>
                                                <option>Singapore</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Preferred Date</label>
                                            <input type="date" className="input" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Time Preference</label>
                                            <select className="input">
                                                <option>Morning (8AM - 12PM)</option>
                                                <option>Afternoon (12PM - 5PM)</option>
                                                <option>Evening (5PM - 8PM)</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                            Find Available Slots →
                                        </button>
                                    </form>
                                </div>

                                <div className="health-info glass-card">
                                    <h3 className="heading-6" style={{ marginBottom: 'var(--space-4)' }}>
                                        🏥 Partner Hospitals & Clinics
                                    </h3>
                                    <div className="hospitals-list">
                                        <div className="hospital-item">
                                            <span className="hospital-icon">🏥</span>
                                            <div>
                                                <div className="hospital-name">Baghdad Medical City</div>
                                                <div className="hospital-location">Baghdad, Iraq</div>
                                            </div>
                                        </div>
                                        <div className="hospital-item">
                                            <span className="hospital-icon">🏥</span>
                                            <div>
                                                <div className="hospital-name">London Bridge Hospital</div>
                                                <div className="hospital-location">London, UK</div>
                                            </div>
                                        </div>
                                        <div className="hospital-item">
                                            <span className="hospital-icon">🏥</span>
                                            <div>
                                                <div className="hospital-name">Singapore General Hospital</div>
                                                <div className="hospital-location">Singapore</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'luxury' && (
                            <div className="luxury-tab animate-fade-in">
                                <div className="luxury-grid">
                                    <div className="luxury-card glass-card hover-lift">
                                        <div className="luxury-icon">🍽️</div>
                                        <h3 className="heading-6">Fine Dining</h3>
                                        <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                                            Reserve tables at Michelin-starred restaurants worldwide
                                        </p>
                                        <button className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                                            Explore Restaurants
                                        </button>
                                    </div>
                                    <div className="luxury-card glass-card hover-lift">
                                        <div className="luxury-icon">🎭</div>
                                        <h3 className="heading-6">Events & Shows</h3>
                                        <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                                            Book tickets to exclusive events, concerts, and theater
                                        </p>
                                        <button className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                                            Browse Events
                                        </button>
                                    </div>
                                    <div className="luxury-card glass-card hover-lift">
                                        <div className="luxury-icon">🏖️</div>
                                        <h3 className="heading-6">Luxury Resorts</h3>
                                        <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                                            Experience 5-star resorts and private villas
                                        </p>
                                        <button className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                                            View Resorts
                                        </button>
                                    </div>
                                    <div className="luxury-card glass-card hover-lift">
                                        <div className="luxury-icon">🚁</div>
                                        <h3 className="heading-6">VIP Transport</h3>
                                        <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                                            Private jets, helicopters, and luxury car services
                                        </p>
                                        <button className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                                            Book Transport
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <style jsx>{`
        .travel-page {
          padding: var(--space-6) 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-8);
        }

        .travel-tabs {
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

        .booking-form {
          padding: var(--space-8);
          max-width: 800px;
          margin: 0 auto;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .trip-type {
          display: flex;
          gap: var(--space-6);
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          cursor: pointer;
        }

        .radio-label input {
          cursor: pointer;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
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

        .health-info {
          padding: var(--space-6);
          max-width: 800px;
          margin: var(--space-6) auto 0;
        }

        .hospitals-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .hospital-item {
          display: flex;
          gap: var(--space-3);
          padding: var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
        }

        .hospital-icon {
          font-size: var(--text-2xl);
        }

        .hospital-name {
          font-weight: 600;
          margin-bottom: var(--space-1);
        }

        .hospital-location {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .luxury-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--space-6);
        }

        .luxury-card {
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          text-align: center;
        }

        .luxury-icon {
          font-size: 4rem;
        }

        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .trip-type {
            flex-direction: column;
            gap: var(--space-3);
          }

          .luxury-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </MainLayout>
    );
}
