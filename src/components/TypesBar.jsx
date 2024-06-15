import React from 'react';
import useTypes from '../hooks/useTypes';
import { getTypeIconSrc } from '../service/pokemon-helper';
import backgroundImage from '../assets/pokemon1.png';
const TypesBar = ({ toggleType }) => {
    const types = useTypes();

    return (
        <nav style={{
            backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'
        }} className='flex mt-5 flex-wrap items-center justify-center p-3 gap-4 rounded-[15px] shadow-lg'>
            {
                types.map(({ name }) => {
                    const typeImg = getTypeIconSrc(name);

                    return (
                        <a
                            key={name}
                            className={`flex w-12 h-12 sm:w-14 sm:h-14 p-2 sm:p-4 cursor-pointer rounded-full bg-current transition-transform duration-300 hover:scale-125 ${name}`}
                            onClick={() => toggleType(name)}
                        >
                            <img src={typeImg} alt={name} className="w-full h-full" />
                        </a>
                    );
                })
            }
        </nav>
    );
};

export default TypesBar;
