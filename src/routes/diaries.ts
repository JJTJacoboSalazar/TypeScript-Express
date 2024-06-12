import express from 'express';
import * as diaryService from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.post('/', (_req, res) => {
    res.send('Creating a new diary!');
    });


export default router;