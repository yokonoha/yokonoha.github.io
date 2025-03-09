        function admindiv()
            {
            document.getElementById("hd").style.display="block";
            }
                function admin() 
         {
            var query = document.getElementById('searchQuery').value;
            if (query) {
                var url = "https://yokonoha.github.io/" + encodeURIComponent(query);

                window.location.href = url;

            } else {
               alert("管理者パスワードを入力してください。");
            }
        }
//20250309 に追加(補助スクリプト)
document.getElementById("twbtn").addEventListener("click",()=>
    {
        window.open("https://x.com/yokocha_yokoha","_blank");
    });
    document.getElementById("biobtn").addEventListener("click",()=>
    {
        
         window.open("https://yokonoha.github.io/biography","_blank");
    });
    document.getElementById("gtbtn").addEventListener("click",()=>
    {
        window.open("https://github.com/yokonoha/","_blank");
    });
    document.getElementById("wkbtn").addEventListener("click",()=>
    {
        alert("Coming Soon!");
       // window.open("https://yokonoha.github.io/works","_blank");
    });
