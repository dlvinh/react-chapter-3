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
    userStake: 100,
    diceList: [
        { id: "nai", img: "./img/nai.png" },
        { id: "cua", img: "./img/cua.png" },
        { id: "tom", img: "./img/tom.png" },
    ]

}

const appReducer = (state = appState, action) => {
    switch (action) {
        default: return { ...state }
    }
}

export default appReducer;