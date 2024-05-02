document.addEventListener('DOMContentLoaded', () => {
    const scrapeBtn = document.getElementById('scrapeBtn');
    const keywordInput = document.getElementById('keyword');
    const resultsDiv = document.getElementById('results');
  
    scrapeBtn.addEventListener('click', async () => {
      const keyword = keywordInput.value.trim();
      if (!keyword) return;
  
      try {
        const response = await fetch(`/api/scrape?keyword=${encodeURIComponent(keyword)}`);
        const data = await response.json();
  
        displayResults(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = 'Error fetching data';
      }
    });
  
    function displayResults(products) {
      resultsDiv.innerHTML = '';
  
      if (products.length === 0) {
        resultsDiv.innerHTML = 'No products found';
        return;
      }
  
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
  
        const img = document.createElement('img');
        img.src = product.image;
        const title = document.createElement('h3');
        title.textContent = product.title;
        const rating = document.createElement('p');
        rating.textContent = `Rating: ${product.rating}`;
        const reviews = document.createElement('p');
        reviews.textContent = `Reviews: ${product.reviews}`;
  
        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(rating);
        productDiv.appendChild(reviews);
  
        resultsDiv.appendChild(productDiv);
      });
    }
  });