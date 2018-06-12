export const getRandomRates = (matchObject) => {
    let firstRandom = Math.random();
    let secondRandom = Math.random();
    matchObject.winner = null;
    if (!matchObject.firstCountryRate && !matchObject.secondCountryRate) {
        if (firstRandom <= 0.3) {
            if (firstRandom > 0.1) {
                matchObject.firstCountryRate = (firstRandom * 10).toFixed(1)
            } else {
                matchObject.firstCountryRate = (firstRandom * 100).toFixed(1);
            }
        } else {
            matchObject.firstCountryRate = ((firstRandom * 10)/ 2).toFixed(1);
        }
        if (secondRandom <= 0.3) {
            if (secondRandom > 0.1) {
                matchObject.secondCountryRate = (secondRandom * 10).toFixed(1)
            } else {
                matchObject.secondCountryRate = (secondRandom * 100).toFixed(1)
            }
        }
        else {
            matchObject.secondCountryRate = ((secondRandom * 10) / 2).toFixed(1);
        }
    }
    
};


export const updateTree = (treeData, winObj) => {
    treeData.forEach(dataArray => {
        dataArray.forEach(matchObj => {
            if (matchObj.nextMatchId === winObj.matchId || (matchObj.nextMatchId === 16 && winObj.matchId === 31)) {
                matchObj.secondCountry = winObj.winner;
                matchObj.secondCountryCode = winObj.secondCountryCode;
            } else if ((matchObj.nextMatchId - 1) === winObj.matchId) {
                matchObj.firstCountry = winObj.winner;
                matchObj.firstCountryCode = winObj.firstCountryCode;

            } 
        })
    })
}

