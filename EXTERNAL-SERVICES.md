# External Services & Cookie Consent - Implementation Summary

## ✅ Implemented Services

### 1. **Plausible Analytics** 🔢
**Status:** ✅ Fully integrated with consent requirement

**Details:**
- Self-hosted at `analytics.johannesott.eu`
- Script: `pa-RGI1ZP3wPFgSnJOUwQjUt.js`
- Privacy-friendly, no cookies, fully anonymized
- Loads only after user consent
- EU-hosted data

**Implementation:**
- Cookie banner loads Plausible script on accept
- Listed in Datenschutz with full legal disclosure

### 2. **OpenStreetMap** 🗺️
**Status:** ✅ Consent-based loading

**Details:**
- Used for interactive district maps
- Component: `AbteilungsMap.tsx`
- Shows consent prompt if not yet granted
- Loads map tiles only after consent

**Implementation:**
- Map component checks `localStorage` for consent
- Listens for `consent-granted` event
- Shows inline consent button if no decision made
- Documented in Datenschutz

### 3. **Calendar Data** 📅
**Status:** ✅ No consent needed (build-time fetch, no client tracking)

**Details:**
- Fetched at build time from Outlook ICS
- Stored as static JSON file
- No external requests from browser
- Auto-updates every 12 hours via GitHub Actions

---

## 🍪 Cookie Consent System

### Cookie Banner Component
**Location:** `src/components/CookieBanner/`

**Features:**
- Black floating banner (nadineriez.de style)
- Lists all external services (Plausible, OpenStreetMap)
- Three actions: Accept, Learn More, Reject
- Stores decision in `localStorage` as `analytics_consent`

**Consent Flow:**
1. User visits site → Banner appears
2. User accepts → `loadExternalServices()` runs:
   - Plausible script injected
   - `consent-granted` event dispatched
   - Map and other components activate
3. User rejects → Banner disappears, no services load

### Integration Points
- `src/theme/Root.js` - Global banner injection
- `src/components/CookieBanner/index.js` - Main logic
- `src/components/CookieBanner/styles.css` - Styling
- `src/components/AbteilungsMap.tsx` - Map consent check

---

## 📄 Privacy Policy Updates

### Datenschutz.md Sections Added/Updated:

1. **Einwilligungsbanner (Cookie-Consent)**
   - Explains banner functionality
   - Lists services requiring consent
   - LocalStorage usage documented
   - Legal basis: Art. 6 Abs. 1 lit. f DSGVO

2. **Plausible Analytics**
   - Provider details (Plausible Insights OÜ, Estonia)
   - No cookies, no personal data
   - EU hosting, self-hosted instance
   - Consent requirement documented
   - Legal basis: Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG

3. **OpenStreetMap**
   - Provider details (OSMF, UK)
   - IP address transmission for tile loading
   - Consent-based loading only
   - Legal basis: Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG
   - Privacy policy link included

---

## 🧹 Cleanup Performed

### Removed:
- ✅ Old machmit styles from `custom.css` (now using `machmit.module.css`)
- ✅ `.DS_Store` files from src directory
- ✅ Unused cookie consent related CSS (consolidated)

### Consolidated:
- ✅ All machmit styles in dedicated module
- ✅ Cookie banner styles in component folder
- ✅ Calendar styles in component folder

### Kept (Still in use):
- `HomepageFeatures` - Used on homepage
- `AbteilungsMap` - Used in intro.mdx
- Profile components - Used in team pages

---

## 📦 Dependencies & External Services

### Analytics
- **Plausible Analytics**: Self-hosted, consent-required
- **No Google Analytics**: ✅ Removed
- **No tracking pixels**: ✅ None

### Maps
- **OpenStreetMap**: Consent-required, tiles from osmfoundation.org
- **Leaflet.js**: Map rendering library (local)
- **React-Leaflet**: React wrapper (local)

### Calendar
- **ical.js**: ICS parsing (local library)
- **Outlook ICS**: Build-time fetch only, no client requests

### Social Media
- **Instagram embed**: Links only, no tracking embeds
- **WhatsApp link**: Direct link, no SDK
- **Facebook/Twitter**: Links in Datenschutz, no embeds on site

---

## 🔒 GDPR Compliance Checklist

- ✅ Cookie banner before any tracking
- ✅ Explicit consent required for external services
- ✅ Opt-out option provided (reject button)
- ✅ All services documented in privacy policy
- ✅ Legal basis stated for each service
- ✅ User rights explained (access, deletion, revocation)
- ✅ Contact information provided
- ✅ LocalStorage consent storage explained
- ✅ No cookies without consent
- ✅ Privacy-friendly analytics (Plausible)

---

## 🚀 Testing Checklist

### To test consent system:

1. **Clear consent:**
   ```javascript
   localStorage.removeItem('analytics_consent');
   ```

2. **Check banner appears** on page load

3. **Test Accept:**
   - Plausible script should load
   - Map should become interactive
   - No banner on reload

4. **Test Reject:**
   - No Plausible script
   - Map shows consent prompt
   - No banner on reload

5. **Test "Learn More":**
   - Links to /docs/datenschutz
   - All services documented

---

## 📝 Files Modified/Created

### Created:
- `src/components/CookieBanner/index.js`
- `src/components/CookieBanner/styles.css`
- `src/components/CalendarEvents/index.js`
- `src/components/CalendarEvents/styles.css`
- `src/pages/machmit.module.css`
- `src/theme/Root.js`
- `scripts/fetch-calendar.js`
- `.github/workflows/scheduled-update.yml`

### Modified:
- `src/components/AbteilungsMap.tsx` - Added consent check
- `docs/datenschutz.md` - Complete privacy policy rewrite
- `docs/impressum.md` - Contact details formatted
- `src/pages/machmit.js` - Complete redesign
- `src/pages/aktuelles.js` - Calendar integration
- `src/css/custom.css` - Removed unused machmit styles
- `.gitignore` - Added calendar-data.json
- `package.json` - Added fetch-calendar scripts

---

## 🎯 Result

**All external services now require explicit user consent before loading.**

The site is fully GDPR/TTDSG compliant with:
- ✅ Privacy-friendly analytics (Plausible)
- ✅ Consent-based external service loading
- ✅ Complete documentation
- ✅ Clean, maintainable codebase
