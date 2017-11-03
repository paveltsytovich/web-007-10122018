function DebitCard(nPIN) {

    var _PIN = nPIN;
    var _balance = 0;
    var _auth = false;
    this.auth = function (uPIN) {
        if (uPIN == _PIN) {
            _auth = true;
            console.log('Authentification succesful');
        }
        else  
        {
            console.log('Authentification Failed');
        }
    };
    
    this.putMoney = function (value) {
        if (_auth) {
        _balance += value;
        console.log('You put: ' + value);
        }
        else {
            console.log("You are not authorized. Please make auth");
        }
    };

    this.checkMoney = function () {
        if (_auth) {
            console.log('Your balance: ' + _balance);
        }
        else {
            console.log("You are not authorized. Please make auth");
        }
    }
    this.getMoney = function (value) {
        if ((_auth) && (_balance >= value)) {
            _balance -= value;
            console.log('You get: ' + value);
        }
        else if (_auth) {
            console.log("You have not enought money");
        }
        else {
            console.log("YYou are not authorized. Please make auth");
        }
    };

    
};
card = new DebitCard(5555);
card.checkMoney();
card.putMoney();
card.getMoney();
card.auth(4444);
card.auth(5555);
card.checkMoney();
card.getMoney(400);
card.putMoney(400);
card.checkMoney();
card.getMoney(500);
card.getMoney(300);
card.checkMoney();

