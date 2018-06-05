import React from "react";
import "./Betting.css";

class Betting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner: "",
        }
    }
    betItem = (e,obj) => {
        obj.winner = Math.random() > 0.5 ? obj.firstCountry : obj.secondCountry;
        this.setState({ winner: obj.winner })
        this.props.setWinner(obj)
        
    }

    render() {
        const { currentGame } = this.props;
        return(
            <div className="bet-container">
                <div className="match-container">
                    <div className="match-item" onClick={(e) => this.betItem(e.currentTarget,currentGame)}>{currentGame.firstCountry}</div>
                    <div className="match-item" onClick={(e) => this.betItem(e.currentTarget,currentGame)}>{currentGame.secondCountry}</div>
                </div>
                <div  className="winner">Winner {this.state.winner}</div>

            </div>
        ) 
    }

}

export default Betting;