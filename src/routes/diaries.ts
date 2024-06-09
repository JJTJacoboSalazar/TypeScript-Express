import express from 'express';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Fetching all diaries!');
});

router.post('/', (_req, res) => {
    res.send('Creating a new diary!');
    });


export default router;