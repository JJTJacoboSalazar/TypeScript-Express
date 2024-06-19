import {Weather, newDiaryEntry } from "./types";

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isWeather = (string: string): boolean => {
    return ['sunny', 'rainy', 'cloudy', 'stormy', 'snowy', 'windy', 'foggy', 'hailing', 'thunderstorm', 'tornado'].includes(string)
}

const parseComment = (comment: any): string => {
    if(!isString(comment)) {
        throw new Error('Incorrect or missing comment: ' + comment);
    }
    return comment;
}

const parseDate = (date: any): string => {
    if(!isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
}

const parseWeather = (weather: any): Weather => {
    if(!isString(weather) || !isWeather(weather)){
        throw new Error('Incorrect or missing weather: ' + weather);
    }
    return weather;
}

const toNewDiaryEntry = (object: any): typeof newDiaryEntry => {
    const newEntry: typeof newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
    }
    return newEntry;

}

export default toNewDiaryEntry;