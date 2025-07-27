const clickerCounter = document.getElementById("clicker__counter");
const imgCookie = document.getElementById("cookie");
const speedElement = document.getElementById("clicker__speed");

let lastClickTime = null;

imgCookie.onclick = () => {
    const currentTime = new Date();

    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;

    imgCookie.width = 180;

    setTimeout(() => {
        imgCookie.width = 200;
    }, 100);

    if (lastClickTime) {
        const timeDiff = (currentTime - lastClickTime) / 1000;
        const clicksPerSecond = 1 / timeDiff;
        speedElement.textContent = clicksPerSecond.toFixed(2);
    }

    lastClickTime = currentTime;
}