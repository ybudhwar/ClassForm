import React, { useState, useEffect } from 'react';
import '../App.css';


const Screen1 = () => {

    const url = `https://finalspaceapi.com/api/v0/character`;
    const [data, setData] = useState(null);

    const getData = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data1) => {
                setData(data1);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(getData, [url]);

    return (
        <>
            <h1 id="id2">Final Space API</h1>
            {
                data ? (
                    <>
                        {console.log(data)}
                        {<div className="char-container">
                            {data.map((element) => {
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

export default Screen1
