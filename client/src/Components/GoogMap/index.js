import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
        googleMapsApiKey='AIzaSyBnAsEf6nQxgoZchu_-fhVa3qleLyxjhuo'>
            <GoogleMap  
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
                />
        </LoadScript>
    )
}

export default GoogMap