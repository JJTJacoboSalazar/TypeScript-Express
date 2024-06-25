import express from 'express';
import {getEntriesWithoutSensitiveInfo, findById} from '../services/diaryServices';
import toNewDiaryEntry from '../utils';
import * as diaryServices from '../services/diaryServices';

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

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = {
      id: 0,
      ...toNewDiaryEntry(req.body)
    };

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

    res.json(addedDiaryEntry);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
})

export default router;