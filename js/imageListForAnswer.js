// const images = document.querySelectorAll('.thumbs');

for(image of document.querySelectorAll('.thumbs')){
    image.addEventListener('click',(e)=>{
        document.querySelector('#resultImg').src=document.getElementById(e.target.id).src;
    });
}