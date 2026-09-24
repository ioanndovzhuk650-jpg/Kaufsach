import React, { useState, useEffect } from 'react';

export default function App() {
  const [lang, setLang] = useState('de');
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  // Локалізація текстових елементів
  const t = {
    de: {
      title: 'Kaufsach',
      subtitle: 'Kaufen und Verkaufen leicht gemacht',
      searchPlaceholder: 'Suchen...',
      allCat: 'Alle Kategorien',
      electronics: 'Elektronik',
      auto: 'Auto',
      realestate: 'Immobilien',
      addListing: '+ Anzeige aufgeben',
      price: '€'
    },
    en: {
      title: 'Kaufsach',
      subtitle: 'Buy and sell easily',
      searchPlaceholder: 'Search...',
      allCat: 'All categories',
      electronics: 'Electronics',
      auto: 'Auto',
      realestate: 'Real Estate',
      addListing: '+ Post Ad',
      price: '€'
    },
    ru: {
      title: 'Kaufsach',
      subtitle: 'Покупайте и продавайте легко',
      searchPlaceholder: 'Поиск...',
      allCat: 'Все категории',
      electronics: 'Электроника',
      auto: 'Авто',
      realestate: 'Недвижимость',
      addListing: '+ Подать объявление',
      price: '€'
    },
    ar: {
      title: 'Kaufsach',
      subtitle: 'بيع واشترِ ببساطة',
      searchPlaceholder: 'بحث...',
      allCat: 'جميع الفئات',
      electronics: 'إلكترونيات',
      auto: 'سيارات',
      realestate: 'عقارات',
      addListing: '+ إعلان جديد',
      price: '€'
    }
  }[lang];

  // Перевірка RTL (для арабської мови)
  const isRTL = lang === 'ar';

  return (
    <div style={{ direction: isRTL ? 'rtl' : 'ltr', fontFamily: 'sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Шапка сайту */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div>
          <h1 style={{ margin: 0, color: '#0070f3' }}>{t.title}</h1>
          <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{t.subtitle}</p>
        </div>

        {/* Вибір мови */}
        <div>
          {['de', 'en', 'ru', 'ar'].map(l => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                margin: '0 2px',
                padding: '5px 10px',
                fontWeight: lang === l ? 'bold' : 'normal',
                backgroundColor: lang === l ? '#0070f3' : '#eee',
                color: lang === l ? '#fff' : '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Пошук та фільтри */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="all">{t.allCat}</option>
          <option value="electronics">{t.electronics}</option>
          <option value="auto">{t.auto}</option>
          <option value="realestate">{t.realestate}</option>
        </select>
        <button style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}>
          {t.addListing}
        </button>
      </div>

      {/* Список оголошень */}
      <div>
        <h3>{t.allCat}</h3>
        <div style={{ display: 'grid', gap: '15px' }}>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0' }}>iPhone 15 Pro Max</h4>
              <span style={{ fontSize: '12px', color: '#888' }}>Berlin • {t.electronics}</span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0070f3' }}>
              1100 {t.price}
            </div>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0' }}>BMW 320d 2020</h4>
              <span style={{ fontSize: '12px', color: '#888' }}>Munich • {t.auto}</span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0070f3' }}>
              22000 {t.price}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
