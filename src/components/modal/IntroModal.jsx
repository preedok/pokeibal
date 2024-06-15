import React from 'react';
import { usePokemonModal } from '../../context/PokemonModalProvider';
import { getTypeIconSrc } from '../../service/pokemon-helper';
import CloseIcon from '@mui/icons-material/Close';
const IntroModal = () => {
    const { currentPokemon, closeModal } = usePokemonModal();

    return (
        <div className='pokemon-intro'>
            <CloseIcon
                className='arrow-back'
                onClick={closeModal}
                style={{ cursor: 'pointer', color:'red' }}
            />
            <div className='current-pokemon'>
                <img
                    src={currentPokemon.imgSrc}
                    className='imgs'
                    style={{ maxWidth: '100%', height: '170px' }}
                    alt='Pokemon-Image'
                />
                <div>
                    <span className='id-number'>#{currentPokemon.paddedId}</span>
                    <span className='pokemon-name'>{currentPokemon.name}</span>

                    <div className='types'>
                        {
                            currentPokemon.types.map(({ name }) => {
                                const typeImg = getTypeIconSrc(name)

                                return (
                                    <div key={name} className={name}>
                                        <img src={typeImg} alt={name} />
                                        <span className='type-name'>{name}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroModal;
