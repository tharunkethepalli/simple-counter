let count = 1; // Start from 1
const minCount = 1;
const maxCount = 10;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Increase button
increaseBtn.addEventListener("click", () => {
    if(count < maxCount) {
        count++;
        countDisplay.textContent = count;
    }
});

// Decrease button
decreaseBtn.addEventListener("click", () => {
    if(count > minCount) {
        count--;
        countDisplay.textContent = count;
    }
});

// Reset button
resetBtn.addEventListener("click", () => {
    count = minCount;
    countDisplay.textContent = count;
});
