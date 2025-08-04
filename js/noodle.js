// タイマーの識別番号を保存（初期値：-1（停止））
let timerId = -1;

// ボタンにクリック時のイベント処理を登録
document.getElementById('btn').addEventListener('click', ()=>{
    // クリック時、停止状態ならタイマーを実行
    

    if(timerId === -1){
        timerId = window.setInterval(()=>{        
            for(let mm = 10; mm > 0; mm--){    
                document.getElementById('timer').textContent = `残り：${mm}秒`;
             }
        }, 1000);   //1秒ごとに実行
    }


    // -------------------------

    if(timerId === -1){
        
        timerId = window.setTimeout(()=>{
            
        
        clearInterval();    //1秒ごとの処理の停止
        clearTimeout();    //10秒間計測の停止
        }
        , 10000);  //10秒後に停止する

    }

    
