//Module Design Pattern
var AccountManager = (function(){
    var accounts = [];

    //My Account Model
    function Account(id,userName,balance){

        this.id = id;
        this.userName = userName;
        this.balance = balance;

        return this;
    }

    //My create operation
    this.createAccount = function(id,userName,balance){
        return new Account(id,userName,balance);
    };

    //Add to my accounts 
    this.addToAccounts = function(account){
        accounts.push(account);
        return accounts;
    };

    //Get account by user name
    this.findAccountById = function(id){
        var matchedAccount = new Object();

        accounts.forEach(function(account){
            if(account.id === id)
                matchedAccount = account;
        });

        return matchedAccount;
    };

    this.getAccounts = function(){
        return accounts.sort((account)=> {
            return account.id;
        });
    }

    this.investMoneyToSelectedAccount = function(account,balance){
        account.balance += balance;
        return account;
    }

    this.drawingCashFromSelectedAccount = function(account,balance){
        account.balance -= balance;
        return account;
    }

    return this;
})();

module.exports = AccountManager;