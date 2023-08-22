import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import Logo from '../../Images/Logo.png';
import './style.css';

const images = [
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-1.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-1.webp',
        description: '',
        orignalAlt: 'Dr. Suiter holding a baby up that she just delivered',
        thumbnailAlt: 'Dr. Suiter holding a baby up that she just delivered',
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-2.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-2.webp',
        description: '',
        orignalAlt: 'Newborn laying in small bed with sister hovering over her',
        thumbnailAlt: 'Newborn laying in small bed with sister hovering over her'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-3.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-3.webp',
        description: '',
        orignalAlt: 'Newborn on white background stretching feet',
        thumbnailAlt: 'Newborn on white background stretching feet'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-4.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/aug-22-pic-4.webp',
        description: '',
        orignalAlt: 'Sister with her newborn baby brother',
        thumbnailAlt: 'Sister with her newborn baby brother'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG_8051_edited.jpg',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG_8051_edited.jpg',
        description: '',
        orignalAlt: 'New dad holding baby for the first time in delivery room',
        thumbnailAlt: 'New dad holding baby for the first time in delivery room'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/a.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/a.webp',
        description: 'Levi',
        orignalAlt: 'Baby wrapped up with a baby yoda hat on',
        thumbnailAlt: 'Baby wrapped up with a baby yoda hat on'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/b.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/b.webp',
        description: 'Levi',
        orignalAlt: 'Baby sleeping wrapped up in blanket',
        thumbnailAlt: 'Baby sleeping wrapped up in blanket'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/c.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/c.webp',
        description: 'Levi',
        orignalAlt: 'Brother laying next to his new sibling',
        thumbnailAlt: 'Brother laying next to his sibling'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/d.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/d.webp',
        description: '',
        orignalAlt: 'Mom holdering her newborn baby in delivery room',
        thumbnailAlt: 'Mom holdering her newborn baby in delivery room'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/e.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/e.webp',
        description: 'Bryson',
        orignalAlt: 'Dr. Suiter holding a baby that she delivered',
        thumbnailAlt: 'Dr. Suiter holding a baby that she delivered'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/f.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/f.webp',
        description: 'Lucy',
        orignalAlt: 'Sleeping baby wrapped in a pink blanket with a bowtie headband',
        thumbnailAlt: 'Sleeping baby wrapped in a pink blanket with a bowtie headband'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/g.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/g.webp',
        description: 'Lucy',
        orignalAlt: 'Baby sleeping in a bucket full of blankets with her name on a sign',
        thumbnailAlt: 'Baby sleeping in a bucket full of blankets with her name on a sign'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/h.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/h.webp',
        description: 'Lucy',
        orignalAlt: 'Smiling baby laying in a small bed with pink covers',
        thumbnailAlt: 'Smiling baby laying in a small bed with pink covers'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/i.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/i.webp',
        description: 'Emma',
        orignalAlt: 'Mom and dad holding baby with flower headband wrapped in blanket',
        thumbnailAlt: 'Mom and dad holding baby with flower headband wrapped in blanket'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z6.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z6.webp',
        description: 'Delivered October 11, 2021',
        orignalAlt: 'Two newborn babies wrapped in white laying in a basket',
        thumbnailAlt: 'Two newborn babies wrapped in white laying in a basket'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z7.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z7.webp',
        description: 'Delivered October 11, 2021',
        orignalAlt: 'Mom dad and sister holding newborn babies',
        thumbnailAlt: 'Mom dad and sister holding newborn babies'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z8.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z8.webp',
        description: 'Delivered October 11, 2021',
        orignalAlt: 'Sister laying with sleeping newborn siblings',
        thumbnailAlt: 'Sister laying with sleeping newborn siblings'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/j.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/j.webp',
        description: 'Holden',
        orignalAlt: 'Sleeping newborn wrapped up in fuzzy blanket',
        thumbnailAlt: 'Sleeping newborn wrapped up in fuzzy blanket'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/k.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/k.webp',
        description: 'Holden',
        orignalAlt: 'Sleeping baby on a small bed in fuzzy white pajamas',
        thumbnailAlt: 'Sleeping baby on a small bed in fuzzy white pajamas'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/l.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/l.webp',
        description: 'Holden',
        orignalAlt: 'Brothers with Big Brother shirts laying next to newborn sibling',
        thumbnailAlt: 'Brothers with Big Brother shirts laying next to newborn sibilng'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/m.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/m.webp',
        description: 'Emory',
        orignalAlt: 'Baby sleeping on a chair with flowers wrapped up in a blanket',
        thumbnailAlt: 'Baby sleeping on a chair with flowers wrapped up in a blanket'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/n.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/n.webp',
        description: 'Emory',
        orignalAlt: 'Baby sleeping wrapped up in a blanket with a rose headband',
        thumbnailAlt: 'Baby sleeping wrapped up in a blanket with a rose headband'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/o.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/o.webp',
        description: 'Avryn',
        orignalAlt: 'Baby with pink headband smiling laying on some pillows',
        thumbnailAlt: 'Baby with pink headband smiling laying on some pillows'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/p.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/p.webp',
        description: 'Avryn',
        orignalAlt: 'Mom holding newborn baby with matching shirts on',
        thumbnailAlt: 'Mom holding newborn baby with matching shirts on'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-8175.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-8175.webp',
        description: '',
        orignalAlt: 'Pregnant woman in a black gown outside holding her stomach',
        thumbnailAlt: 'Pregnant woman in a black gown outside holding her stomach'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-2510.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-2510.webp',
        description: '',
        orignalAlt: 'Husband next to wife holding newborn child right after being delivered',
        thumbnailAlt: 'Husband next to wife holding newborn child right after being delivered'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6515.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6515.webp',
        description: '',
        orignalAlt: 'Dr. Suiter holding crying baby after just being delivered',
        thumbnailAlt: 'Dr. Suiter holding crying baby after just being delivered'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6516.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-6516.webp',
        description: '',
        orignalAlt: 'Father holding newborn son right after delivery',
        thumbnailAlt: 'Father holding newborn son right after delivery'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/q.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/q.webp',
        description: '',
        orignalAlt: 'Dr. Suiter holding newborn baby with the father and mother',
        thumbnailAlt: 'Dr. Suiter holding newborn baby with the father and mother'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/r.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/r.webp',
        description: 'Samuel',
        orignalAlt: 'Dr. Suiter with patient holding newborn baby',
        thumbnailAlt: 'Dr. Suiter with patient holding newborn baby'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/s.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/s.webp',
        description: 'Samuel',
        orignalAlt: 'Dr. Suiter holding up a baby she just delivered',
        thumbnailAlt: 'Dr. Suiter holding up a baby she just delivered'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/t.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/t.webp',
        description: 'Samuel',
        orignalAlt: 'Dr. Suiter and husband of patient cutting the chord',
        thumbnailAlt: 'Dr. Suiter and husband of patient cutting the chord'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/u.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/u.webp',
        description: 'Anthony',
        orignalAlt: 'Baby outside being held in the hands of his parents',
        thumbnailAlt: 'Baby outside being held in the hands of his parents'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/v.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/v.webp',
        description: '',
        orignalAlt: 'An outside family photo with mom and dad holding their kids',
        thumbnailAlt: 'An outside family photo with mom and dad holding their kids'
    },
    {
        original:'https://d1wedsacc4lfnu.cloudfront.net/newborn.webp',
        originalHeight: '600px',
        thumbnail:'https://d1wedsacc4lfnu.cloudfront.net/newborn.webp',
        description: '',
        orignalAlt: 'Dr. Suiter holding a baby she just delivered in the delivery room',
        thumbnailAlt: 'Dr. Suiter holding a baby she just delivered in the delivery room'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/w.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/w.webp',
        description: '',
        orignalAlt: 'A baby laying down with a knit basball cap and a baseball in front of him',
        thumbnailAlt: 'A baby laying down with a knit baseball cap and a baseball in front of him'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/x.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/x.webp',
        description: '',
        orignalAlt: 'Girl outside in a hammock chair',
        thumbnailAlt: 'Girl outside in a hommock chair'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/y.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/y.webp',
        description: '',
        orignalAlt: 'Little boy being walked through tall grass with his dad',
        thumbnailAlt: 'Little boy being walked through tall grass with his dad'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z.webp',
        description: '',
        orignalAlt: 'Baby asleep in a tin bucket with a blanket and arms folded',
        thumbnailAlt: 'Baby asleep in a tin bucket with a blanket and arms folded'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z3.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z3.webp',
        description: '',
        orignalAlt: 'Dr. Suiter with the husband of her patient holding newborn baby',
        thumbnailAlt: 'Dr. Suiter with the husband of her patient holding newborn baby'
    },
    
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z5.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z5.webp',
        description: '',
        orignalAlt: 'A new dad holding son that was just born in the delivery room',
        thumbnailAlt: 'A new dad holding son that was just born in the delivery room'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/z4.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/z4.webp',
        description: 'Office Christmas Party',
        orignalAlt: 'Pineywoods OBGYN staff Christmas party photo',
        thumbnailAlt: 'Pineywoods OBGYN staff Christmas party photo'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-9034.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-9034.webp',
        description: '',
        orignalAlt: 'Pineywoods OBGYN',
        thumbnailAlt: 'Pineywoods OBGYN'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/image3.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/image3.webp',
        description: '',
        orignalAlt: 'Pineywoods OBGYN',
        thumbnailAlt: 'Pineywoods OBGYN'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-1898.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-1898.webp',
        description: '',
        orignalAlt: 'Pineywoods OBGYN',
        thumbnailAlt: 'Pineywoods OBGYN'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/image-6483441.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/image-6483441.webp',
        description: '',
        orignalAlt: 'Pineywoods OBGYN',
        thumbnailAlt: 'Pineywoods OBGYN'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-9503.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/IMG-9503.webp',
        description: '',
        orignalAlt: 'Pineywoods OBGYN',
        thumbnailAlt: 'Pineywoods OBGYN'
    },
    {
        original: 'https://d1wedsacc4lfnu.cloudfront.net/image0.webp',
        originalHeight: '600px',
        thumbnail: 'https://d1wedsacc4lfnu.cloudfront.net/image0.webp',
        description: '',
        orignalAlt: 'Pineywoods OBGYN',
        thumbnailAlt: 'Pineywoods OBGYN'
    }
]

