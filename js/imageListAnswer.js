// 拡大表示するimgタグの取得
const resultArea = document.querySelector('#resultImg');

// 4枚の画像(img)タグを配列に取り出す
const images = document.querySelectorAll('.thumbs');

// 配列内の画像を1つずつ取り出し、クリック時のイベント処理を登録
for(image of images){
    image.addEventListener('click',(e)=>{
        // 表示する画像のファイル名
        let imgFile = '';
        // クリックされた画像のid値によって表示する画像を区別する
        switch(e.target.id){
            case 'img1':
                imgFile='images/daikichi.png';
                break;
            case 'img2':
                imgFile='images/chukichi.png';
                break;
            case 'img3':
                imgFile='images/kichi.png';
                break;
            case 'img4':
                imgFile='images/kyo.png';
                break;
        }
        // 特定した画像の表示
        resultArea.src = imgFile;
        
        // アニメーションの設定(種類)
        const keyframe = {
            // ぼかし処理 filter: [開始,終了]
            filter: [ 'blur(20px)','blur(0)'],
            // 透明度
            //opacity: [0,1],
            // 拡大表示
            scale: [0,1],
            // 回転
            rotate: ['60deg',0],
        };
        // アニメーションの適用(種類、時間(ミリ秒))
        resultArea.animate(keyframe,2000);
        
    });
}