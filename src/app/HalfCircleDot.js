import React from 'react';

const HalfCircleDot = ({ size = 12, innerSize = 5, rotation = 142 }) => {
    return (
        <div
            className="relative rounded-full overflow-hidden"
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            <div
                className="rounded-full"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `conic-gradient(from ${rotation}deg, #1A4CA8 0deg 180deg, #5788E5 180deg 360deg)`,
                }}
            />
            <div
                className="bg-white rounded-full absolute"
                style={{
                    width: `${innerSize}px`,
                    height: `${innerSize}px`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
    );
};

export default HalfCircleDot;
