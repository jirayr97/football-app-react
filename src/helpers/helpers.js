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
            matchObject.firstCountryRate = ((firstRandom * 10) / 2).toFixed(1);
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

export const randomWinner = (currentGame, balance, betValue, selectedCountry) => {
    currentGame.winner = Math.random() > 0.5 ? currentGame.firstCountry : currentGame.secondCountry;
    if (currentGame.winner === selectedCountry && selectedCountry === currentGame.firstCountry) {
        balance += betValue * currentGame.firstCountryRate;
    } else if (currentGame.winner === selectedCountry && selectedCountry === currentGame.secondCountry) {
        balance += betValue * currentGame.secondCountryRate;
    } else if (currentGame.winner !== selectedCountry) {
        balance -= betValue;
    }
    balance = Math.round(balance);
    return balance;
}

export const getWarnings = (selectedCountry, balance, betValue) => {
    if (!selectedCountry) {
        return "Country not selected";
    } else if (!balance) {
        return "Your balance is empty";
    } else if (balance <= betValue || !betValue || betValue <= 0) {
        return "Please input valid value ";
    }
}