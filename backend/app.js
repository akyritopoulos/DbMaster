const express = require('express');
const app = express();
const pool = require('./db/db.js');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ useres: ['userOne', 'userTwo', 'userThree'] });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
