const ICAL = require('ical.js');
const https = require('https');
const fs = require('fs');
const path = require('path');

const CALENDAR_ICS_URL = 'https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/ca3f2350-3f02-47f9-90b0-0b5c8b0b9acb/cid-15939253758E7200/calendar.ics';

async function fetchCalendarData() {
  return new Promise((resolve, reject) => {
    https.get(CALENDAR_ICS_URL, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`Failed to fetch calendar: ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function parseCalendarEvents(icsData) {
  try {
    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents('vevent');

    const now = new Date();
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(now.getMonth() + 3);

    const events = vevents
      .map(vevent => {
        const event = new ICAL.Event(vevent);
        const startDate = event.startDate.toJSDate();
        const endDate = event.endDate.toJSDate();

        return {
          title: event.summary,
          description: event.description || '',
          location: event.location || '',
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          uid: event.uid,
        };
      })
      .filter(event => {
        const eventDate = new Date(event.startDate);
        return eventDate >= now && eventDate <= threeMonthsFromNow;
      })
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    return events;
  } catch (error) {
    console.error('Error parsing calendar data:', error);
    return [];
  }
}

async function generateCalendarData() {
  try {
    console.log('Fetching calendar data from Outlook...');
    const icsData = await fetchCalendarData();

    console.log('Parsing calendar events...');
    const events = parseCalendarEvents(icsData);

    const output = {
      events,
      lastUpdated: new Date().toISOString(),
      nextUpdate: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
    };

    const outputPath = path.join(__dirname, '../static/calendar-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

    console.log(`✅ Successfully generated calendar data with ${events.length} events`);
    console.log(`📁 Saved to: ${outputPath}`);

    return output;
  } catch (error) {
    console.error('❌ Error generating calendar data:', error);

    // Create empty fallback file
    const fallback = {
      events: [],
      lastUpdated: new Date().toISOString(),
      error: error.message,
    };

    const outputPath = path.join(__dirname, '../static/calendar-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(fallback, null, 2));

    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  generateCalendarData()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = { generateCalendarData };
