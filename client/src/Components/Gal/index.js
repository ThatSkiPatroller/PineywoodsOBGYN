import { keys } from '@material-ui/core/styles/createBreakpoints';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import BabyPics from '../../BabyPics';
// import a from '../../BabyPics/a.jpeg';
// import b from '../../BabyPics/b.jpeg';
// import c from '../../BabyPics/c.jpeg'; 
// import d from '../../BabyPics/d.jpg';
// import e from '../../BabyPics/e.jpg';
// import f from '../../BabyPics/f.jpeg';
// import g from '../../BabyPics/g.jpeg';
// import h from '../../BabyPics/h.jpeg';
// import i from '../../BabyPics/i.jpg';
// import j from '../../BabyPics/'
import './style.css';

const images = [
    {
        original: BabyPics.a,
        thumbnail: BabyPics.a,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: BabyPics.b,
        thumbnail: BabyPics.b,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: BabyPics.c,
        thumbnail: BabyPics.c,
        description: 'Levi Caycoya DOB: 8/3/21'
    },
    {
        original: BabyPics.d,
        thumbnail: BabyPics.d,
        description: ''
    },
    {
        original: BabyPics.e,
        thumbnail: BabyPics.e,
        description: 'Bryson'
    },
    {
        original: BabyPics.f,
        thumbnail: BabyPics.f,
        description: 'Lucy Kate'
    },
    {
        original: BabyPics.g,
        thumbnail: BabyPics.g,
        description: 'Lucy Kate'
    },
    {
        original: BabyPics.h,
        thumbnail: BabyPics.h,
        description: 'Lucy Kate'
    },
    {
        original: BabyPics.i,
        thumbnail: BabyPics.i,
        description: 'Emma Kate Barnett'
    },
    {
        original: BabyPics.j,
        thumbnail: BabyPics.j,
        description: 'Holden Asher Rosencranz, DOB 8/17/2021'
    },
    {
        original: BabyPics.k,
        thumbnail: BabyPics.k,
        description: 'Holden Asher Rosencranz, DOB 8/17/2021'
    },
    {
        original: BabyPics.l,
        thumbnail: BabyPics.l,
        description: 'Holden Asher Rosencranz, DOB 8/17/2021'
    },
    {
        original: BabyPics.m,
        thumbnail: BabyPics.m,
        description: 'Emory Rena Murphy'
    },
    {
        original: BabyPics.n,
        thumbnail: BabyPics.n,
        description: 'Emory Rena Murphy'
    },
    {
        original: BabyPics.o,
        thumbnail: BabyPics.o,
        description: 'Avryn Edwards'
    },
    {
        original: BabyPics.p,
        thumbnail: BabyPics.p,
        description: 'Avryn Edwards'
    },
    {
        original: BabyPics.q,
        thumbnail: BabyPics.q,
        description: ''
    },
    {
        original: BabyPics.r,
        thumbnail: BabyPics.r,
        description: 'Samuel Juan'
    },
    {
        original: BabyPics.s,
        thumbnail: BabyPics.s,
        description: 'Samuel Juan'
    },
    {
        original: BabyPics.t,
        thumbnail: BabyPics.t,
        description: 'Samuel Juan'
    },
    {
        original: BabyPics.u,
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