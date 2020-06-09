const router = require('express').Router();
const path = require('path');

// add our routes

// HTML route for displaying the homepage
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'html', 'index.html');
  res.sendFile(filePath);
});

module.exports = router;
