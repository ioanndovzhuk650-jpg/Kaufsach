const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// База даних оголошень у пам'яті
let listings = [
  { id: 1, title: 'iPhone 15 Pro Max', price: 1100, category: 'electronics', city: 'Berlin' },
  { id: 2, title: 'BMW 320d 2020', price: 22000, category: 'auto', city: 'Munich' },
  { id: 3, title: '2-Room Apartment', price: 1200, category: 'realestate', city: 'Hamburg' }
];

// Отримання списку оголошень
app.get('/api/listings', (req, res) => {
  const { search, category } = req.query;
  let result = listings;

  if (category && category !== 'all') {
    result = result.filter(item => item.category === category);
  }

  if (search) {
    result = result.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.json(result);
});

// Додавання нового оголошення
app.post('/api/listings', (req, res) => {
  const { title, price, category, city } = req.body;
  if (!title || !price) {
    return res.status(400).json({ error: 'Title and price are required' });
  }

  const newListing = {
    id: Date.now(),
    title,
    price: Number(price),
    category: category || 'other',
    city: city || 'Global'
  };

  listings.unshift(newListing);
  res.status(201).json(newListing);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
