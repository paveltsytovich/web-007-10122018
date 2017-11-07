function DebitCard(nPIN) {

    const OK = 0;
    const NOTAUTH = -1;
    const NOTMONEY = -2;

    var _PIN = nPIN;
    var _balance = 0;
    var _auth = false;
    this.status = OK;

    //var obj = this;

    this.auth = function (uPIN) {
        if (uPIN == _PIN) {
            _auth = true;
            this.status = OK;
        }
        else  
        {
            this.status = NOTAUTH;
        }
        return this.status
    };
    
    this.putMoney = function (value) { 
        if (_auth) {
        _balance += value;
        this.status = OK;
        }
        else {
            _status = NOTAUTH;
        }
        return this.status
    };

    this.checkMoney = function () {
        if (_auth) {
            this.status = _balance;
        }
        else {
            this.status = NOTAUTH;
        }
        return this.status
    }
    this.getMoney = function (value) {
        if ((_auth) && (_balance >= value)) {
            _balance -= value;
            this.status = OK;
        }
        else if (_auth) {
            this.status = NOTAUTH;
        }
        else {
            this.status = NOTMONEY;
        }
        return this.status;
    };

    
};

function Premium(nPIN) {
    var _percent = 0.1;
    DebitCard.call(this,nPIN);
    var _pGetMoney = this.getMoney;
    this.getMoney = function(amount) {
        _pGetMoney.call(this,amount);
        this.putMoney(amount*_percent);
        return this.status
    }
};
card = new Premium(5555);
card2 = new DebitCard(4444);
console.log(card.checkMoney()); 
console.log(card.auth(5555));
console.log(card.putMoney(1000));
console.log(card.checkMoney());
console.log(card.getMoney(500));
console.log(card.checkMoney());


