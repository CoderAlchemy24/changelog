
let myList1 = document.createElement("ul");
myList1.setAttribute('id', 'date');
let myList2 = document.createElement("ul");
myList2.setAttribute('id', 'log');

fetch('logs.json') // A json fájl neve vagy elérési útja
            .then(response => {
                if (!response.ok) {
                    throw new Error("Hiba a fájl betöltése közben");
                }
                return response.json(); // JSON formátumra alakítás
            })
            .then(data => {
                // JSON adatokat változóba mentjük
                adatok = data;
                const reversedItems = adatok.toReversed();
                console.log(reversedItems);

                reversedItems.forEach(data => {
                    const listItem1 = document.createElement('li');
                    listItem1.textContent = data.date;
                    myList1.appendChild(listItem1);
                    const listItem2 = document.createElement('li');
                    listItem2.textContent = data.log;
                    myList2.appendChild(listItem2);
                });
               })
            .catch(error => {
                console.error("Hiba történt:", error);
            });

            
 let mainE = document.getElementById("main");

  mainE.appendChild(myList1);

  mainE.appendChild(myList2);

 