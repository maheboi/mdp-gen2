import React, { useState, useEffect } from 'react';
import { get } from 'aws-amplify/api';
import { Calendar as CalendarIcon } from 'lucide-react';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const restOperation = get({
          apiName: 'SheetAPI',
          path: '/sheet'
        });

        const { body } = await restOperation.response;
        const response = await body.json();
        
        if (!response.values || response.values.length === 0) {
          setEvents([]);
          return;
        }

        const [headers, ...rows] = response.values;
        const fetchedEvents = rows
          .map(row => ({
            date: row[0]?.startsWith('D') ? row[0].slice(1) : row[0],
            event: row[1]
          }))
          .filter(event => event.date && event.event);

        setEvents(fetchedEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Event Calendar</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay connected with our upcoming events and activities in the MDP community.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        {/* Events List */}
        <div className="max-w-4xl mx-auto">
          {error ? (
            <div className="bg-red-50 p-6 rounded-lg shadow-md text-center text-red-700">
              {error}
            </div>
          ) : events.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-700">No events scheduled at this time. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <CalendarIcon className="h-6 w-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black-900">{event.event}</h3>
                    <p className="text-gray-700">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;