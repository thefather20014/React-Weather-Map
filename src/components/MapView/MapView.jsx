import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import imgLoading from '../../img/loading.gif'

const MapView = ({ search, data, loading, current }) => {

    return (
        <>
             <section style={{ width: '100vw' }}>
                {data.coord ?
                    <MapContainer center={[data.coord ? data.coord.lat : '', data.coord ? data.coord.lon : '']} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[data.coord ? data.coord.lat : '51.51', data.coord ? data.coord.lon : '-0.13']}>
                            <Popup>
                                <h2>Current Location: {search}</h2>
                                <p>Latitude: {data.coord.lat}</p>
                                <p>Longitude: {data.coord.lon}</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                    : 
                   <div>
                        <h2>Current Location</h2>
                    <MapContainer center={[ current.coord ? current.coord.lat: '', current.coord ? current.coord.lon : '']} zoom={1} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[ current.coord ? current.coord.lat: '', current.coord ? current.coord.lon : '']}>
                            <Popup>
                                <h2>You here</h2>
                                <p>Latitude: { current.coord ? current.coord.lat: '' }</p>
                                <p>Longitude: { current.coord ? current.coord.lon : '' }</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                   </div>
                    }
            </section>
        </>
    )
}

export default MapView
