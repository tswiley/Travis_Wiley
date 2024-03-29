const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files (like your HTML) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
