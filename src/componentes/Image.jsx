import React from 'react'

const Image = ({ImageSrc,ImageAlt,className}) => {
  return (
        <img src={ImageSrc} alt={ImageAlt} className={`${className}`} />
      
    
  )
}

export default Image
