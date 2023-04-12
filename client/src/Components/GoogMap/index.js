import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Card } from '@material-ui/core';
import FB from '../../Images/facebookThumbLike.png'
import './style.css';


function GoogMap (props) {

    const mapStyles = {
        height: '300px',
        width: '300px'
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
        <Card className='infoCard mx-auto'>
            <div className='row'>
                <div className='col-md-6 hours'>
                    <br></br>
                    <h1>Hours:</h1>
                    <p>Monday - Thursday: 8:30 AM - 5 PM </p>
                    <p>Friday: 8:30 AM - 12 PM </p>
                    <h1>Phone Number: </h1> <p>936-699-7575</p>
                    <h1>Address:</h1> <p>402 Gaslight Blvd, Lufkin, Tx</p>
                </div>
                <div className='col-md-6 mapsFb'>
                    <LoadScript
                    googleMapsApiKey={process.env.REACT_APP_ENV_API_KEY}>
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
            <a target='_blank' href='https://www.facebook.com/Pineywoods-Obstetrics-And-Gynecology-Dr-Cheryl-Suiter-and-Jana-Brazil-WHNP-197455900300411'>
                <img src={FB} className='FbContainer' alt='Facebook thumbs up icon'/>
            </a>
            <p className='connect'>Connect with us on Facebook!</p>
        </Card>
    )
}

export default GoogMap