
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
 /* let svgCircle = document.createElement("circle");
 svgCircle.setAttribute('id', 'circle1');
 svgCircle.setAttribute('cx', '100');
 svgCircle.setAttribute('cy', '100');
 svgCircle.setAttribute('r', '40');
 svgCircle.setAttribute('fill', "red");
 
 let svgImg = document.createElement("svg");
 svgImg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
 svgImg.setAttribute('id', 'minisvg');
  svgImg.setAttribute('width', '100');
 svgImg.setAttribute('height', '100'); 
 

 svgImg.appendChild(svgCircle); */
  mainE.appendChild(myList1);
 /* mainE.appendChild(svgImg);  */
  mainE.appendChild(myList2);



 