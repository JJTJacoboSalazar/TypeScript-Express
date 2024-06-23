// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'snowy' | 'windy' | 'foggy' | 'hailing' | 'thunderstorm' | 'tornado';
// export type Visibility = 'great' | 'good' | 'ok' | 'poor';


export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Snowy = 'snowy',
    Windy = 'windy',
    Foggy = 'foggy',
    Hailing = 'hailing',
    Thunderstorm = 'thunderstorm',
    Tornado = 'tornado'
}

export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}

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
    
export type newDiaryEntry = Omit<DiaryEntry, 'id'>;
export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;