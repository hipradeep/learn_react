import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{ margin: '20px' }}>
            <h3>Select Language</h3>
            <button onClick={() => changeLanguage('en')} style={{ margin: '5px', padding: '10px' }}>
                English
            </button>
            <button onClick={() => changeLanguage('ja')} style={{ margin: '5px', padding: '10px' }}>
                日本語 (Japanese)
            </button>
            <button onClick={() => changeLanguage('hi')} style={{ margin: '5px', padding: '10px' }}>
                हिंदी (Hindi)
            </button>
        </div>
    );
}
