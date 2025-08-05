// JSONファイルのURL
const url = 'http://127.0.0.1:5500/userInfo.json';

// ボタンをクリックしたときのイベント処理を登録
document.getElementById('btnShow').addEventListener('click', ()=>{
    // 非同期通信で実行する関数の定義
    async function getJson(){
        // fetch()を利用してwebサーバに接続し、データをダウンロード
        const res = await fetch(url);
        // データの受信が完了したら、JSONデータに変換
        const json = await res.json();
        // JSONデータを利用して、tdタグを作成
        let userList = '';
        // JSON配列から1つずつデータを取り出し処理
        json.forEach(data =>{
            userList += `<tr><td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.dept}</td></tr>`;
        });
        document.getElementById('table-body').innerHTML = userList;
    }

    getJson();

});