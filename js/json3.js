const jsonData = [
    {
        "name" : "大阪太郎",
        "age" : 30
    },
    {
        "name" : "梅田花子",
        "age" : 25
    },
    {
        "name" : "難波次郎",
        "age" : 40
    }
];
// JSONデータ（配列）からデータを1個ずつ取り出し、liタグを作成後、ulタグに追加
jsonData.forEach(data =>{
    const liTag = document.createElement('li');
    liTag.textContent = `氏名：${data.name}(${data.age}歳)`;
    document.getElementById('ul').appendChild(liTag);
})