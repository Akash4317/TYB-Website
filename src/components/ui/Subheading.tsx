// components/Subheading.tsx
import React from 'react';

interface SubheadingProps {
    text: string;
    className?: string;
    position?: 'left' | 'center' | 'right';
}

const Subheading: React.FC<SubheadingProps> = ({ text, className = '', position = 'left' }) => {
    let alignmentClass = '';
    switch (position) {
        case 'center':
            alignmentClass = 'text-center';
            break;
        case 'right':
            alignmentClass = 'text-right';
            break;
        default:
            alignmentClass = 'text-left';
    }

    return (
        <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-poppins ${alignmentClass} ${className}`}>
            {text}
        </h2>
    );
};

export default Subheading;
