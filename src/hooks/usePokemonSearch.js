// // hooks/usePokemonSearch.js
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const usePokemonSearch = (query) => {
//     const [pokemons, setPokemons] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (!query) return;

//         const fetchPokemons = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
//                 setPokemons([response.data]); // Wrap in array to match existing data structure
//                 setError(null);
//             } catch (error) {
//                 setPokemons([]);
//                 setError('Pokémon not found');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchPokemons();
//     }, [query]);

//     return { pokemons, loading, error };
// };

// export default usePokemonSearch;
