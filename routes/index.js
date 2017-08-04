const express = require('express');
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {
  const index = path.join(__dirname, "../public/pages/index.html")
  res.set({
    'Content-Type' : 'text/html',
  });
  res.status(200).sendFile(index);
});

module.exports = router;
