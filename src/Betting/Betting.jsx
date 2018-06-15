import React from "react";
import "./Betting.css";
import UserBET from "../UserBET";
import GameBet from "../GameBET";
import Players from "../Players";
import { randomWinner, getWarnings } from "../helpers/helpers";
import PropTypes from "prop-types";

class Betting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 5000,
            betValue: null,
            selectedCountry: "",
            warnings: null,
            playersArray: [],
        }
    }

    setCountry = (selectedCountry, code) => {
        this.setState({ selectedCountry })
        if (selectedCountry) {
            let url = `http://api.football-data.org/v1/teams/${code}/players`;
            fetch(url, {
                headers: { 'X-Auth-Token': '24def9f61a4b48b795955f1563d29a38' },
            })
                .then(response => response.json())
                .then(r => {
                    let playersArray = (r.players).slice(0, 11);
                    this.setState({ playersArray })
                })
        }

    }

    startGame = () => {
        const { betValue, selectedCountry } = this.state;
        let { balance } = this.state;
        let { currentGame } = this.props;
        if (selectedCountry && balance >= betValue && balance && betValue && betValue >= 1 && !currentGame.winner) {
            balance = randomWinner(currentGame, balance, betValue, selectedCountry);
            this.setState({ balance, warnings: null, selectedCountry: "" })
            this.props.setWinner(currentGame)
        } else {
            let { warnings } = this.state;
            warnings = getWarnings(selectedCountry, balance, betValue);
            this.setState({ warnings })
        }


    }
    handleInput = (inputValue) => {
        this.setState({ betValue: inputValue })
    }

    render() {
        const { currentGame } = this.props;
        const { betValue, balance, selectedCountry, warnings, playersArray } = this.state;
        return (
            <div className="bet-container">
                <UserBET
                    handleInput={this.handleInput}
                    betValue={betValue}
                    balance={balance}
                    selectedCountry={selectedCountry}
                    startGame={this.startGame}
                    warnings={warnings}
                />
                <GameBet
                    currentGame={currentGame}
                    setCountry={this.setCountry}
                />
                <Players playersArray={playersArray} selectedCountry={selectedCountry} />
            </div>
        )
    }
}
Betting.propTypes = {
    currentGame: PropTypes.object.isRequired,
    setWinner: PropTypes.func.isRequired,
}
export default Betting;