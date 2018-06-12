import React from "react";
import "./UserBET.css";

class UserBET extends React.Component {
    render() {
        const { selectedCountry, startGame, betValue, warnings } = this.props;

        return (
            <div className="user-bet-container">
                <div className="balance">
                    BALANCE : {this.props.balance} AMD
                </div>
                <label>
                    Place your bet:
                    <input placeholder="Input bet..." type="number" onChange={(e) => this.props.handleInput(e.target.value)} />
                </label>
                <div className="error">{warnings}</div>
                <div className="bet-value">
                    <div>Your BET: {betValue}</div>
                    <div>To {selectedCountry}</div>
                </div>
                <div className="start-game">
                    <button onClick={startGame}>START GAME</button>
                </div>
            </div>
        )
    }
}
export default UserBET;