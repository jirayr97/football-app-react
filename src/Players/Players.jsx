import React from "react";
import "./Players.css";
import PropTypes from "prop-types";


const Players = ({ selectedCountry, playersArray }) => {
    let players = selectedCountry ? (
        <ol>
            {playersArray.map((o, i) => <li key={i}>{o.name}</li>)}
        </ol>) : null;

    return <div className="players-container">
        <p className={`players-header ${selectedCountry}`}>{selectedCountry ? selectedCountry.toUpperCase() : null}</p>
        {players}
    </div>
};

Players.propTypes = {
    playersArray: PropTypes.array.isRequired,
    selectedCountry: PropTypes.string
}
export default Players;