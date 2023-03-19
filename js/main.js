const dice = document.getElementById("dice");
const adviceID = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

function getAdvice() {
  fetch('https://api.adviceslip.com/advice?t=' + Math.random())
  .then(response => {
    return response.json();
  })
  .then(data => {
    const adviceSlip = data.slip;
    adviceID.innerText = adviceSlip.id;
    adviceText.innerText = `"${adviceSlip.advice}"`;
  })
  .catch(error => {
    console.log(error);
  });
}

window.onload = () => {
  getAdvice();

  dice.onclick = () => {
    getAdvice();
  }
}