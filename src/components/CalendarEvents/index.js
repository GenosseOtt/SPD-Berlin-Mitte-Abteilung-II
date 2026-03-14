import React, { useState, useEffect } from 'react';
import './styles.css';

export default function CalendarEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetchCalendarData();
  }, []);

  const fetchCalendarData = async () => {
    try {
      setLoading(true);

      // Fetch pre-generated calendar data from static file
      const response = await fetch('/calendar-data.json');
      if (!response.ok) {
        throw new Error('Kalender-Daten nicht verfügbar');
      }

      const data = await response.json();
      setEvents(data.events || []);
      setLastUpdated(data.lastUpdated);
    } catch (err) {
      console.error('Error loading calendar data:', err);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (loading) {
    return (
      <div className="calendar-loading">
        <p>Lade Termine...</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="calendar-empty">
        <p>Keine anstehenden Termine in den nächsten 3 Monaten.</p>
        {lastUpdated && (
          <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
            Letzte Aktualisierung: {formatDate(lastUpdated)} um {formatTime(lastUpdated)}
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      {lastUpdated && (
        <div style={{
          fontSize: '12px',
          color: '#666',
          marginBottom: '15px',
          fontStyle: 'italic'
        }}>
          Letzte Aktualisierung: {formatDate(lastUpdated)} um {formatTime(lastUpdated)}
        </div>
      )}
      <div className="calendar-events">
        {events.map((event, index) => {
          const startDate = new Date(event.startDate);
          const endDate = new Date(event.endDate);

          return (
            <div key={event.uid || index} className="calendar-event">
              <div className="event-date">
                <div className="event-date-day">
                  {startDate.getDate()}
                </div>
                <div className="event-date-month">
                  {startDate.toLocaleDateString('de-DE', { month: 'short' })}
                </div>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-time">
                  {formatDate(event.startDate)} • {formatTime(event.startDate)}
                  {event.endDate && ` - ${formatTime(event.endDate)}`}
                </div>
                {event.location && (
                  <div className="event-location">
                    <img src="/img/svg/SPD_Hand_1_schwarz-frei_RGB.svg" alt="" />
                    {event.location}
                  </div>
                )}
                {event.description && (
                  <div className="event-description">{event.description}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

