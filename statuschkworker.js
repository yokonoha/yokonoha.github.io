async function updateStatus() {
    
    const IMG_PATH = {
        ok: './imgs/koumokugreen.png',
        warn: './imgs/koumokuorange.png',
        error: './imgs/koumored.png'
    };
    let yokoha=[];

    try {
        
        const response = await fetch('./status/status.json?t=' + Date.now());
        const data = await response.json();
        

        const sitesObj = data.sites;
        const timestmptmp=`${data.last_checked}`;
        const timestmp=timestmptmp.replace("T","<br>").replace("Z","時点");
        const siteNames = Object.keys(sitesObj);

      

        for (let i = 0; i < 5; i++) {
            const imgTag = document.getElementById(`status-${i}`);
            //const nameTag = document.getElementById(`name-${i}`);
            
            if (siteNames[i]) {
                const siteName = siteNames[i];
                const siteData = sitesObj[siteName];
                const statusText = siteData.status || "";

                //nameTag.textContent = siteName;

                if (statusText.includes("異常") || statusText.includes("404")||statusText.includes("500")) {
                    imgTag.src = IMG_PATH.error;
                    yokoha[i]=`アクセス不可<br>障害発生中<br><br><small>${timestmp}</small>`;
                } else if (statusText.includes("休業")) {
                    imgTag.src = IMG_PATH.warn;
                    yokoha[i]=`サイト停止中<br><br><small>${timestmp}</small>`;
                } else {
                    imgTag.src = IMG_PATH.ok;
                    yokoha[i]=`アクセス可<br>-正常稼働中-<br><br><small>${timestmp}</small>`;
                }
                
                imgTag.style.display = 'inline';
            } else {
                nameTag.textContent = "-";
                imgTag.style.display = 'none';
            }
        }
      if(document.getElementById("A1"))
      {
        document.getElementById("A1").innerHTML=yokoha[0];
      }
      if(document.getElementById("A2"))
      {
        document.getElementById("A2").innerHTML=yokoha[1];
      }
        if(document.getElementById("A3"))
        {
        document.getElementById("A3").innerHTML=yokoha[2];
        }
        if(document.getElementById("A4"))
        {
        document.getElementById("A4").innerHTML=yokoha[3];
        }
        if(document.getElementById("A5"))
        {
        document.getElementById("A5").innerHTML=yokoha[4];
        }

    } catch (error) {
        
        console.error(error);
    }
}

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateStatus);
        } else {
            updateStatus();
        }