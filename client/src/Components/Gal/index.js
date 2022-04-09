import React from 'react';
import ImageGallery from 'react-image-gallery';
import './style.css';

const images = [
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/a.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/a.webp',
        description: 'Levi'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/b.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/b.webp',
        description: 'Levi'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/c.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/c.webp',
        description: 'Levi'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/d.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/d.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/e.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/e.webp',
        description: 'Bryson'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/f.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/f.webp',
        description: 'Lucy'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/g.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/g.webp',
        description: 'Lucy'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/h.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/h.webp',
        description: 'Lucy'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/i.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/i.webp',
        description: 'Emma'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z6.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z6.webp',
        description: 'Delivered October 11, 2021'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z7.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z7.webp',
        description: 'Delivered October 11, 2021'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z8.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z8.webp',
        description: 'Delivered October 11, 2021'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/j.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/j.webp',
        description: 'Holden'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/k.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/k.webp',
        description: 'Holden'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/l.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/l.webp',
        description: 'Holden'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/m.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/m.webp',
        description: 'Emory'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/n.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/n.webp',
        description: 'Emory'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/o.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/o.webp',
        description: 'Avryn'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/p.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/p.webp',
        description: 'Avryn'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-8175.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-8175.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-2510.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-2510.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6515.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6515.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6516.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6516.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/q.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/q.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/r.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/r.webp',
        description: 'Samuel'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/s.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/s.webp',
        description: 'Samuel'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/t.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/t.webp',
        description: 'Samuel'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/u.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/u.webp',
        description: 'Anthony'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/v.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/v.webp',
        description: ''
    },
    {
        original:'https://d1wedsacc4lfnu.cloudfront.net/newborn.webp',
        originalHeight: '600px',
        thumbnail:'https://d1wedsacc4lfnu.cloudfront.net/newborn.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/w.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/w.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/x.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/x.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/y.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/y.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z3.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z3.webp',
        description: ''
    },
    
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z5.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z5.webp',
        description: ''
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z4.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z4.webp',
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