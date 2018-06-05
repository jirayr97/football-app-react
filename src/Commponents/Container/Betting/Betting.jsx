import React from "react";
import "./Betting.css";

class Betting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: null,
        }
    }
    betItem = (e,obj) => {
        if (obj.firstCountry) {
            obj.winner = Math.random() > 0.5 ? obj.firstCountry : obj.secondCountry;
            this.setState({ winner: obj.winner })
            this.props.setWinner(obj)
        }        
    }

    render() {
        const winner = this.state.winner;
        const { currentGame } = this.props;
        return(
            <div className="bet-container">
                <div className="match-container">
                    <div className={`match-item ${currentGame.firstCountry}`} onClick={(e) => this.betItem(e.currentTarget,currentGame)}>
                        {currentGame.firstCountry ?currentGame.firstCountry.toUpperCase() : ""}
                        </div>
                    <div className={`match-item ${currentGame.secondCountry}`} onClick={(e) => this.betItem(e.currentTarget,currentGame)}>
                        {currentGame.secondCountry? currentGame.secondCountry.toUpperCase() : ""}
                    </div>
                </div>
                <div  className={`winner ${winner}`}>
                    <p>WINNER</p> 
                    <p>{winner}</p> 
                </div>

            </div>
        ) 
    }

}

export default Betting;