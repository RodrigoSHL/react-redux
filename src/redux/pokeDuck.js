import axios from "axios";

//const 
const initialData = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

const GET_POKEMON_OK = 'GET_POKEMON_OK';
const NEXT_POKEMON_OK = 'NEXT_POKEMON_OK';

//reducer 
export default function pokeReducer(state = initialData, action) {
    switch(action.type){
        case GET_POKEMON_OK:
            return {...state, ...action.payload}
        case NEXT_POKEMON_OK:
            return {...state, ...action.payload}
        default:
            return state
    }
}

//actions
export const getPokemonAction = () => async (dispatch, getState) => {
    
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
        dispatch({
            type: GET_POKEMON_OK,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const nextPokemonAction = () => async (dispatch, getState) => {
    const {next} = getState().pokemons;
    
    try {
        const res = await axios.get(next);
        dispatch({
            type: NEXT_POKEMON_OK,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const prevPokemonAction = () => async (dispatch, getState) => {
    const {previous} = getState().pokemons;
    
    try {
        const res = await axios.get(previous);
        dispatch({
            type: NEXT_POKEMON_OK,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}