import { DiaryEntry, Visibility, Weather } from "../types";

const diaryEntries: Array<DiaryEntry> = [
    {
        id: 1,
        date: "2021-01-01",
        weather: Weather.Sunny,
        visibility: Visibility.Great,
        comment: "I love the weather today",
    },
    {
        id: 2,
        date: "2021-01-02",
        weather: Weather.Rainy,
        visibility: Visibility.Poor,
        comment: "I stayed at home all day",
    },
    {
        id: 3,
        date: "2021-01-03",
        weather: Weather.Cloudy,
        visibility: Visibility.Ok,
        comment: "It's not suitable for going out",
    },
];

export default diaryEntries;