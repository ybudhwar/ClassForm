import React, { Component } from 'react';

class ClassScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            url: "https://finalspaceapi.com/api/v0/character",
        }
    }

    componentDidMount() {
        fetch(this.state.url)
            .then((res) => res.json())
            .then((data1) => {
                this.setState({ data: data1 });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <>
                <h1 id="id2">Final Space API</h1>
                {
                    this.state.data ? (
                        <>
                            {console.log(this.state.data)}
                            {<div className="char-container">
                                {this.state.data.map((element) => {
                                    return (
                                        <>
                                            <div className="character">
                                                <div className="img-container">
                                                    <img src={element.img_url} alt={element.name} />
                                                </div>
                                                <div className="info">
                                                    <span className="number">{element.id}</span>
                                                    <h3 className="name">{element.name}</h3>
                                                    <span className="species">{element.gender}</span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>}
                        </>
                    ) : null
                }
            </>
        )
    }
}

export default ClassScreen