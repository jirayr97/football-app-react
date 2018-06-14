import React from "react";
import "./GameBET.css";
import PropTypes from "prop-types";


class GameBet extends React.Component {

    betItem(obj, country) {
        let select, code;
        if (!obj.winner) {
            if (obj.firstCountry === country) {
                select = obj.firstCountry;
                code = obj.firstCountryCode;
            } else if (obj.secondCountry === country) {
                select = obj.secondCountry;
                code = obj.secondCountryCode;
            }
            this.props.setCountry(select, code);
        }
    }

    render() {
        const { currentGame } = this.props;
        return (
            <div className="match-container">
                <div className="game-container">

                    <div className="match-item" onClick={() => this.betItem(currentGame, currentGame.firstCountry)}>
                        <div className={`bet-country ${currentGame.firstCountry}`}></div>
                        <div className="country-name">{currentGame.firstCountry ? currentGame.firstCountry.toUpperCase() : ""}</div>
                        <div className={currentGame.firstCountryRate ? `rate` : ""}>{currentGame.firstCountryRate ? `Rate: ${currentGame.firstCountryRate}` : ""}</div>
                    </div>
                    {
                        currentGame.winner ? (<div className="winner">
                            <p>{currentGame.winner ? `WINNER` : ""}</p>
                            <div className={`win-flag ${currentGame.winner}`}></div>
                            <p>{currentGame.winner ? currentGame.winner.toUpperCase() : null}</p>
                        </div>) : null
                    }

                    <div className="match-item" onClick={() => this.betItem(currentGame, currentGame.secondCountry)}>
                        <div className={`bet-country ${currentGame.secondCountry}`}></div>
                        <div className="country-name">{currentGame.secondCountry ? currentGame.secondCountry.toUpperCase() : ""}</div>
                        <div className={currentGame.secondCountryRate ? `rate` : ""}>{currentGame.secondCountryRate ? `Rate: ${currentGame.secondCountryRate}` : ""}</div>
                    </div>
                </div>
            </div>

        )
    }
}

GameBet.propTypes = {
    currentGame: PropTypes.object.isRequired,
    setCountry: PropTypes.func.isRequired
}
export default GameBet;