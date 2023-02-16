
const inputValue = localStorage.getItem("allEntries");
const allEntries = JSON.parse(inputValue);

let content = "";

allEntries.forEach(function (entry) {
    content = `Paid to - ${entry.Paidto},<br> Amount - ${entry.Amount}<br> Transaction-Id - ${entry.Transactionid}`;
    // content = "";
});

document.getElementById("recordedAmount").innerHTML = content;
console.log(allEntries);
