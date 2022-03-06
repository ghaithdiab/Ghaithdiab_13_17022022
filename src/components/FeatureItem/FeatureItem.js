import React from 'react'
import './FeatureItem.css'
import PropTypes from 'prop-types'

/**
 * 
 * @param {img} image 
 * @param {string} title
 * @param {string} description  
 */
export default function FeatureItem({image ,title ,description}) {
  return (
    <div className='feature-item'>
      <img src={image} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{description}</p>
    </div>
  )
}

FeatureItem.propTypes ={
  image:PropTypes.any,
  title:PropTypes.string,
  description:PropTypes.string
}
