import React from "react";
import Cards from "../Cards/Card"
import "./News.css";
import Loading from "../Loading";

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }


    componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?sources=espn&apiKey=b478bea30ad04d88916c658d8a12a7bf`;
        fetch(url, {
            header: "X-Api-Key",
        })
            .then(response => response.json())
            .then(r => this.setState({ data: r.articles, isLoaded: true }));
    }

    render() {
        const { data, isLoaded } = this.state;
        return (
            <div className="news">
                {
                    isLoaded ?
                        data.map((newsObj, i) => (
                            <Cards
                                key={i}
                                title={newsObj.title}
                                subheader={newsObj.publishedAt}
                                image={newsObj.urlToImage}
                                url={newsObj.url}
                                description={newsObj.description}
                            />
                        )) : <Loading />
                }
            </div>
        )
    }
}

export default News;