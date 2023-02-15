function sendAmount(e) {
    e.preventDefault();
    var uname, pwd, s1;
    uname = document.getElementById("inputBox");
    s1 = document.getElementById("s1");
    if (uname.value == "") {
        s1.innerHTML = "**Plz Enter UPI Pin**";
        uname.style.border = "1px solid red";
        return;
    } else if (uname.value !== "123") {
        s1.innerHTML = "**Incorrect UPI Pin**";
        return;
    } else {
        s1.innerHTML = "";
        uname.style.border = "none";
        window.location = "http://127.0.0.1:5501/paymentdone.html";
    }
}
