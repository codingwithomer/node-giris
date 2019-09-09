var AccountManager = require("./AccountManager.js");

var accountOfOmer = AccountManager.createAccount(1,"Omer Bilal Can",1000);
var accountOfKerem = AccountManager.createAccount(2,"Hakan Kerem Can",1000);
var accountOfBilal = AccountManager.createAccount(3,"Bilal Elter",1000);

AccountManager.addToAccounts(accountOfBilal);
AccountManager.addToAccounts(accountOfKerem);
AccountManager.addToAccounts(accountOfOmer);

var accounts = AccountManager.getAccounts();

accounts.forEach(function(account){
    console.log(account.id + " " + account.userName + " " + account.balance + "\n");
});


console.log("===============================================\n");

var account = AccountManager.findAccountById(3)

console.log(account);

console.log("===============================================\n");

var newAcccountBalance = AccountManager.investMoneyToSelectedAccount(account,70000);
console.log(newAcccountBalance.id + " id'li " +  newAcccountBalance.userName + " kullanıcısının hesabında " + newAcccountBalance.balance + " bakiyesi var.\n"); 

console.log("===============================================\n");

var newAcccountBalance = AccountManager.drawingCashFromSelectedAccount(account,5000);
console.log(newAcccountBalance.id + " id'li " +  newAcccountBalance.userName + " kullanıcısının hesabında " + newAcccountBalance.balance + " bakiyesi kaldı."); 