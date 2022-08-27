// Import express package
const express = require('express');
const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));



app.get('/api', (req, res) => { 
    res.json({ test: 'api' })
});

app.get('/test', (req, res) => { 
    res.json({ test: 'test' })
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);