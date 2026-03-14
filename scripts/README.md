# Calendar Integration

This project fetches calendar events from an Outlook calendar at build time to avoid CORS issues.

## How It Works

1. **Build Time Fetch**: The `scripts/fetch-calendar.js` script fetches the ICS calendar data from Outlook
2. **Static JSON**: Calendar data is saved to `static/calendar-data.json`
3. **Client Side Display**: React component reads the static JSON file
4. **Scheduled Updates**: GitHub Actions runs every 12 hours to rebuild with fresh calendar data

## Scripts

### `npm run fetch-calendar`
Manually fetch the latest calendar data from Outlook and save to `static/calendar-data.json`.

### `npm run build`
Automatically runs `prebuild` which fetches calendar data before building the site.

## GitHub Actions

### Deployment Workflow (`.github/workflows/deploy.yml`)
- Triggers on push to `main` branch
- Fetches calendar data before building
- Deploys to GitHub Pages

### Scheduled Update Workflow (`.github/workflows/scheduled-update.yml`)
- Runs every 12 hours (00:00 and 12:00 UTC)
- Can be triggered manually via GitHub Actions UI
- Fetches fresh calendar data and rebuilds the site

## Calendar Data Format

```json
{
  "events": [
    {
      "title": "Event Title",
      "description": "Event description",
      "location": "Event location",
      "startDate": "2026-03-20T23:00:00.000Z",
      "endDate": "2026-03-21T23:00:00.000Z",
      "uid": "unique-event-id"
    }
  ],
  "lastUpdated": "2026-03-14T10:34:33.587Z",
  "nextUpdate": "2026-03-14T22:34:33.587Z"
}
```

## Features

- ✅ No CORS issues (data fetched server-side at build time)
- ✅ Fast page loads (static JSON file)
- ✅ Automatic updates every 12 hours
- ✅ Shows events for next 3 months
- ✅ Calendar subscription button for native apps
- ✅ Responsive design with SPD branding

## Troubleshooting

If calendar data is not updating:
1. Check GitHub Actions logs for errors
2. Manually run `npm run fetch-calendar` locally
3. Verify the Outlook calendar URL is still valid
4. Check that the scheduled workflow has proper permissions
