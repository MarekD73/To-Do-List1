// const Task = require('./task.js');
const prompt = require('prompt-sync')();

// add_task() - Pridat úlohy do seznamu.
// list_task() - Zobrazit vsechny úlohy.
// mark_task_done() - Oznacit úlohy jako dokoncené.
// remove_task() - Odstranit úlohy ze seznamu.
//               Ulozit seznam úloh do do souboru a pri starte aplikacií nacist uložené úlohy.


class ToDoList {
    constructor() {
        this.task = [];
        this.id = 0;
    }
    addTask(little, description) {
        const task = new Task(little.id++, title, description);
        this.task.push(task);
        console.log(`Úloha a ID: ${task.id} pridat. `);
    }

    addTask(litle, description) {
        const task = new Task(this.id++, litle, description);
        this.tasks.push(task);
        console.log(`Úloha a ID ${task.id} pridana. `);
    }

    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (idex !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Úloha s ID ${id} odstranena. `);
        } else {
            console.log(`Úloha s ID ${id} neexistuje. `);
        }
    }

    listTasks() {
        this.tasks.forEach((task) => {

        })
    }

    markTaskDone(task) {
        this.is_comleted = true;
    }



}
console.log(`Ahoj, vítejte v seznamu úkolů 1!`)
function menu() {
    console.log(`HLAVNÍ NABÍDKA`);
    console.log(`1. Přidat úkoly\n2. Zobrazit všechny úkoly\n3. Změna stavu úkolů\n4. Odstraňte úkoly\n5. Výstup`);

    let menuOption = parseInt(prompt(`Vyberte možnost: `));
    while (isNaN(menuOption) || menuOption < 1 || menuOption > 5) {
        menuOption = parseInt(prompt(`Vyberte možnost (1 - 5): `));
    }
    if (menuOption === 1) {
        console.log();
        addTasks();
        return true;
    } else if (menuOption === 2) {
        console.log();
        viewTasks();
        return true;
    } else if (menuOption === 3) {
        console.log();
        statusTasks();
        return true;
    } else if (menuOption === 4) {
        console.log();
        removeTasks();
        return true;
    } else {
        return false;
    }
}
function addTasks() {
    console.log(`PŘIDAT ÚKOLY`);
    let task = [];
    task[0] = prompt(`Zadejte nový úkol: `);
    task[1] = "dělat";
    tasks.push(task);
    console.log();
}
function viewTasks() {
    console.log(`ZOBRAZIT ÚKOLY`);
    if (tasks.length === 0) {
        console.log(`Zatím žádné úkoly k zobrazení`);
    } else {
        let index = 1;
        for (let task of tasks) {
            console.log(`${index}) ${task[0]} - Status: ${task[1]}`);
            index++;
        }
        console.log();
    }
}
function statusTasks() {
    console.log(`ZMĚNIT STAV ÚKOLŮ`);
    if (tasks.length === 0) {
        console.log(`Zatím žádné úkoly k zobrazení`);
    } else {
        let index = 0;
        for (let task of tasks) {
            console.log(`${index + 1}) ${task[0]} - Status: ${task[1]}`);
            index++;
        }
        let changeTask = parseInt(prompt(`Vyberte úkol, jehož stav chcete změnit: `));
        while (isNaN(changeTask) || changeTask < 1 || changeTask > index) {
            changeTask = parseInt(prompt(`Vyberte úkol, jehož stav chcete změnit (1 - ${index}): `));
        }
        tasks[changeTask - 1][1] = prompt(`Zadejte nový stav: `);
        console.log();
    }
}
function removeTasks() {
    console.log(`ODSTRANIT ÚKOLY`);
    if (tasks.length === 0) {
        console.log(`Zatím žádné úkoly k zobrazení`);
    } else {
        let index = 0;
        for (let task of tasks) {
            console.log(`${index + 1}) ${task[0]} - Status: ${task[1]}`);
            index++;
        }
        let removeTask = parseInt(prompt(`Vyberte úkol, který chcete odstranit: `));
        while (isNaN(removeTask) || removeTask < 1 || removeTask > index) {
            removeTask = parseInt(prompt(`Vyberte úkol, který chcete odstranit (1 - ${index}): `));
        }
        tasks.splice(removeTask - 1, 1);
    }
    console.log();
}
// Application
let tasks = [];
let appRun = true;
while (appRun) {
    appRun = menu();
}