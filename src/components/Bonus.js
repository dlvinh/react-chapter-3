import React from 'react'
import { useSelector } from 'react-redux'

export default function Bonus() {
  const {userStake} = useSelector(state => state.appStateReducer)
  //console.log(userStake)
  return (
    <div className='text-center mb-5'>
        <h1>
            Vietnamese Traditional Gambling
        </h1>
        <h3 className='display-4 bg-danger' style={{fontSize:"20px", borderRadius:'5%',width:"10%",margin:"10px auto",padding:"10px 0"}}>Stake: {userStake}$</h3>
        <button type="button" className="btn btn-primary">Restart</button>
    </div>
  )
}
