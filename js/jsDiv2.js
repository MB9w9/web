const result = document.getElementById('result');

// ボタンをクリックされたときのイベント処理を登録
document.getElementById('btnJa').addEventListener('click', showMsg);
document.getElementById('btnEn').addEventListener('click', showMsg);

// 関数の定義（引数はイベントが発生したオブジェクト
function showMsg(e){
    // クリックされたときのボタンを識別
    if(e.target.id === 'btnJa'){
        result.textContent = 'こんにちは';
    }else if(e.target.id === 'btnEn'){
        result.textContent = 'Hello';
    }
}