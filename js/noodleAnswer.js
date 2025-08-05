// 画像用imgタグの取得
const img = document.getElementById('img');
// 経過時間を表示するpタグの取得
const time = document.getElementById('time');
// タイマー時間
const timerTime = 180 ; // テスト用で10秒
let remain; // 残り時間を格納する変数
let timerId = -1; // タイマーの状態を格納する変数
// ボタンにイベント処理を登録する
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    // タイマーが実行中かどうかのチェック
    if(timerId === -1){
        init(); // 初期化処理用関数の実行
        // 1秒毎にアロー関数を実行
        timerId=window.setInterval(()=>{
            time.textContent=`残り : ${remain}秒`;
            if(remain===0){ // 終了時間になったら 
                clearInterval(timerId); // タイマーの終了
                time.textContent='完成しました!!'; // 終了時のメッセージを表示
                img.src = 'images/cup_noodle.png';
                timerId = -1; // タイマーを未実行状態に戻す
            }
            remain--;
        },1000);
        img.src='images/food_cup_noodle_close.png'
    }
});
// 開始時の初期化処理を行う関数の定義
const init = () => {
    remain = timerTime; // 残り時間の設定
    time.textContent=''; // 表示されていたメッセージのクリア
    img.src = '';
}
