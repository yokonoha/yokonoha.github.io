        function admindiv()
            {
            document.getElementById("hd").style.display="block";
            }
                function admin() 
         {
            var query = document.getElementById('searchQuery').value;
            if (query) {
                    if(query!="capps"&&!query.includes("testing_space"))
                    {
                var url = "https://yokonoha.github.io/" + encodeURIComponent(query);

                window.location.href = url;
                    }
                    else
                    {
                            if(query=="capps")
                            {
                                let ur1="pages.dev"
                                var url = "https://caffeineapps." + ur1;
                                window.location.href = url;
                            }
                            else if(query.includes("testing_space"))
                            {
                        var url = "https://yokonoha.github.io/" + query;

                        window.location.href = url;  
                            }
                    }
            } else {
               alert("管理者パスワードを入力してください。");
            }
        }
