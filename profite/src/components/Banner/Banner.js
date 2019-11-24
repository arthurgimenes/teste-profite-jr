import React, {useState, useEffect} from 'react'
import './Banner.scss'
import backgroundImage from '../../img/background-image.png'
import { Gallery, GalleryImage } from "react-gesture-gallery"
import LineOrange from '../LineOrange/LineOrange'

const images = [ backgroundImage, backgroundImage, backgroundImage, backgroundImage]

const Banner = () => {

    const [index, setIndex] = useState(0) 

    useEffect(() => {
        const timer = setInterval(() => {
            if (index === 3){
                setIndex(0)
            }else{
                setIndex(prev => prev + 1)
            }
        }, 3000)
        return () => clearInterval(timer)
    }, [index])

    return (
      <div className="Banner">
          <h1>Nossa especialidade: experiência de compra.</h1>
          <LineOrange />
          <Gallery 
          index={index}
          onRequestChange={i => {
            setIndex(i);
          }}
        >
          {images.map(image => (
            <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
          
        </Gallery>
      </div>
    
    )
}

export default Banner