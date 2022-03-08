import React from 'react'
import { useSelector } from 'react-redux'

export default function DicingPlate() {
  const {diceList} = useSelector (state => state.appStateReducer);
  console.log(diceList);
  
  return (
    <React.Fragment>
      <div className='dice-list text-center'>
        <div className='row' style={{padding: "80px 30px" }}>
          <div className='col-12 '>
            <img src={diceList[0].img} style={{ width: "50px" }} alt="..."></img>
          </div>
          <div className='col-6'>
            <img src={diceList[1].img} style={{ width: "50px" }} alt="..."></img>
          </div>
          <div className='col-6'>
            <img src={diceList[2].img} style={{ width: "50px" }} alt="..."></img>
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary">Dice</button>
      </div>
    </React.Fragment>

  )
}
