import React, { Fragment } from "react";
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
        this.setState({ currentGame: matchObject })
    }
    setWinner = (winObj) => {
        const { treeData } = this.state;
        let newTree;
        treeData.map(dataArray => {
            dataArray.map(matchObj => {
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
            <Fragment>
                <Betting currentGame={currentGame} setWinner={this.setWinner}/>
                <Tree selectMatch={this.selectMatch} treeData={this.state.treeData}/>
            </ Fragment>
        )
    }
}
export default Container;