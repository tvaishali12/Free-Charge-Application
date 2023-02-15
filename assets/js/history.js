
const inputValue = localStorage.getItem("allEntries");
const allEntries = JSON.parse(inputValue);

let content = "";

allEntries.forEach(function (entry) {
    content += `Paid to - ${entry.Paidto}    &nbsp  &nbsp &nbsp    Amount - ${entry.Amount}<br>`;
});

document.getElementById("recordedAmount").innerHTML = content;
console.log(allEntries);
