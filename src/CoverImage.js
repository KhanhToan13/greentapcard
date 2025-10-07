
import React from 'react';
import './CoverImage.css';
import coverPhoto from './anhphu1.jpg'; 

function CoverImage() {
  return (
    <div className="cover-container">
      <img src={coverPhoto} alt="Ảnh bìa" className="responsive-cover-image" />
    </div>
  );
}

export default CoverImage;