"use strict";
const input2 = document.getElementById("userInput");
const button2 = document.getElementById("presentBtn");
const output = document.getElementById("output");
button2.addEventListener("click", () => {
    const value = input2.value;
    output.textContent = `You typed: ${value}`;
});
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const mulBtn = document.getElementById("mul");
const divBtn = document.getElementById("div");
const result = document.getElementById("result");
function getValues() {
    return {
        a: Number(num1.value),
        b: Number(num2.value),
    };
}
addBtn.addEventListener("click", () => {
    const { a, b } = getValues();
    result.textContent = `Result: ${a + b}`;
});
subBtn.addEventListener("click", () => {
    const { a, b } = getValues();
    result.textContent = `Result: ${a - b}`;
});
mulBtn.addEventListener("click", () => {
    const { a, b } = getValues();
    result.textContent = `Result: ${a * b}`;
});
divBtn.addEventListener("click", () => {
    const { a, b } = getValues();
    if (b === 0) {
        result.textContent = "Cannot divide by 0";
        return;
    }
    result.textContent = `Result: ${a / b}`;
});
const input = document.getElementById("taskInput");
const button = document.getElementById("includeBtn");
const list = document.getElementById("taskList");
button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text)
        return;
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => {
        li.remove();
    });
    list.appendChild(li);
    input.value = "";
});
