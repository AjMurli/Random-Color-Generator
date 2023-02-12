const getColor = () => {
    // Hex Code
    //Math.floor it convert decimal to integer like 13.2332323  so ans is 13
    const randomNumber = Math.floor(Math.random() * 1777215);
    const randomCode = "#" + randomNumber.toString(16);
    var originalColor = document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = originalColor;

    // copy to clipboard
    // navigator.clipboard.writeText(randomCode);

    // console.log(randomNumber, randomCode);
}
document.getElementById("btn").addEventListener("click", getColor);

// copy to clipboard
const copied = () => {
    const randomNumber = Math.floor(Math.random() * 1777215);
    const randomCode = "#" + randomNumber.toString(16);
    navigator.clipboard.writeText(randomCode);
    document.getElementById("Copied").innerHTML = `
        <p>😊Color Copied😊</p> `;
    setTimeout(() => {
        document.getElementById("Copied").innerHTML = " ";
    }, 2000);
}
document.getElementById("btn1").addEventListener("click", copied);