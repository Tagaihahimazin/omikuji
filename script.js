function drawOmikuji() {
    const omikujiResults = [
        "大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"
    ];
    const resultIndex = Math.floor(Math.random() * omikujiResults.length);
    const resultText = omikujiResults[resultIndex];

    document.getElementById('result').innerText = `結果: ${resultText}`;
}