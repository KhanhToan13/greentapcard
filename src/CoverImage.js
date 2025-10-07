
import React from 'react';
import './CoverImage.css';
import coverPhoto from './thiep.png'; 

function CoverImage() {
  return (
    <div className="cover-container">
      <img src={coverPhoto} alt="Ảnh bìa" className="responsive-cover-image" />
    </div>
  );
}

export default CoverImage;