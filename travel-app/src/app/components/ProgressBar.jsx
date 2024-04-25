import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate loading progress with a slight struggle
            if (progress < 70) {
                setProgress(progress + Math.random() * 5);
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    // Smoothly fade out the progress container after 3 seconds
                    document.querySelector('.progress-container').style.opacity = '0';
                    setTimeout(() => {
                        document.querySelector('.progress-container').style.display = 'none';
                    }, 1000);
                }, 300);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [progress]);


    return (
        <div className='progress-container'>
            <div className='progress-bar'>
                <div className='progress-bar-fill'></div>
            </div>
        </div>
    );
};

export default ProgressBar;
