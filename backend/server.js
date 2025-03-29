const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const app = express();
const router = jsonServer.router(path.join(__dirname, 'notesDb.json'));
const middlewares = jsonServer.defaults();

// Serve frontend from the dist folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Mount JSON Server under /api
app.use('/api', middlewares, router);

// Fallback to index.html (for Vue router history mode)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});