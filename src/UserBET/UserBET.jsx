import React from "react";
import "./UserBET.css";
import PropTypes from "prop-types";

const UserBET = ({ selectedCountry, startGame, betValue, warnings, handleInput, balance }) => (
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

UserBET.propTypes = {
    handleInput: PropTypes.func.isRequired,
    betValue: PropTypes.string,
    balance: PropTypes.number.isRequired,
    selectedCountry: PropTypes.string,
    startGame: PropTypes.func.isRequired,
    warnings: PropTypes.string
}
export default UserBET;