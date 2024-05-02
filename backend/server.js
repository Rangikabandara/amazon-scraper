const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint for scraping Amazon search results
app.get('/api/scrape', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

    // Fetch HTML content
    const response = await axios.get(searchUrl);
    const htmlContent = response.data;

    // Parse HTML content
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    // Extract product details
    const products = [];
    document.querySelectorAll('.s-result-item').forEach(item => {
      const title = item.querySelector('.a-text-normal')?.textContent || '';
      const rating = item.querySelector('.a-icon-star-small .a-icon-alt')?.textContent || '';
      const reviews = item.querySelector('.a-size-base')?.textContent || '';
      const image = item.querySelector('.s-image')?.getAttribute('src') || '';

      products.push({ title, rating, reviews, image });
    });

    res.json(products);
  } catch (error) {
    console.error('Error scraping:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});