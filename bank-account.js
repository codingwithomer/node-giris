var account = {
    balance : 0
};

function para_yatir(account,miktar){
    account.balance += miktar;
}

function para_cek(account,miktar){
    account.balance -= miktar;
}

function account_summary(account){
    return account.balance;
}

console.log('Hesap ozeti : ', account_summary(account));
para_yatir(account, 1000);
para_yatir(account, 20);
para_cek(account, 400);
console.log('İşlem sonrası hesap ozeti : ', account_summary(account)); 