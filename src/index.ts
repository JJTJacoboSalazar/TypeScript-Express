import express from 'express';
const app = express();
import diaryRouter from './routes/diaries';

app.use(express.json()); // for parsing application/json

const PORT = 3000;

app.get('/', (_req, res) => {
    console.log('Hello World!');
    
  res.send('Hello World!');
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});