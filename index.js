function calculate() {
    var wallet = eval(document.querySelector(".wallet").value);
    var margin = eval(document.querySelector(".margin").value);
    var acceptableLoss = eval(document.querySelector(".acceptable-loss").value);
    var entry = eval(document.querySelector(".entry").value);
    var stopLoss = eval(document.querySelector(".stop-loss").value);
    var takeProfit = eval(document.querySelector(".take-profit").value);
    var gdc;


    if (stopLoss < takeProfit) {
        var ratio1 = (entry - stopLoss);
        var ratio2 = (takeProfit - entry);
        for (let i = 1; i <= ratio1 && i <= ratio2; i++) {
            if (ratio1 % i == 0 && ratio2 % i == 0) {
                gdc = i;
            }
        }
        ratio1 = (ratio1/gdc).toFixed(2);
        ratio2 = (ratio2/gdc).toFixed(2);


        document.querySelector(".ratio").innerHTML = "R/R ratio : " + ratio1 + " : " + ratio2 ;
    }
    else if (stopLoss > takeProfit) {
        var ratio1 = (stopLoss - entry);
        var ratio2 = (entry - takeProfit);
        for (let i = 1; i <= ratio1 && i <= ratio2; i++) {
            if (ratio1 % i == 0 && ratio2 % i == 0) {
                gdc = i;
            }
        }
        ratio1 = (ratio1/gdc).toFixed(2);
        ratio2 = (ratio2/gdc).toFixed(2);

        document.querySelector(".ratio").innerHTML = "R/R ratio : " + ratio1 + " : " + ratio2 ;
    }

    var gap = (((stopLoss - entry)/entry)*100);
    var marginGap = ((gap * margin)/100);
    var pwallet = (acceptableLoss / marginGap).toFixed(2);
    var walletSize = (wallet*(pwallet/100)).toFixed(2);

        if (pwallet && walletSize < 0) {
        pwallet = -(pwallet);
        walletSize = -(walletSize);

        pwallet = pwallet.toFixed(2);
        walletSize = walletSize.toFixed(2);


        document.querySelector(".ppwallet").innerHTML = "% of wallet: " + pwallet + "% (" + walletSize + " u)" ;
    }
    else {
    document.querySelector(".ppwallet").innerHTML = "% of wallet: " + pwallet + "% (" + walletSize + " u)" ;

    }
}




