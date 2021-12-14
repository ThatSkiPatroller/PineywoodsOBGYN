import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Card } from '@material-ui/core';
import FB from '../../Images/facebookThumbLike.png'
import Config from '../../config';
import './style.css';


function GoogMap (props) {

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

    const myKey=Config.MY_KEY;

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
                    googleMapsApiKey={myKey}>
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
            <a target='_blank' href='https://www.facebook.com/search/top?q=pineywoods%20obstetrics%20and%20gynecology%2F%20dr%20cheryl%20suiter%20and...'>
                <img src={FB} className='FbContainer' />
            </a>
        </Card>
    )
}

export default GoogMap