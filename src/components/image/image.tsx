import React from 'react';
import './image.css';

interface IImage {
    alt: string;
    src?: string;
    className?: string;
}

function getInitials(name){
    const nameArray = name.split(' ');
    let initials = '';

    for (var i = 0; i < nameArray.length; i++) {
        if (i <= 1) {
            initials = initials + nameArray[i][0];;
        }
    }

    return initials;
}

const Image = ({src, alt}: IImage) => {
    const returnImage = () => {
        return (
            <img className="image" src={src} alt={alt} />
        )
    }

    const returnInitials = () => {
        return (
            <div className="image image--text">
                <span className="image__text">
                    {getInitials(alt)}
                </span>
            </div>
        )
    }

    return (
        <div className="image-wrapper">
            {src ? returnImage() : returnInitials()}
        </div>
    );
}

export default Image;
