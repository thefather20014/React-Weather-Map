import { WeatherApi, GetCurrentLocation } from '../helpers/helpers';
import { useState, useEffect } from 'react';

export const Weather = (search, code) => 
{
    const [ weather, setWeather ] = useState({
        data: [],
        loading: false,
        err: ''
    })

    useEffect( () => {
        WeatherApi( search, code ).then( data => setWeather( { data, loading: true, err: '' } ) )
        .catch( err => setWeather( { data: [], loading: false, err } ) )
    }, [ search, code ] );

    return weather;
};

export const CurrentWeather = (lat, lon) => 
{
    const [ current, setCurrent ] = useState({
        data: [],
        loading: false,
        err: ''
    })

    useEffect( () => {
        GetCurrentLocation( lat, lon ).then( data => setCurrent( { data, loading: true, err: '' } ) )
        .catch( err => setCurrent( { data: [], loading: false, err } ) )
    }, [ lat, lon ] );

    return current;
};
