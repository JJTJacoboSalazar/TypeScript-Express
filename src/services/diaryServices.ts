import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): Array<DiaryEntry> => {
  return diaries;
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveDiaryEntry[] => diaries

export const addEntry = () => {
  // TODO
};