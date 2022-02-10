import axios from "axios";

//const 
const initialData = {
    array : []
}

const GET_POKEMON_OK = 'GET_POKEMON_OK';

//reducer 
export default function pokeReducer(state = initialData, action) {
    switch(action.type){
        case GET_POKEMON_OK:
            return {...state, array: action.payload}
        default:
            return state
    }
}

//actions
export const getPokemonAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        dispatch({
            type: GET_POKEMON_OK,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}