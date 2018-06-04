import React from "react";
import treeData from "../../TreeData";
import Tree from "./Tree";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData,

        }
    }

    render() {
        return(
            <Tree  treeData={this.state.treeData} />
        )
    }


}
export default Container;