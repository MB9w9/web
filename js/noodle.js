let count = 10; //初期値10秒

// カウント欄を取得
const counter = document.getElementById('counter');
// ボタンを取得
const btn = document.getElementById('btn');
// 画像欄を取得
const img = document.getElementById('img');

// ボタンが押されたときのイベント処理を登録
btn.addEventListener('click', ()=>{
    const countdown = setInterval(()=>{
        if(count > 0){
            count--;    //残りの秒数をデクリメント
            counter.textContent = `残り：${count}秒`;
        }else{
            clearInterval() // 停止
            img.src = 'Childcare-cute-2504_14-90.webp';
        }
    }, 1000);    // 1秒ごとに実行

    

})
