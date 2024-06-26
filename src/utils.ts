import {Weather, newDiaryEntry, Visibility } from "./types";

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isWeather = (param: any): boolean => {
    return Object.values(Weather).includes(param);
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param);
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

const parseVisibility = (visibility: any): Visibility => {
    if(!isString(visibility) || !isVisibility(visibility)){
        throw new Error('Incorrect or missing visibility: ' + visibility);
    }
    return visibility;
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    }
    return newEntry;
}

export default toNewDiaryEntry;