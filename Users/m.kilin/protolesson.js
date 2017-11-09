var myCard = {
    owner: "Test",
    amount: 100
};

var premiumCard = {
    percent: 10
};
premiumCard.__proto__ = myCard;
premiumCard.owner = "Traveler";
console.log(premiumCard.owner);
console.log(myCard.owner);

function Card(pin,amount,owner) {
    var _pin = pin;
    this.owner = owner;
    this.amount = amount;
    var _auth = false;
    this.autorize = function(pin) {
      if (_pin == pin) {
          _auth = true;
          return true;
      }
      else return false;
    };
    Object.defineProperty(this,"auth", {get: function (){return _auth;}});
}

Card.prototype.getMoney = function (value) {
    if ((this.auth)&&(this.amount>=value)) {
        this.amount = this.amount - value;
        return true;
    }
    else return false;
    }

Card.prototype.getBalance = function () {
    if (this.auth) {
        return this.amount;
    }
    else return false;
}
Card.prototype.putMoney = function (value) {
    if (this.auth) {
        this.amount = this.amount + value;
        return true;
    }
    else return false;
}

/*function PremiumCard(pin,amount,owner,percent) {
     this.superc
    
}*/
var card = new Card(1111,1000,"Massi");
//Object.defineProperty(card,"Auth",{enumerable : false, writable : true});
//console.log(card.autorize(1111));
console.log(card.autorize(1011));
console.log(card.getBalance());
console.log(card.putMoney(1000));
console.log(card.getMoney(500));
//console.log(card.autorize(1111));
card.auth = true;
console.log(card.getMoney(400));
console.log(card.getMoney(100));
console.log(card.autorize(1111));
console.log(card.putMoney(1000));
console.log(card.getMoney(500));
console.log(card.getBalance());
//console.log(card.auth);




