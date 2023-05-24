import React from 'react';
//component to display images and when click open the modal
function ImageDisplay(props) {

    return (
        <div key={props.index} className="image-container">
            <img onClick={() => props.openModal(props.photo)} src={props.photo.webformatURL} alt={props.photo.tags} className="image-style" />
        </div>
    );
}

export default ImageDisplay;
