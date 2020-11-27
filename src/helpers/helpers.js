import axios from 'axios';

export const WeatherApi = async (search, code) => 
{
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search},${code}&appid=6e347a2495b5e7d58c9f0a2b9c31eff5`);
    
    return data;
};

export const GetCurrentLocation = async (lat, lon) => 
{
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6e347a2495b5e7d58c9f0a2b9c31eff5`);
    
    return data;
};