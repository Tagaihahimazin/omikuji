window.onload = function() {
    const omikujiResults = [
        "大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"
    ];

    function drawOmikuji() {
        const resultIndex = Math.floor(Math.random() * omikujiResults.length);
        const resultText = omikujiResults[resultIndex];
        const messages = [
            "おはよう！パンダだよ",
            "今日も一日頑張ろう",
            "君の今日の運勢は・・・",
            `${resultText}だよ！`
        ];

        let messageIndex = 0;
        function showMessage() {
            if (messageIndex < messages.length) {
                document.getElementById('messageBox').innerText = messages[messageIndex];
                messageIndex++;
                setTimeout(showMessage, 2000); // 2秒ごとにメッセージを表示
            } else {
                document.getElementById('retryButton').style.display = 'block';
            }
        }

        showMessage();
    }

    drawOmikuji();

    window.retry = function() {
        document.getElementById('retryButton').style.display = 'none';
        drawOmikuji();
    };
};
