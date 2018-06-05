import React from "react";
import treeData from "../../TreeData";
import Tree from "./Tree";
import Betting from "./Betting";


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData,
            currentGame: {},
            winnerObj: {},
        }
    }
    selectMatch = (matchObject) => {
        if (matchObject.firstCountry && matchObject.secondCountry) {
            let firstRandom = Math.random();
            let secondRandom = Math.random();
            matchObject.firstCountryRate = firstRandom < 0.1 ?  Math.round(firstRandom * 100) : Math.round(firstRandom * 10);
            matchObject.secondCountryRate = secondRandom < 0.1 ?  Math.round(secondRandom * 100) : Math.round(secondRandom * 10)
            this.setState({ currentGame: matchObject })

        }
    }
    setWinner = (winObj) => {
        const { treeData } = this.state;
        let newTree;
        treeData.forEach(dataArray => {
            dataArray.forEach(matchObj => {
                if (matchObj.nextMatchId === winObj.matchId  || (matchObj.nextMatchId ===16 && winObj.matchId === 31)) {
                    matchObj.secondCountry = winObj.winner; 
                } else if((matchObj.nextMatchId -1) === winObj.matchId ) {
                    matchObj.firstCountry = winObj.winner;
                } else {
                    newTree = treeData;
                }
            })
        })
        if (winObj.matchId === 32) {
            console.log(winObj.winner)
        }
        this.setState({ treeData: newTree })
    }


    render() {
        const { currentGame } = this.state;
        return(
            <div>   
                <Betting currentGame={currentGame} setWinner={this.setWinner}/>
                <Tree selectMatch={this.selectMatch} treeData={this.state.treeData}/>
            </ div>
        )
    }
}
export default Container;