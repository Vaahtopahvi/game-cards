import React from 'react';
import Card from './Card';

const CardStacker = ({ data }) => {
    return (
        <div className='flex card-stacker py-10'>
            {data.map((eachData, index) => (
                <Card 
                    key={index} 
                    name={eachData.name} 
                    subtitle={eachData.subtitle} 
                    rating={eachData.rating} 
                    background={eachData.background} 
                    image={eachData.image}
                    className={index !== 0 ?  '-ml-32 shadow-[-5px_5px_10px_rgba(0,0,0,0.1)]' : ''}
                />
            ))}
        </div>
    );
};

export default CardStacker;