let goal = 25;
let entries = [];

const defaultGoal = document.querySelector('#target').innerText = goal;

const entriesWrapper = document.querySelector("#entries");

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);

    const listItem = document.createElement("li");

    const listValue = document.createTextNode(newEntry);

    listItem.appendChild(listValue);
    entriesWrapper.appendChild(listItem);
}

const reducer = (total, currentValue) => total + currentValue;

function calTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerHTML = totalValue;
    document.getElementById("progressTotal").innerHTML = totalValue;
}

function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completePercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle');
    if (completePercent > 100) completePercent === 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completePercent}%, #2d3740 ${completePercent}%) 100%`;
}

function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;
}

function calAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

function handleSubmit(event) {
    event.preventDefault();

    const entry = Number(document.querySelector("#entry").value);
    if (!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    calTotal();
    calAverage();
    weeklyHigh();
    calcGoal();
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);
function handleSubmmit(event) {
    event.preventDefault();

    const entry = Number(document.querySelector("#entry").value);
    console.log(entry);
}

const form = document.querySelector('form').addEventListener('submit', handleSubmmit);
