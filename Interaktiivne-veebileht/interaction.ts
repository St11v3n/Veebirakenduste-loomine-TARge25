const input2 = document.getElementById("userInput") as HTMLInputElement;
const button2 = document.getElementById("presentBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

button2.addEventListener("click", () => {
  const value = input2.value;
  output.textContent = `You typed: ${value}`;
});



const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const subBtn = document.getElementById("sub") as HTMLButtonElement;
const mulBtn = document.getElementById("mul") as HTMLButtonElement;
const divBtn = document.getElementById("div") as HTMLButtonElement;

const result = document.getElementById("result") as HTMLParagraphElement;

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



const input = document.getElementById("taskInput") as HTMLInputElement;
const button = document.getElementById("includeBtn") as HTMLButtonElement;
const list = document.getElementById("taskList") as HTMLUListElement;

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
});
