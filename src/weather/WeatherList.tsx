import { FC, ReactElement, useRef, useEffect, useState } from 'react';
import { CreateWeatherDto, Client, WeatherLookupDto } from '../api/api';
import React from 'react';
import { FormControl } from 'react-bootstrap';

const apiClient = new Client('https://localhost:7194');

async function createWeather(weather: CreateWeatherDto) {
    await apiClient.create('1.0', weather);
    console.log(`Weather forecast is created. City name: ${weather.city}`);
}

const WeatherList: FC<{}> = (): ReactElement => {
    let textInput = useRef(null);
    const [weatherList, setWeatherList] = useState<WeatherLookupDto[] | undefined>(undefined);

    async function getWeatherList() {
        const weatherListVm = await apiClient.getAll('1.0');
        setWeatherList(weatherListVm.weatherList);
    }

    useEffect(() => {
        getWeatherList();
    }, [])

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const weather: CreateWeatherDto = {
                city: event.currentTarget.value,
                date: new Date(),
                temperatureC: Math.round(Math.random() * 100),
                summary: 'some shit'
            };
            createWeather(weather);
            event.currentTarget.value = '';
            getWeatherList();
        }
    };

    return (
        <div>
            Weather forecast
            <div>
                <FormControl ref={textInput} onKeyDown={handleKeyPress} />
            </div>
            <div>
                {weatherList?.map((weather) => (
                    <div key={weather.city}>{weather.city}-{weather.date?.toString()}-{weather.temperatureC}</div>
                ))}
            </div>
        </div>
    );
};
export default WeatherList;