import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { rollingDices } from '../redux/actions/actionList';
import Dice from './Dice';
export default function DicingPlate() {
  const { diceList } = useSelector(state => state.appStateReducer);
  //console.log(diceList);
  const dispatch = useDispatch();

  const rollingDicesHandler = ()=>{
    dispatch(rollingDices())
  }

  return (
    <React.Fragment>
      <div className='dice-list text-center'>
        <div className='row' style={{ padding: "0px 30px" }}>
          <div className='col-12 '>
            <Dice diceImg={diceList[0].img}></Dice>
          </div>
          <div className='col-6'>
            <Dice diceImg={diceList[1].img}></Dice>
          </div>
          <div className='col-6'>
            <Dice diceImg={diceList[2].img}></Dice>
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={rollingDicesHandler}>Roll Dices</button>
      </div>
    </React.Fragment>

  )
}
