import React from "react";
import treeData from "../TreeData";
import Tree from "../Tree";
import Betting from "../Betting";
import { getRandomRates, updateTree } from "../helpers/helpers";


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData,
            currentGame: {},
        }
    }

    selectMatch = (matchObject) => {
        if (matchObject.firstCountry && matchObject.secondCountry && !matchObject.winner) {
            getRandomRates(matchObject)
            this.setState({ currentGame: matchObject })
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }
    setWinner = (winObj) => {
        const { treeData } = this.state;
        updateTree(treeData, winObj);
        this.setState({ treeData })
    }


    render() {
        const { currentGame } = this.state;
        return (
            <div>
                <Betting currentGame={currentGame} setWinner={this.setWinner} />
                <Tree selectMatch={this.selectMatch} treeData={this.state.treeData} />
            </ div>
        )
    }
}
export default Container;