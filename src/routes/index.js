import PokemonList from '../components/PokemonList'
import pokemon from './pokemon'

export default [
  {
    path: '/',
    name: 'PokemonList',
    component: PokemonList,
  },
  ...pokemon
]
