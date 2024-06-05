import express from 'express';
const app = express();

app.use(express.json()); // for parsing application/json

const PORT = 3000;

app.get('/', (req, res) => {
    console.log('Hello World!');
    
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});