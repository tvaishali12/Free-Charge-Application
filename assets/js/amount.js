
document.getElementById("input").addEventListener("keyup", updateInput);
function updateInput(e) {
    localStorage.setItem("Amount", e.target.value);
}

document.getElementById("send").addEventListener("click", addmsg);
function addmsg() {
    const input = document.getElementById("input").value;
    const chat = document.getElementById("chat");
    const msgdiv = document.createElement("div");
    msgdiv.className = "msgdiv";
    msgdiv.innerText = input;
    chat.appendChild(msgdiv);
    document.getElementById("input").value = "";
}

const mykeyValue = window.location.search;
const urlParams = new URLSearchParams(mykeyValue);

const param1 = urlParams.get("contactname");
const param2 = urlParams.get("contactnumber");

const param3 = urlParams.get("letters");



const targets = document.getElementById("select");
const targets1 = document.getElementById("selects");
const targets3 = document.getElementById("transcid");



targets.innerText = param1;
targets1.innerText = param2;
targets3.innerText = param3

document.getElementById("btn").addEventListener("click", function () {
    let bankBalance = parseInt(localStorage.getItem("Bankbalance")) || 5000;

    const inputElem = document.getElementById("input");
    const givenInput = parseInt(inputElem.value);
    localStorage.setItem("Amount", givenInput);


    const remainBalance = bankBalance - givenInput;
    localStorage.setItem("Bankbalance2", remainBalance);
    localStorage.setItem("Bankbalance", remainBalance);

    var existingentries =
        JSON.parse(localStorage.getItem("allEntries")) || [];

    const myObject = {
        Paidto: targets.innerText,
        Amount: inputElem.value,
        Transactionid: targets3.innerText
    };

    localStorage.setItem("myObject", JSON.stringify(myObject));
    existingentries.push(myObject);
    localStorage.setItem("allEntries", JSON.stringify(existingentries));
});
