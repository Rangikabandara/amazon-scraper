# Amazon Scraper

This project allows you to scrape Amazon search results for a given keyword and display the extracted product details on a webpage.

## Setup

### Backend (Node.js)

1. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Frontend (HTML, CSS, Vanilla JavaScript)

No additional setup is required for the frontend.

## Running the Project

1. Start the backend server:

    ```bash
    node backend/server.js
    ```

2. Open `frontend/index.html` in a web browser.

## Usage

1. Enter a keyword in the input field.
2. Click the "Scrape" button to initiate the scraping process.
3. The product details (title, rating, reviews, and image) for the first page of Amazon search results will be displayed on the webpage.

## Dependencies

- Node.js
- Express
- Axios
- JSDOM

## Folder Structure

- `backend`: Contains backend-related files.
  - `server.js`: Backend server file.
  - `package.json`: Backend dependencies file.
- `frontend`: Contains frontend-related files.
  - `index.html`: Frontend HTML file.
  - `styles.css`: CSS file for styling.
  - `script.js`: JavaScript file for frontend logic.

## Credits

This project was created by [Rangika Bandara].

