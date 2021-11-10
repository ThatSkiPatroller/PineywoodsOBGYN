import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Card } from '@material-ui/core';
import './style.css';

function GoogMap () {
    
    const mapStyles = {
        height: '25vh',
        width: '25vh'
    }

    const defaultCenter = {
        lat: 31.3296, lng: -94.7519
    }

    const label = 'Pineywoods OBGYN';

    const ops = {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        mapId: "33ad748ad4509de4"
    }

    return (
        <Card className='mike mx-auto'>
            <div className='row'>
                <div className='col-md-6 fred'>
                    <br></br>
                    <h1>Hours:</h1>
                    <p>Monday - Thusday: 8 AM - 5 PM </p>
                    <p>Friday: 8 AM - 12 PM </p>
                    <h1>Phone Number: </h1> <p>936-699-7575</p>
                    <h1>Address:</h1> <p>402 Gaslight Blvd, Lufkin, Tx</p>
                </div>
                <div className='col-md-6 steve'>
                    <LoadScript
                    googleMapsApiKey='AIzaSyC9r_0ONzMoOyUYewrxMScWrz2xOgP1ZJ0'>
                        <GoogleMap  
                            mapContainerStyle={mapStyles}
                            zoom={14}
                            center={defaultCenter}
                            options={ops}
                        >
                            <Marker position={defaultCenter} label={label}/>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </Card>
    )
}

export default GoogMap