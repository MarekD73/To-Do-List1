import  fs from 'fs';


let toDo = ["Přidat úlohy", "Zobrazit úlohy", "Upravit úlohy", "Odstranit úlohy", "Ukončit úlohy"]

// toDo.forEach(function (activity, index) {
//     let number = index + 1;
//     console.log(`${number} ${activity}`);
// })
const writeFilePath = "";
for (let i = 0; i < toDo.length; i++) {
    console.log(`${i+1}: ${toDo[i]}`)
}
let myArray = []
for (let j = 0; j <= 5; j++) {
    myArray.push(j)
}
for (let k = 0; k <= 5; k++) {
    console.log(myArray[k])
}


// const writeToFilePath = "output.txt"
//
// function writeToFile(filePath, data) {
//     let formattedData = JSON.stringify(data);
//
//     fs.writeFile(filePath, formattedData, "utf8", (err) => {
//         if (err) {
//             console.error("Chyba pri zapisovani do souboru:", err);
//             return;
//         }
//         console.log(`Úspesné zapsané do souboru: ${filePath} `);
//     })
// }
// // writeToFile("outpul1.txt", JSON.stringify(generateData()));    //(JSON.stringify(generateData())); = "Ahoj Marek");
// // writeToFile("outpul1.txt", generateData());
// // console.log(generateData);