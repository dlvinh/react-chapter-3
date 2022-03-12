import { BETTING_TYPE, ROLLING_TYPE } from "./types/typeList";

const INITAL_USER_BET_LIST = [
    {
        betId: 'bau',
        amount: 0,
        img: './img/bau.png',
    },
    {
        betId: 'cua',
        amount: 0,
        img: './img/cua.png',
    },
    {
        betId: 'ca',
        amount: 0,
        img: './img/ca.png',
    },
    {
        betId: 'nai',
        amount: 0,
        img: './img/nai.png',
    },
    {
        betId: 'tom',
        amount: 0,
        img: './img/tom.png',
    },
    {
        betId: 'ga',
        amount: 0,
        img: './img/ga.png',
    }
];
const appState = {
    userBetList: [
        {
            betId: 'bau',
            amount: 0,
            img: './img/bau.png',
        },
        {
            betId: 'cua',
            amount: 0,
            img: './img/cua.png',
        },
        {
            betId: 'ca',
            amount: 0,
            img: './img/ca.png',
        },
        {
            betId: 'nai',
            amount: 0,
            img: './img/nai.png',
        },
        {
            betId: 'tom',
            amount: 0,
            img: './img/tom.png',
        },
        {
            betId: 'ga',
            amount: 0,
            img: './img/ga.png',
        }
    ],
    userStake: 1000,
    diceList: [
        { id: "nai", img: "./img/nai.png" },
        { id: "cua", img: "./img/cua.png" },
        { id: "tom", img: "./img/tom.png" },
    ]

}

const appReducer = (state = appState, action) => {
    switch (action.type) {
        case BETTING_TYPE:{
            //console.log("Betting",action)
            let newUserBetList = [...state.userBetList];
            let index = newUserBetList.findIndex(betItem => betItem.betId === action.other.id);
            if (action.other.amount > state.userStake){
                alert("Not enough stake");
                return {...state}
            }
            let newStake = state.userStake - action.other.amount;
            newUserBetList[index].amount = action.other.amount;
            return {...state,newUserBetList, userStake:newStake}
        }
        case ROLLING_TYPE:{
           // console.log("Rolling dice", action);
            let newDiceList= [];
            let newUserBetList = [...state.userBetList];
            let newStake= state.userStake;
            for (let i=0; i < 3; i++){
                let randNum = Math.floor(Math.random() * 6); // random number from 0-5
                let newDice = {
                    id: state.userBetList[randNum].betId,
                    img: state.userBetList[randNum].img
                }
                newDiceList.push(newDice);
            }

            /**
             * CHECK USER BET WIN CONDITION
             */
            for (let i=0; i < newDiceList.length; i++){
                let index = newUserBetList.findIndex(bet=> bet.betId === newDiceList[i].id);
                if (index !== -1){
                    newStake = +newStake + +newUserBetList[index].amount;
                }
            }
            /**
             * CHECK USER BET RETURN previous stake
             */ 
            newUserBetList.map((bet,index) => {
                let i = newDiceList.findIndex(dice => dice.id === bet.betId);
                if (i !== -1){
                    newStake = +newStake + +bet.amount;
                }
            })
            // Reset user bet

            newUserBetList.map((bet,index)=>{
                bet.amount = 0
            })
            //console.log("new",newUserBetList)

            return {...state,diceList: newDiceList,userStake:newStake,userBetList:newUserBetList};
        }
        default: return { ...state }
    }
}

export default appReducer;