import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonAction, nextPokemonAction, prevPokemonAction } from '../redux/pokeDuck';

const Pokemon = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(store => store.pokemons.results)
    const next = useSelector(store => store.pokemons.next)
    const previous = useSelector(store => store.pokemons.previous)

    return (
    <div>
        <h2>Pokemon's List</h2><hr />

        {
            pokemons.length === 0 &&
             <button className='btn btn-primary' onClick={() => dispatch(getPokemonAction())}>
                GetPoke
            </button>
        }
        {
            next && 
            <button className='btn btn-secondary' onClick={() => dispatch(nextPokemonAction())}>
                NextPoke
            </button>
        }
        {
            previous && 
            <button className='btn btn-warning' onClick={() => dispatch(prevPokemonAction())}>
                PrevPoke
            </button>
        }
       
        
        
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