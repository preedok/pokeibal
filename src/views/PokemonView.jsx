import React, { Suspense, useState } from 'react';
import TypesBar from '../components/TypesBar';
import PokemonsContainer from '../components/PokemonsContainer';
import Modal from '../components/modal/Modal';
import { PokemonModalProvider } from '../context/PokemonModalProvider';
import Loader from '../components/Loader';

function PokemonView() {
    const [type, setType] = useState('ice');
    return (
        <Suspense fallback={<Loader />}>
            <PokemonModalProvider>
                <div className='flex flex-col items-center'>
                    <TypesBar toggleType={setType} />
                    <PokemonsContainer type={type} />
                </div>
                <Modal />
            </PokemonModalProvider>
        </Suspense>
    )
}

export default PokemonView;
