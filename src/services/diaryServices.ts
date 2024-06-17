import { DiaryEntry, NonSensitiveDiaryEntry, Visibility, Weather } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): Array<DiaryEntry> => {
  return diaries;
}

export const findById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  if(entry){
    const {comment, ...restOfDiary} = entry;
    return restOfDiary;
  }
  return entry;
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }));
}

export const addEntry = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    comment
  };
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};
