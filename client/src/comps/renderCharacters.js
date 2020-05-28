import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../store/actions/characterActions";


const RenderCharacter = (props) => {
  useEffect(() => {
    props.getCharacters();
  }, []);

  console.log("PROPS: ", props);

  return (
    <div className="characterContainer">
      <h1>Breaking Bad Characters</h1>
      <section className="cardSection">
        {props.isFetching && <h1>Loading...</h1>}
        {props.errors && <h1>{props.errors}</h1>}

        {props.characters.map((character) => (
          <section className="characterCard" key={character.char_id}>
            <h3>{character.name}</h3>
            <p>{character.nickname}</p>
            <img src={character.img} alt={character.name} />
          </section>
        ))}       
      </section>

    </div>
  );
};

const mapStateToProps = (state) => {
  /*
   *console.log("STATE: ", state);
   */
  return {
    characters: state.characters.characters,
    isFetching: state.characters.isFetching,
    errors: state.characters.errors,
  };
};

export default connect(mapStateToProps, { getCharacters })(RenderCharacter);