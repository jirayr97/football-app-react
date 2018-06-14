import React from "react";
import "./UserBET.css";

const UserBET = ({ selectedCountry, startGame, betValue, warnings, handleInput,balance}) => (
    <div className="user-bet-container">
        <div className="balance">
            BALANCE
            <p>{balance} AMD</p>
        </div>
        <div className="input">
            <label>Place your bet</label>
            <input placeholder="Input bet..." type="number" onChange={(e) => handleInput(e.target.value)} />
        </div>
        
        
        <div className="error">{warnings}</div>
        <div className="bet-value">
            <div>BET {betValue}</div>
            <div>TO {selectedCountry}</div>
        </div>
        <div className="start-game">
            <button onClick={startGame}>START</button>
        </div>
    </div>
        
);
export default UserBET;