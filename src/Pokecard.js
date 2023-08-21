function Pokecard(props) {

  //id, name, type, base_experience
  return (
    <div>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>type: {props.type}</p>
      <p>base_experience: {props.base_experience}</p>
    </div>
  );
}

export default Pokecard;