// Write your code here!
window.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById("main");
    main.remove();

    const element = document.createElement("div");
    document.body.append(element);
    const ul = document.createElement("ul");

    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        li.textContent = (i + 1).toString();
        ul.append(li);
    }

    element.append(ul)


    const newHeader = document.createElement("h1");
    newHeader.id = "victory";
    newHeader.textContent = "Jeremy is the champion";
    element.append(newHeader);
});