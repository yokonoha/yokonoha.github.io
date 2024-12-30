////////////////////////////////////////
////  バナー画像をランダム選択        ////
//// Mini Script for Random Banner ////  
////　©2024 Y.Yokoha               ////
//////////////////////////////////////

const bannerholder=document.getElementById("banner");
const randomnum=Math.floor(Math.random()*6)+1;
bannerholder.src="banner ("+randomnum+").png";

//おまけ interactive function
bannerholder.addEventListener("click",()=>
    {
        const randomnum=Math.floor(Math.random()*6)+1;
        bannerholder.src="banner ("+randomnum+").png";
    });