import { keys } from '@material-ui/core/styles/createBreakpoints';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import BabyPics from '../../BabyPics';
import './style.css';

const images = [
    {
        original: BabyPics.a,
        originalHeight: '600px',
        thumbnail: BabyPics.a,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: BabyPics.b,
        originalHeight: '600px',
        thumbnail: BabyPics.b,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: BabyPics.c,
        originalHeight: '600px',
        thumbnail: BabyPics.c,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: BabyPics.d,
        originalHeight: '600px',
        thumbnail: BabyPics.d,
        description: ''
    },
    {
        original: BabyPics.e,
        originalHeight: '600px',
        thumbnail: BabyPics.e,
        description: 'Bryson'
    },
    {
        original: BabyPics.f,
        originalHeight: '600px',
        thumbnail: BabyPics.f,
        description: 'Lucy Kate'
    },
    {
        original: BabyPics.g,
        originalHeight: '600px',
        thumbnail: BabyPics.g,
        description: 'Lucy Kate'
    },
    {
        original: BabyPics.h,
        originalHeight: '600px',
        thumbnail: BabyPics.h,
        description: 'Lucy Kate'
    },
    {
        original: BabyPics.i,
        originalHeight: '600px',
        thumbnail: BabyPics.i,
        description: 'Emma Kate Barnett'
    },
    {
        original: BabyPics.j,
        originalHeight: '600px',
        thumbnail: BabyPics.j,
        description: 'Holden Asher Rosencranz, DOB 8/17/2021'
    },
    {
        original: BabyPics.k,
        originalHeight: '600px',
        thumbnail: BabyPics.k,
        description: 'Holden Asher Rosencranz, DOB 8/17/2021'
    },
    {
        original: BabyPics.l,
        originalHeight: '600px',
        thumbnail: BabyPics.l,
        description: 'Holden Asher Rosencranz, DOB 8/17/2021'
    },
    {
        original: BabyPics.m,
        originalHeight: '600px',
        thumbnail: BabyPics.m,
        description: 'Emory Rena Murphy'
    },
    {
        original: BabyPics.n,
        originalHeight: '600px',
        thumbnail: BabyPics.n,
        description: 'Emory Rena Murphy'
    },
    {
        original: BabyPics.o,
        originalHeight: '600px',
        thumbnail: BabyPics.o,
        description: 'Avryn Edwards'
    },
    {
        original: BabyPics.p,
        originalHeight: '600px',
        thumbnail: BabyPics.p,
        description: 'Avryn Edwards'
    },
    {
        original: BabyPics.q,
        originalHeight: '600px',
        thumbnail: BabyPics.q,
        description: ''
    },
    {
        original: BabyPics.r,
        originalHeight: '600px',
        thumbnail: BabyPics.r,
        description: 'Samuel Juan'
    },
    {
        original: BabyPics.s,
        originalHeight: '600px',
        thumbnail: BabyPics.s,
        description: 'Samuel Juan'
    },
    {
        original: BabyPics.t,
        originalHeight: '600px',
        thumbnail: BabyPics.t,
        description: 'Samuel Juan'
    },
    {
        original: BabyPics.u,
        originalHeight: '600px',
        thumbnail: BabyPics.u,
        description: 'Anthony Erath'
    }
]

function Gal () {
    return (
        <div>
            <ImageGallery items={images}/> 
        </div>
    )
}

export default Gal;