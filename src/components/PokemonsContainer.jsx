import React, { useState } from 'react';
import usePokemons from '../hooks/usePokemons';
import PokemonCard from './PokemonCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const PokemonsContainer = ({ type }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const pokemons = usePokemons(type);

    const pokemonsPerPage = 6;
    const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const goToPrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const searchPokemonByName = (pokemonName) => {
        return pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()) ||
            pokemon.paddedId.includes(pokemonName.toLowerCase()) ||
            pokemon.types.some((type) => type.name.toLowerCase().includes(pokemonName.toLowerCase()))
        );
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const filteredPokemons = searchTerm.trim() !== '' ? searchPokemonByName(searchTerm) : currentPokemons;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => paginate(i)}
                    className={`bg-[#F3FF90] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mx-1 focus:outline-none ${currentPage === i ? 'bg-gray-500 hover:bg-gray-500 text-white' : 'hover:bg-gray-300'}`}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-[#F3FF90] w-[100%] mt-4 px-4 py-4 rounded-xl mb-4 focus:outline-none border-2 border-[#FF8F00] hover:border-[#FD9B63] transition-all duration-300"
                style={{
                    fontFamily: 'inherit',
                    fontSize: '1rem',
                    color: '#333',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            />

            <div className='pokemons-container mt-6'>
                {filteredPokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className="flex justify-center items-center mt-16 space-x-2">
                <button
                    onClick={goToPrevPage}
                    className={`bg-[#FFA62F] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2 focus:outline-none ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                    disabled={currentPage === 1}
                >
                    <ArrowBackIosNewIcon className='text-white'/>
                </button>
                {renderPageNumbers()}
                <button
                    onClick={goToNextPage}
                    className={`bg-[#FFA62F] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md ml-2 focus:outline-none ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                    disabled={currentPage === totalPages}
                >
                    <ArrowForwardIosIcon className='text-white'/>
                </button>
            </div>
        </>
    );
};

export default PokemonsContainer;
