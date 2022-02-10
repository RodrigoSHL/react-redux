import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonAction } from '../redux/pokeDuck';

const Pokemon = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(store => store.pokemons.array)
    console.log(pokemons)
    return (
    <div>
        <h2>Pokemon's List</h2><hr />
        <button className='btn btn-primary ' onClick={() => dispatch(getPokemonAction())}>
            GetPoke
        </button>
        <hr />
        <ul>
        {
                pokemons.map(item => (
                    <li key={item.name}> {item.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pokemon