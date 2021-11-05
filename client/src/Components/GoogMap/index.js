import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function GoogMap () {
    
    const mapStyles = {
        height: '100vh',
        width: '100%'
    }

    const defaultCenter = {
        lat: 31.3296, lng: -94.7519
    }

    return (
        <LoadScript
        googleMapsApiKey='AIzaSyC9r_0ONzMoOyUYewrxMScWrz2xOgP1ZJ0'>
            <GoogleMap  
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                />
                <Marker position={{lat: defaultCenter.lat, lng: defaultCenter.lng}} />
        </LoadScript>
    )
}

export default GoogMap