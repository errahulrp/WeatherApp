import React, { useState } from 'react';
import Weather from './Weather';


const HomeContent = () => {
    const [cityName, setCityName] = useState('');

    const handleInputChange = (e) => {
        setCityName(e.target.value);
    };

    return (

        <div className=' bg-[#283618] flex justify-center items-center h-screen'>
            <div className='p-10 bg-white bg-opacity-30 backdrop-blur-2xl rounded-3xl'>
                <h1 className=' mb-5 flex justify-center font-serif font-semibold'>Weather App</h1>
                <input type="text" placeholder="Enter city name" className=' bg-white bg-opacity-0 border p-2 rounded-2xl outline-none' value={cityName} onChange={handleInputChange} />
                <Weather cityName={cityName} />
            </div>
        </div>
    );
};

export default HomeContent;
