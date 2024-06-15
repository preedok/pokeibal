import React, { Suspense, useState } from 'react';
import './App.css';
import TypesBar from './components/TypesBar';
import PokemonsContainer from './components/PokemonsContainer';
import Modal from './components/modal/Modal';
import { PokemonModalProvider } from './context/PokemonModalProvider';
import Loader from './components/Loader';
import Breadcrombss from './components/breadcrombs/Breadcrombss';
import Header from './components/Header'
function App() {
    const [type, setType] = useState('ice');
    return (
        <>
            <Header/>
            <Breadcrombss
                menu={'Pokédex'}
                submenu={'Search'}
            />
            <TypesBar toggleType={setType} />
            <Suspense fallback={<Loader />}>
                <PokemonModalProvider>
                    <PokemonsContainer type={type} />
                    <Modal />
                </PokemonModalProvider>
            </Suspense>
        </>
    )
}

export default App