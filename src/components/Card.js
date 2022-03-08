import React from 'react'

export default function Card(props) {
    
    return (
        <React.Fragment>
            <div className="card text-center">
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body">
                    <button className="card-text btn btn-success">Bet: {props.callAmount}$</button>
                </div>
            </div>
        </React.Fragment>


    )
}
