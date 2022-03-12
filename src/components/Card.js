import React, { useRef, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { bettingAction } from '../redux/actions/actionList';
export default function Card(props) {


    const inputAmount  = useRef(props.callAmount);
    let dispatch = useDispatch()
    const inputBettingAmountHandler = ()=>{
        dispatch(
            bettingAction({amount:inputAmount.current.value, id:props.bettingValue.betId})  
        )
    }



    return (
        <React.Fragment>
            <div className="card text-center">
                <img className="card-img-top" src={props.img} alt="..." />
                <div className="card-body">
                    <button className="card-text btn btn-success" data-toggle="modal" data-target={"#"+props.bettingValue.betId}>Bet: {props.callAmount}$</button>
                </div>
            </div>
            <div>
                <div className="modal fade" id={props.bettingValue.betId} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Raise on {props.bettingValue.betId}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                  <label htmlFor="betingAmount">Amount</label>
                                  <input ref={inputAmount} type="number" className="form-control" name="betingAmount" id="betingAmount" placeholder="Input your betting value"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={inputBettingAmountHandler} data-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


