// components/SplashScreen.tsx
import React from 'react';


const SplashScreen: React.FC = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-primary'>
            <div className="loader">
                <div className="square-1 square"></div>
                <div className="square-2 square"></div>
            </div>
        </div>
    );
};

export default SplashScreen;
