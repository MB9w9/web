// 開始したタイマーの識別番号を保存（「-1」はまだ実行していない状態）
let timerId = -1;

// 開始ボタンにクリック時のイベント処理を登録
document.getElementById('btnStart').addEventListener('click', ()=>{
    // タイマーを既に実行しているかチェック
    if(timerId === -1){
        // まだタイマーを実行していないので、実行するように設定
        timerId = window.setInterval(()=>{
            const now = new Date();
            const hh = make2Num(now.getHours());    //時の取得（2桁に加工）
            const mm = make2Num(now.getMinutes());  //分の取得（2桁に加工）
            const ss = make2Num(now.getSeconds());  //秒の取得（2桁に加工）
            // Webページに現在の時刻を表示
            document.getElementById('clock').textContent = `${hh}時${mm}分${ss}秒`;
        },1000);    //関数は1秒（1000ミリ秒）毎に実行
    }
})

// 停止ボタンにクリック時のイベント処理を登録
document.getElementById('btnStop').addEventListener('click', ()=>{
    // 現在タイマーが実行されているかどうかのチェック
    if(timerId !== -1){
        // 実行中のタイマーを停止する
        clearInterval(timerId);
        // タイマーを停止したので停止状態を示す「-1」に戻す
        timerId = -1;
        // リセットした結果をWebページ上に表示する
        document.getElementById('clock').textContent = '--時--分--秒';
    }
})

// 時間を2桁に加工する関数の定義
function make2Num(value){
    // 受け取った値の先頭に「0」をつけ、末尾2文字を返す
    return ('0' + value).slice(-2);
}