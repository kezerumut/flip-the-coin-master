document.getElementById("coin").addEventListener("click", flipCoin);
document.getElementById("flipButton").addEventListener("click", flipCoin);
function flipCoin() {
  const coin = document.getElementById("coin");
  const resultText = document.getElementById("result");
  const coinshadow = document.querySelector(".coin-shadow");

  // Animasyonu başlat

  coinshadow.classList.add("flip");

  coin.classList.add("flip");

  const result = Math.random() < 0.5 ? "Head" : "Tail";

  setTimeout(() => {
    // Görseli değiştir
    if (result === "Head") {
      coin.src = "resources/heads.svg"; // yolunu doğru ayarla
    } else {
      coin.src = "resources/tails.svg";
    }

    // Yazıyı değiştir
    resultText.textContent = result;

    // Animasyonu sıfırla (tekrar tıklanabilir olsun)
    coin.classList.remove("flip");
    coinshadow.classList.remove("flip");
  }, 1000);
}
