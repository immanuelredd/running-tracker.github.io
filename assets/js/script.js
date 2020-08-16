function handleSubmmit(event) {
    event.preventDefault();

    const entry = Number(document.querySelector("#entry").value);
    console.log(entry);
}

const form = document.querySelector('form').addEventListener('submit', handleSubmmit);