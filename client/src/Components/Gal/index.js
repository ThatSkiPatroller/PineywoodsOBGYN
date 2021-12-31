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
        description: 'Levi'
    },
    // {
    //     original: BabyPics.z6,
    //     originalHeight: '600px',
    //     thumbnail: BabyPics.z6,
    //     description: 'Delivered October 11, 2021'
    // },
    // {
    //     original: BabyPics.z7,
    //     originalHeight: '600px',
    //     thumbnail: BabyPics.z7,
    //     description: 'Delivered October 11, 2021'
    // },
    // {
    //     original: BabyPics.z8,
    //     originalHeight: '600px',
    //     thumbnail: BabyPics.z8,
    //     description: 'Delivered October 11, 2021'
    // },
    {
        original: BabyPics.b,
        originalHeight: '600px',
        thumbnail: BabyPics.b,
        description: 'Levi'
    },
    {
        original: BabyPics.c,
        originalHeight: '600px',
        thumbnail: BabyPics.c,
        description: 'Levi'
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
        description: 'Lucy'
    },
    {
        original: BabyPics.g,
        originalHeight: '600px',
        thumbnail: BabyPics.g,
        description: 'Lucy'
    },
    {
        original: BabyPics.h,
        originalHeight: '600px',
        thumbnail: BabyPics.h,
        description: 'Lucy'
    },
    {
        original: BabyPics.i,
        originalHeight: '600px',
        thumbnail: BabyPics.i,
        description: 'Emma'
    },
    {
        original: BabyPics.j,
        originalHeight: '600px',
        thumbnail: BabyPics.j,
        description: 'Holden'
    },
    {
        original: BabyPics.k,
        originalHeight: '600px',
        thumbnail: BabyPics.k,
        description: 'Holden'
    },
    {
        original: BabyPics.l,
        originalHeight: '600px',
        thumbnail: BabyPics.l,
        description: 'Holden'
    },
    {
        original: BabyPics.m,
        originalHeight: '600px',
        thumbnail: BabyPics.m,
        description: 'Emory'
    },
    {
        original: BabyPics.n,
        originalHeight: '600px',
        thumbnail: BabyPics.n,
        description: 'Emory'
    },
    {
        original: BabyPics.o,
        originalHeight: '600px',
        thumbnail: BabyPics.o,
        description: 'Avryn'
    },
    {
        original: BabyPics.p,
        originalHeight: '600px',
        thumbnail: BabyPics.p,
        description: 'Avryn'
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
        description: 'Samuel'
    },
    {
        original: BabyPics.s,
        originalHeight: '600px',
        thumbnail: BabyPics.s,
        description: 'Samuel'
    },
    {
        original: BabyPics.t,
        originalHeight: '600px',
        thumbnail: BabyPics.t,
        description: 'Samuel'
    },
    {
        original: BabyPics.u,
        originalHeight: '600px',
        thumbnail: BabyPics.u,
        description: 'Anthony'
    },
    {
        original: BabyPics.v,
        originalHeight: '600px',
        thumbnail: BabyPics.v,
        description: ''
    },
    {
        original: BabyPics.w,
        originalHeight: '600px',
        thumbnail: BabyPics.w,
        description: ''
    },
    {
        original: BabyPics.x,
        originalHeight: '600px',
        thumbnail: BabyPics.x,
        description: ''
    },
    {
        original: BabyPics.y,
        originalHeight: '600px',
        thumbnail: BabyPics.y,
        description: ''
    },
    {
        original: BabyPics.z,
        originalHeight: '600px',
        thumbnail: BabyPics.z,
        description: ''
    },
    {
        original: BabyPics.z3,
        originalHeight: '600px',
        thumbnail: BabyPics.z3,
        description: ''
    },
    
    {
        original: BabyPics.z5,
        originalHeight: '600px',
        thumbnail: BabyPics.z5,
        description: ''
    },
    {
        original: BabyPics.z4,
        originalHeight: '600px',
        thumbnail: BabyPics.z4,
        description: 'Office Christmas Party'
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