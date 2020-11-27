import { React, useState, useEffect } from 'react';
import { MapView } from '../component';
import Style from './Form.module.css';
import logo from '../../logo.svg';
import { Weather, CurrentWeather } from '../../hooks/hooks';

const Form = () => {

    const [search, setSeach] = useState('');
    const [code, setCode] = useState('');
    const [coord, setCoord] = useState({
        lat: '',
        lon: ''
    });
    const { data, loading, err } = Weather(search, code);
    const { data: current, loading: currentLoading, currentErr } = CurrentWeather(coord.lat, coord.lon);
    console.log(current);
    //console.log(coord);

    const onSeach = e => {
        e.preventDefault();
        setSeach(e.target.value);
    };

    const onCode = e => {
        e.preventDefault();
        setCode(e.target.value);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            setCoord({ lat: position.coords.latitude, lon: position.coords.longitude })
        }, err => console.error(err))
    }, []);

    return (
        <div className={Style.container}>
            <form onSubmit={onSeach}>
                <img src={logo} className="App-logo" alt="logo" />
                <input type="text" value={search} onChange={onSeach} placeholder="Write a City" />
                <input type="text" value={code} onChange={onCode} placeholder="Write a Country Code" />
                <div className={Style.codes}>
                    <a href="https://www.iban.com/country-codes" target="_blank">Country Codes</a>
                </div>
            </form>
            <section className={Style.section_a} >
                <h4 style={{ textTransform: 'capitalize' }}>Description: {data.weather ? data.weather[0].description : current.weather ? current.weather[0].description : 'Not Available'}</h4>
                <p>Temperature: {data.main ? Math.round(data.main.temp - 273.15) : current.main ? Math.round(current.main.temp - 273.15) : 'Not Available'}<span style={{ marginLeft: '2px' }}>°C</span></p>
                <p>Latitude: {data.coord ? Math.round(data.coord.lat) : current.coord ? Math.round(current.coord.lat) : 'Not Available'}</p>
                <p>Longitude: {data.coord ? Math.round(data.coord.lon) : current.coord ? Math.round(current.coord.lon) : 'Not Available'}</p>
                <p>Humidity: {data.main ? Math.round(data.main.humidity) : current.main ? Math.round(current.main.humidity) : 'Not Available'}<span style={{ marginLeft: '0px' }}>%</span></p>
                <p>Pressure: {data.main ? Math.round(data.main.pressure) : current.main ? Math.round(current.main.pressure) : 'Not Available'}<span style={{ marginLeft: '3px' }}>atm</span></p>
            </section>

            <section className={Style.map}>
                <MapView search={search} data={data} loading={loading} current={current} />
            </section>
        </div>
    )
}

export default Form
