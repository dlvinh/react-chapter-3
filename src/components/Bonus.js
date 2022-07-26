import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bonus() {
  const { userStake, lose } = useSelector(state => state.appStateReducer);
  const dispatch = useDispatch();
  return (
    <div className='text-center mb-5'>
      <div >
        <div className="modal" style={{ display: lose ? "block" : "", backgroundColor:"#282824d9",  }} tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">LOSER!!!</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>LOSER!!!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={()=>{
                      dispatch({
                        type: "RESTART"
                      })
                }}>Restart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>
        Vietnamese Traditional Gambling
      </h1>
      <h3 className='display-4 bg-danger' style={{ fontSize: "20px", borderRadius: '5%', width: "10%", margin: "10px auto", padding: "10px 0" }}>Stake: {userStake}$</h3>
      <button type="button" className="btn btn-primary" onClick={()=>{
         dispatch({
          type: "RESTART"
        })
      }}>Restart</button>
    </div>
  )
}
