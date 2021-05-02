import Pokemon from '../components/Pokemon'
import PokemonMoves from '../components/PokemonMoves'
import PokemonTypes from '../components/PokemonTypes'

export default [
  {
    path: '/pokemon/:id',
    name: 'Pokemon',
    component: Pokemon,
    children: [
      {
        path: 'moves',
        name: 'PokemonMoves',
        component: PokemonMoves
      },
      {
        path: 'types',
        name: 'PokemonTypes',
        component: PokemonTypes
      }
    ]
  }
]