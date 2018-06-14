import React from "react";
import "./Tree.css";
import PropTypes from "prop-types";

class Tree extends React.Component {
    render() {
        let { treeData } = this.props;
        let tree = treeData.map((columnData, index) => (
            <div key={index} className="games-column">
                {
                    columnData.map(matchObject => (
                        <div key={matchObject.matchId} className="games" onClick={() => this.props.selectMatch(matchObject)}>
                            <div className={`country ${matchObject.firstCountry}`}>{matchObject.firstCountry}</div>
                            <div className={`country ${matchObject.secondCountry}`}>{matchObject.secondCountry}</div>
                        </div>))
                }
            </div>))
        return (
            <div className="container">
                {tree}
            </div>
        )
    }
}

Tree.propTypes = {
    treeData: PropTypes.array.isRequired,
    selectMatch: PropTypes.func.isRequired
}
export default Tree;