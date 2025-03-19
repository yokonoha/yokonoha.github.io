        function admindiv()
            {
            document.getElementById("hd").style.display="block";
            }
                function admin() 
         {
            var query = document.getElementById('searchQuery').value;
            if (query) {
                    if(query=="capps")
                    {
                var url = "https://yokonoha.github.io/" + encodeURIComponent(query);

                window.location.href = url;
                    }
                    else
                    {
                            let ur1="pages.dev"
var url = "https://caffeineapps" + ur1;
window.location.href = url;
                    }
            } else {
               alert("管理者パスワードを入力してください。");
            }
        }
//20250309 に追加(補助スクリプト)
const baseurl="https://yokonoha.github.io/";
const obfuscated="biography";
const aimai="works";
const u1=baseurl+obfuscated;
const u2=baseurl+aimai;
document.getElementById("twbtn").addEventListener("click",()=>
    {
        window.open("https://x.com/yokocha_yokoha","_blank");
    });
    document.getElementById("biobtn").addEventListener("click",()=>
    {
        
         window.open(u1,"_blank");
    });
    document.getElementById("gtbtn").addEventListener("click",()=>
    {
        window.open("https://github.com/yokonoha/","_blank");
    });
    document.getElementById("wkbtn").addEventListener("click",()=>
    {
        
        window.open(u2,"_blank");
    });
