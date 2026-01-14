import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'components'; // Using barrel file
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <div style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <p>{t('current_date', { date: new Date() })}</p>
        <p>{t('price', { val: 12345.67 })}</p>
      </div>
      <LanguageSwitcher />
    </div>
  );
}

export default App;
