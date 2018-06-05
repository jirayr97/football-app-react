import React from "react";
import "./Betting.css";

class Betting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
            balance: 2000,
            betValue: null,
        }
    }
    betItem = (e,obj) => {
        let { balance } = this.state;
        let { betValue } = this.state;
        if (obj.firstCountry) {
            obj.winner = Math.random() > 0.5 ? obj.firstCountry : obj.secondCountry;
            if (e.childNodes[0].childNodes[0].textContent === obj.winner.toUpperCase() && obj.winner === obj.firstCountry) {
                balance += betValue * obj.firstCountryRate;
            }
             else if (e.childNodes[0].childNodes[0].textContent === obj.winner.toUpperCase() && obj.winner === obj.secondCountry) {
                balance += betValue * obj.secondCountryRate;
            }
            else if (e.childNodes[0].childNodes[0].textContent !== obj.winner.toUpperCase() && obj.winner === obj.firstCountry) {
                balance -= betValue * obj.secondCountryRate;
            }
            else {
                balance -= betValue * obj.firstCountryRate;

            }
            this.setState({ winner: obj.winner , balance })
            this.props.setWinner(obj)
        }        
    }


    render() {
        const winner = this.state.winner;
        const { currentGame } = this.props;
        return(
            <div className="bet-container">
                <div className="match-container">
                    <div className="balance">{this.state.balance} AMD</div>
                    <div>
                        <label >YOUR BET: </label>
                        <input type="text" value={this.state.betValue} onChange={(e) => this.setState({ betValue: e.target.value })}/>
                    </div>
                    <div className="match">

                        <div className="match-item" onClick={(e) => this.betItem(e.currentTarget,currentGame)}>
                            <div className={`bet-country ${currentGame.firstCountry}`}>{currentGame.firstCountry ?currentGame.firstCountry.toUpperCase() : ""}</div>
                            <div className="rate">Rate:{currentGame.firstCountryRate}</div>
                        </div>

                        <div className="match-item" onClick={(e) => this.betItem(e.currentTarget,currentGame)}>
                            <div className={`bet-country ${currentGame.secondCountry}`}>{currentGame.secondCountry? currentGame.secondCountry.toUpperCase() : ""}</div>
                            <div className="rate">Rate:{currentGame.secondCountryRate}</div>
                        </div>
                    </div>
                    <div  className={`winner ${winner}`}>
                        <p>WINNER</p> 
                        <p>{winner}</p> 
                    </div>
                </div>
             
            </div>
        ) 
    }

}

export default Betting;