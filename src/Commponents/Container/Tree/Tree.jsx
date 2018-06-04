import React from "react";
import "./Tree.css";


class Tree extends React.Component {

    render() {
        const { treeData } = this.props;
        
            const tree = treeData.map(columnData => {
                return (
                <div className="games-column">
                    {
                        columnData.map(matchObject => {
                            return (
                            <div className="games">
                                    <div className="country">{matchObject.firstCountry}</div>
                                    <div className="country">{matchObject.secondCountry}</div>
                            </div>)
                        })
                    }
                </div>)
            })
        
        
        return(
            <div className="container">
                {tree}
            </div>
            
            
        )
    }
}

export default Tree;