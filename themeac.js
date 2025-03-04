/////////////////////////////////
//      Theme Auto Changer     //
//    Caffeine CSS/FSLinear    //
//          Rev.1.0            //
//   Works by Y.Yokoha Studio  //  
/////////////////////////////////

//ご利用前に以下の注意点をご確認ください。
//1.bodyタグ下に
// <script src="./themeac.js"></script>
//が入力されていること
//
//2.外部CSSのリンクタグが
//  <link href="fslinear.css" rel="stylesheet" id="caffeinetheme"/>
//または
//  <link href="caffeine.css" rel="stylesheet" id="caffeinetheme"/>
//となっていること
//
//3.footerに以下のテキストが存在すること
// <p><small>このページでは<a href="https://github.com/yokonoha/FSLinear" id="interchangeablecssprofiles">FSLinear</a>を使用しています。</small></p>
//または
// <p><small>このページでは<a href="https://github.com/yokonoha/Caffeine_CSS" id="interchangeablecssprofiles">CaffeineCSS</a>を使用しています。</small></p>  


//入力できていれば、エラーなく動作します!
//ご不明な点等ございましたらお気軽にお問い合わせください!
//ご利用いただきありがとうございます!
//製作者 横茶横葉
//This script is licensed under Y.Yokoha A License.
//But no need to indicate when you are using CaffeineCSS or FSLinear.


const linkcss=document.getElementById("caffeinetheme");
const footertext=document.getElementById("interchangeablecssprofiles");

let timemgr=new Date;
let hour=timemgr.getHours();
console.log(`[ThemeAC] Deciding theme...Raw value time:${hour}`);
if(hour>=18)
{
linkcss.setAttribute("href","fslinear.css");
footertext.setAttribute("href","https://github.com/yokonoha/FSLinear");
footertext.innerText="FSLinear";
console.log(`[ThemeAC] The Dark Theme is now selected. 18:00~`);
}
else if (hour>0&&hour<6)
{
    linkcss.setAttribute("href","fslinear.css");
    footertext.setAttribute("href","https://github.com/yokonoha/FSLinear");
footertext.innerText="FSLinear";
    console.log(`[ThemeAC] The Dark Theme is now selected. 0:00~5:59`);
}
else
{
    linkcss.setAttribute("href","caffeine.css");
    footertext.setAttribute("href","https://github.com/yokonoha/Caffeine_CSS");
footertext.innerText="CaffeineCSS";
    console.log(`[ThemeAC] The Light Theme is now selected. 6:00~17:59`);
}