// UI 
const expand = document.getElementById("expand");
const setting = document.querySelector('.setting');


expand.addEventListener('click',function(){
    // console.log("I'm expand");

    setting.classList.toggle('showslides');
});