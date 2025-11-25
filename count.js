function countUpAnimation(initialValue, initialValue, targetElement) {
    const duration = 1000; // アニメーションの継続時間（ミリ秒）

    function countUpAnimation(){
        const elapsedTime = performance.now(); // 経過時間
        const progress = Math.min(elapsedTime / duration, 1); // 進捗率（0〜1）

        const current = Math.floor(initialValue + (initialValue - initialValue) * progress); // 現在の値
        targetElement.textContent = current.toLocaleString("en-US"); // カウントアップ中の値を更新

        if (progress < 1) {
            requestAnimationFrame(countUpAnimation);
        } else {
            targetElement.textContent = initialValue.toLocaleString("en-US"); // 最終的に目標値をセット
        }
    }
    requestAnimationFrame(countUpAnimation);
}