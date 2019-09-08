var yas = 17;
var message = '';
// if(Sart){
//     //sart saglanirsa calisacak blok
// }
// else{
//     //saglanmazsa calisacak blok
// }

//Burada karsilastirma operatorlerini kullaniyoruz.
// '<' '>' '<=' '>='  '==' '===' '!='
if(yas > 18 ){
    message = "Giriş için yetkiniz vardır.";
}
else if(yas < 18){
    message = "Giriş için çok küçüksünüz.";
}
else{
    message = "Giriş için tam sınır yaşınızdasınız.";
}

console.log(message);