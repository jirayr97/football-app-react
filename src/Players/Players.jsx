import React from "react";
import "./Players.css";

const Players = ({selectedCountry, playersArray}) => {
    let players = selectedCountry ? (
    <ol>
        {playersArray.map((o,i) => <li key={i}>{o.name}</li>)}
    </ol>) : null;

    return <div className="players-container">
            <p className={`players-header ${selectedCountry}`}>{selectedCountry ? `${selectedCountry.toUpperCase()} players` : null }</p>
            {players}
    </div>
};

export default Players;