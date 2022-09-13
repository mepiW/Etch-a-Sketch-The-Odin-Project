const container = document.querySelector(".container");
const colorInput = document.getElementById("colorInput");
const clearScreenBtn = document.getElementById("cls");

let canvasSize = 16;
let color = colorInput.value;

window.onload = createDivs();
window.onload = createGrid();

colorInput.addEventListener("change", () =>
    color = colorInput.value
);

function createDivs() {
    for (let i = 0; i < Math.pow(canvasSize, 2); i++) {
        const div = document.createElement("div");
        div.addEventListener("mouseover", () =>
            div.style.backgroundColor = color
        );
        div.classList.add("divGridItem");
        container.appendChild(div);
    }
}

function createGrid() {
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${canvasSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${canvasSize}, 1fr)`;
}

clearScreenBtn.onclick = function clearScreen() {
    for (let j = 0; j < Math.pow(canvasSize, 2); j++) {
        const allDivs = container.querySelectorAll("div");
        allDivs[j].style.backgroundColor = "white";
    }
}