function Gal () {
    const [isLoading, setIsLoading] = useState(true);
    const [showGallery, setShowGallery] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    function loadImage(src) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject();
        });
    }
    
      useEffect(() => {
        Promise.all(
            images.map((img) => loadImage(img.original))
          )
            .then(() => setIsLoading(false))
            .catch((error) => console.error(error));
        }, []);

    const thumbnailClickHandler = (index) => {
        setSelectedIndex(index);
        setShowGallery(true);
    }

    const backButtonHandler = () => {
        setShowGallery(false);
    }

    return (
        <div>
        {isLoading ? (
            <div>
                <div className='loading'>Loading...</div>
            </div>
        ) : (
            !showGallery ? 
                <div className='thumbnail-container'>
                    {images.map((img, index) => (
                        <img 
                        key={index}
                        src={img.thumbnail} 
                        alt={img.orignalAlt}
                        height='200px'
                        onClick={() => thumbnailClickHandler(index)}
                        className='thumbnail'
                        />
                    ))}
                </div> : 
                <div>
                    <button className='backbtn' onClick={backButtonHandler}>Back</button>
                    <ImageGallery 
                        items={images} 
                        startIndex={selectedIndex}
                        onSlide={() => null}
                        lazyLoad={true}
                    />
                    {/* <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div> */}
                </div>
            )}
        </div>
    )
}

export default Gal;