const express = require('express');

const app = express();
const PORT = 5000;

app.use('/test', (req, res) => {
  folks = [
    { name: 'Pete' },
    { name: 'Megan' }
  ];
  
  res.json(folks);
})

app.listen(PORT, () => console.log(`server listening @ http://localhost:${PORT}`));