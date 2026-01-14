npx create-react-app <app_name>
cd app_name
npm start
------------------------------
npm install react-icons --save
npm i bootstrap

//react router
npm i react-router-dom
or
npm install react-router-dom@6


npm i react-hook-form
npm i axios
npm install axios
npm install bootstrap
npm install flux@4.0.4 --legacy-peer-deps


//after install, bootstrap, import this in src/index.js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

npm install -g json-server
//to run jsone server -> json-server --watch db.json --port 3332

//json-server --watch db.json --port 3332 --routes routes.json

npm install @material-ui/core
npm install @material-ui/icons
//if problem->  npm config set legacy-peer-deps true


------------------------------
npm install --save-dev check-prop-types

import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
------------------------------

rcc - reactClassComponent
rfc - reactFunctionalComponent
clg - console.log()


----------
npm i cors

------------------------------
# Internationalization (i18n) & Localization (l10n) Guide

## 1. Install Dependencies
```bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend --legacy-peer-deps
```

## 2. Configuration (src/i18n.js)
Initialize i18n with **interpolation** for localization:
```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import ja from './locales/ja/translation.json';
import hi from './locales/hi/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
      hi: { translation: hi },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (format === 'number') return new Intl.NumberFormat(lng).format(value);
        if (format === 'date') return new Intl.DateTimeFormat(lng).format(value);
        if (format === 'currency') return new Intl.NumberFormat(lng, { style: 'currency', currency: 'USD' }).format(value);
        return value;
      }
    },
  });

export default i18n;
```

## 3. Translation Files (l10n keys)
Use placeholders with formatters (e.g., `{{date, date}}`).

**src/locales/en/translation.json**:
```json
{
  "welcome": "Welcome to React",
  "current_date": "Date: {{date, date}}",
  "price": "Price: {{val, currency}}"
}
```

## 4. Usage in Components
Pass actual objects (Date, Number) to `t()`:
```javascript
<p>{t('current_date', { date: new Date() })}</p>
<p>{t('price', { val: 12345.67 })}</p>
```
