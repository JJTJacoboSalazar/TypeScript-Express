import { DiaryEntry, NonSensitiveDiaryEntry} from '../types';
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

export const addDiary = (newDiaryEntry: DiaryEntry): DiaryEntry => {
  // Calcula el nuevo ID sin considerar un posible ID en newDiaryEntry
  const newId = Math.max(0, ...diaries.map(d => d.id)) + 1; // Asegura que el ID siempre sea positivo

  // Crea el nuevo diaryEntry sin sobrescribir el ID calculado
  const diaryEntry = {
    ...newDiaryEntry,
    id: newId, // Establece el ID después para asegurar que se use el nuevo ID
  };

  diaries.push(diaryEntry);
  return diaryEntry;
}
