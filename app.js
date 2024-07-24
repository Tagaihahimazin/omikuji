window.onload = function() {
    const omikujiResults = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];

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
                setTimeout(showMessage, 2000);
            } else {
                document.getElementById('retryButton').style.display = 'block';
            }
        }

        showMessage();
    }

    window.start = function() {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.volume = 0.01; // 音量を50%に設定
        backgroundMusic.play().then(() => {
            document.getElementById('curtain').classList.add('curtain-up');
            setTimeout(() => {
                document.getElementById('curtain').style.display = 'none';
                document.getElementById('messageBox').style.display = 'block';
                document.querySelector('.button-container').style.display = 'flex';
                drawOmikuji();
            }, 2000);
        }).catch(error => {
            console.error("音楽の再生に失敗しました:", error);
        });
    };

    window.retry = function() {
        document.getElementById('retryButton').style.display = 'none';
        drawOmikuji();
    };
};
