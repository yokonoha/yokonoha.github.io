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