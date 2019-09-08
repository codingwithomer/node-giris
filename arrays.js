// Diziler

var personelListesi = [
  {
    firstName: "Ömer Bilal",
    lastName: "Can",
    jobPosition: "Software Engineer"
  },
  {
    firstName: "Hakan Kerem",
    lastName: "Can",
    jobPosition: "Marketing & Management"
  },
  { firstName: "Bilal", 
    lastName: "Can", 
    jobPosition: "He is on our heart. <3" 
  }
];

// for (var i = 0; i < personelListesi.length; i++) {
//   console.log(
//     (i + 1).toString() +
//       "-) " +
//       personelListesi[i].firstName +
//       " " +
//       personelListesi[i].lastName +
//       ". " +
//       personelListesi[i].jobPosition
//   );
// }
//veya

personelListesi.forEach(function(element,index){
    console.log(
            (index + 1).toString() +
              "-) " +
              element.firstName +
              " " +
              element.lastName +
              ". " +
              element.jobPosition
          );
});

personelListesi.push(
    { 
        firstName: "Elif Melike", 
        lastName: "Can", 
        jobPosition: "Doctor" 
    }
);

console.log("Yeni obje eklendikten sonra personel listesi");

personelListesi.forEach(function(element,index){
    console.log(
            (index + 1).toString() +
              "-) " +
              element.firstName +
              " " +
              element.lastName +
              ". " +
              element.jobPosition
          );
});


//Array'in belirli bir indisine ulaşma

console.log(personelListesi[1]);

//Array'ın son elemanına erişmek
console.log("Son objenin ad property'si : " + personelListesi[personelListesi.length-1].firstName);