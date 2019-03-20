import React, { Component } from 'react'

export default class PokemonIndex extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        this.props.requestAllPokemon();
    }
  
    render() {
        return (
        <div>
            <ul>
                {this.props.pokemon.map((el, ind) => { return <li key={ind}>{el.name} : <img src={el.image_url} alt=""/></li> })}
            </ul>
        </div>
        )
    }
}
