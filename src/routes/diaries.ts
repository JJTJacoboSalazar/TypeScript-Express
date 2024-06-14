import express from 'express';
import {getEntriesWithoutSensitiveInfo, findById} from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = findById(Number(req.params.id));
  if(diary){
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
})

router.post('/', (_req, res) => {
    res.send('Creating a new diary!');
    });


export default router;