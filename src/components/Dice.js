import React from 'react'

export default function Dice(props) {
    return (
        <React.Fragment>
            <div className='scene'>
                <div className='cube'>
                <img className='ml_3 cube__face front' src={props.diceImg} style={{ width: "50" }} alt="..."></img>
                <img className='ml_3 cube__face back' src={props.diceImg} style={{ width: "50" }} alt="..."></img>
                <img className='ml_3 cube__face right' src={props.diceImg} style={{ width: "50px" }} alt="..."></img>
                <img className='ml_3 cube__face left' src={props.diceImg} style={{ width: "50px" }} alt="..."></img>
                <img className='ml_3 cube__face top' src={props.diceImg} style={{ width: "50px" }} alt="..."></img>
                <img className='ml_3 cube__face bottom' src={props.diceImg} style={{ width: "50px" }} alt="..."></img>
                </div>
            </div>
        </React.Fragment>
    )
}
