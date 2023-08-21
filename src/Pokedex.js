import Pokecard from './Pokecard';

function Pokedex(props) {

  // props: pokemons: [ {id: 4,name: 'Charmander', type: 'fire',base_experience: 62},
  //          {id: 7, name: 'Squirtle',type: 'water', base_experience: 63},]

  return (
    <div>
      <ul>
        {props.pokemons.map(({ id, name, type, base_experience }) =>
          <li>
            <Pokecard
              id={id}
              name={name}
              type={type}
              base_experience={base_experience} />
          </li>)}
      </ul>
    </div>
  );

  // return (<div>
  //   <ul>
  //     {props.pokemons.map(pokemon => <li><Pokecard /></li>)}
  //   </ul>
  // </div>);

}

export default Pokedex;