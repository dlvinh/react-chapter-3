import React, { useState } from 'react'
import Card from './Card'
import { useSelector } from 'react-redux';
import appReducer from '../redux/appReducerStore';
export default function BettingPlate() {


    /**
     * Note: khi su dung useSelector thay the cho mapStateToProps,
     * ta can tao store nhu thuong va khi dung state ben duoi no se tu dong di toi store va lay state ra
     */
    const {userBetList} = useSelector(state => state.appStateReducer)
 console.log(userBetList)// uncomment to see 
    const renderBetingCard = ()=>{
     //   console.log("userBetList",userBetList)
       return userBetList.map((item, index)=>{
            return  <div className='col-4' key={index}>
            <Card  img={item.img} callAmount={item.amount}  bettingValue={item}></Card>
        </div>
        })
    }
    return (
        <div>
            <div className='row mb-5'>
                {renderBetingCard()}
            </div>
        </div>
    )
}
