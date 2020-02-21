import React from 'react';
import './container.css';

interface IContainer {
    children?: React.ReactNode
    className?: string;
    isMain?: boolean;
}

const Container = ({children, className, isMain}: IContainer) => {
    function BEM(): string {
        const classArray = ['container'];

        if (isMain) {
            classArray.push('container--main');
        }

        return classArray.join(' ');
    }

    return (
        <div className={BEM()}>
            {children}
        </div>
    );
}

export default Container;
