// 表示欄を取得
const output = document.getElementById('output');

// 画像を取得し、イベント処理を登録
document.getElementById('daikichi').addEventListener('click', outputImg);
document.getElementById('chukichi').addEventListener('click', outputImg);
document.getElementById('kichi').addEventListener('click', outputImg);
document.getElementById('kyo').addEventListener('click', outputImg);

// 押された画像を拡大表示するイベント処理
function outputImg(e){
    if(e.target.id === 'daikichi'){
        output.src = 'images/daikichi.png';
    }else if(e.target.id === 'chukichi'){
        output.src = 'images/chukichi.png';
    }else if(e.target.id === 'kichi'){
        output.src = 'images/kichi.png';
    }else{
        output.src = 'images/kyo.png';
    }
}