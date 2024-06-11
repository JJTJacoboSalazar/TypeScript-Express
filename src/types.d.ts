export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'snowy' | 'windy' | 'foggy' | 'hailing' | 'thunderstorm' | 'tornado';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

// Add a new interface SpecialDiaryEntry that extends DiaryEntry and has a new property flightNumber.
// interface SpecialDiaryEntry extends DiaryEntry {
//     flighNumber: number;
// }


// export type NonSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>;

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;