// components/Subheading.tsx
import React from 'react';

interface SubheadingProps {
    text: string;
    className?: string;
}

const Subheading: React.FC<SubheadingProps> = ({ text, className = '' }) => {
    return (
        <h2 className={`text-[50px] font-bold font-poppins ${className ?? ''}`}>
            {text}
        </h2>
    );
};

export default Subheading;
